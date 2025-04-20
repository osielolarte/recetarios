document.addEventListener('DOMContentLoaded', async () => {

    // --- Global Variables & Constants ---
    const FAVORITES_KEY = 'recetario_favoritos';
    const THEME_KEY = 'recetario_tema';
    const RECIPE_SOURCES = {
        VERACRUZ: 'Veracruz',
        UNICEF: 'UNICEF'
    };
    const RECIPE_DATA_FILES = {
        [RECIPE_SOURCES.VERACRUZ]: '/veracruz.json',
        [RECIPE_SOURCES.UNICEF]: '/unicef.json'
    };
    const CARD_COLORS = ['bg-emerald-600', 'bg-teal-600', 'bg-sky-600']; // Tailwind classes for card headers

    let allRecipes = { // Object to hold recipes loaded from JSON
        [RECIPE_SOURCES.VERACRUZ]: [],
        [RECIPE_SOURCES.UNICEF]: []
    };
    let favorites = new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]'));
    let currentTheme = localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    let lastFocusedElement = null; // For modal accessibility

    // --- DOM Element Selectors ---
    const recipeListContainer = document.getElementById('recipeListContainer');
    const modal = document.getElementById('recipeModal');
    const modalTitle = document.getElementById('modalRecipeTitle');
    const modalImage = document.getElementById('modalRecipeImage');
    const modalContentContainer = document.getElementById('modalRecipeContentContainer'); // For aria-describedby
    const ingredientsTableVeracruz = document.getElementById('ingredientsTableVeracruz');
    const ingredientsListUnicef = document.getElementById('ingredientsListUnicef');
    const modalIngredientsVeracruzBody = document.getElementById('modalIngredientsVeracruzBody');
    const modalIngredientsUnicefList = document.getElementById('modalIngredientsUnicefList');
    const modalPreparationList = document.getElementById('modalRecipePreparation');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const closeModalButton = document.getElementById('closeModalButton');
    const recipeCardTemplate = document.getElementById('recipe-card-template');

    // --- Core Functions ---

    /**
     * Loads recipe data from JSON files asynchronously.
     */
    async function loadRecipes() {
        recipeListContainer.innerHTML = '<p class="text-gray-500 dark:text-gray-400 italic col-span-full text-center">Cargando recetas...</p>';
        try {
            const veracruzPromise = fetch(RECIPE_DATA_FILES[RECIPE_SOURCES.VERACRUZ]);
            const unicefPromise = fetch(RECIPE_DATA_FILES[RECIPE_SOURCES.UNICEF]);

            const [veracruzResponse, unicefResponse] = await Promise.all([veracruzPromise, unicefPromise]);

            if (!veracruzResponse.ok) throw new Error(`Error cargando ${RECIPE_SOURCES.VERACRUZ}: ${veracruzResponse.statusText}`);
            if (!unicefResponse.ok) throw new Error(`Error cargando ${RECIPE_SOURCES.UNICEF}: ${unicefResponse.statusText}`);

            allRecipes[RECIPE_SOURCES.VERACRUZ] = await veracruzResponse.json();
            allRecipes[RECIPE_SOURCES.UNICEF] = await unicefResponse.json();

            console.log('Recetas cargadas:', allRecipes);
            displayRecipes(); // Display recipes once loaded

        } catch (error) {
            console.error("Error al cargar los datos de las recetas:", error);
            recipeListContainer.innerHTML = `<p class="text-red-600 dark:text-red-400 font-semibold col-span-full text-center">Error al cargar las recetas. Por favor, intente recargar la página.</p>`;
        }
    }

    /**
     * Displays recipes grouped by Favorites, Veracruz, and UNICEF.
     * Uses the <template> element for card creation.
     */
    function displayRecipes() {
        recipeListContainer.innerHTML = ''; // Clear previous content
        const fragment = document.createDocumentFragment();
        let colorIndex = 0; // To cycle through CARD_COLORS

        // --- Helper to create a section header ---
        const createSectionHeader = (id, title, subtitle) => {
            const headerDiv = document.createElement('section'); // Use <section>
            headerDiv.className = 'section-header';
            headerDiv.id = id;
            headerDiv.setAttribute('aria-labelledby', `${id}-title`); // Accessibility
            headerDiv.innerHTML = `
                <h2 id="${id}-title">${title}</h2>
                ${subtitle ? `<p>${subtitle}</p>` : ''}
            `;
            return headerDiv;
        };

        // --- Helper to create a recipe card using the template ---
        const createRecipeCard = (recipe) => {
            if (!recipeCardTemplate) {
                console.error("Template 'recipe-card-template' not found.");
                return null;
            }
            const cardClone = recipeCardTemplate.content.cloneNode(true);
            const cardElement = cardClone.querySelector('.recipe-card');
            const cardHeader = cardClone.querySelector('.card-header');
            const cardTitleEl = cardClone.querySelector('.card-title');
            const cardImageEl = cardClone.querySelector('.card-image');
            const recipeTitleEl = cardClone.querySelector('.recipe-title');
            const favBtn = cardClone.querySelector('.favorite-btn');

            // Set data attributes for event delegation
            cardElement.dataset.recipeId = recipe.id;
            cardElement.dataset.recipeSource = recipe.source;

            // Set card content
            const cardTitleText = (recipe.source === RECIPE_SOURCES.VERACRUZ) ? `Menú ${recipe.id}` : `Menú ${recipe.id}`; // Keep original ID format
            cardTitleEl.textContent = cardTitleText;

            const imageUrl = recipe.image || (recipe.source === RECIPE_SOURCES.VERACRUZ
                ? 'https://placehold.co/600x400/e0e7ff/4338ca?text=Platillo+Veracruz'
                : 'https://placehold.co/600x400/a5f3fc/0e7490?text=Platillo+UNICEF');
            cardImageEl.src = imageUrl;
            cardImageEl.alt = `Imagen de ${recipe.title}`;

            recipeTitleEl.textContent = recipe.title;
            recipeTitleEl.title = recipe.title; // Tooltip for long titles

            // Set favorite button state
            const isFav = isFavorite(recipe.id);
            favBtn.innerHTML = isFav ? '★' : '☆';
            favBtn.title = isFav ? 'Quitar de favoritos' : 'Agregar a favoritos';
            favBtn.setAttribute('aria-label', favBtn.title);
            if (isFav) {
                favBtn.classList.add('favorited');
            } else {
                favBtn.classList.remove('favorited');
            }

            // Apply header color (cycling through defined colors)
            const bgColor = CARD_COLORS[colorIndex % CARD_COLORS.length];
            cardHeader.classList.add(bgColor);
            colorIndex++;

            return cardClone; // Return the DocumentFragment containing the card
        };

        // 1. FAVORITES Section
        const favoriteRecipes = [];
        favorites.forEach(favId => {
            // Search in both sources using the stored ID directly
            const favRecipe = allRecipes[RECIPE_SOURCES.VERACRUZ].find(r => r.id === favId) ||
                              allRecipes[RECIPE_SOURCES.UNICEF].find(r => r.id === favId);
            if (favRecipe) {
                favoriteRecipes.push({ ...favRecipe }); // Push a copy
            }
        });

        if (favoriteRecipes.length > 0) {
            fragment.appendChild(createSectionHeader('section-favorites', '⭐ Favoritos', 'Tus recetas favoritas'));
            favoriteRecipes.forEach(recipe => {
                const card = createRecipeCard(recipe);
                if (card) {
                    // Override header color for favorites
                    const cardHeader = card.querySelector('.card-header');
                    CARD_COLORS.forEach(cls => cardHeader.classList.remove(cls)); // Remove cycled color
                    cardHeader.classList.add('bg-orange-500'); // Tailwind orange for favorites
                    fragment.appendChild(card);
                }
            });
        }

        // 2. VERACRUZ Section
        if (allRecipes[RECIPE_SOURCES.VERACRUZ].length > 0) {
            fragment.appendChild(createSectionHeader('section-veracruz', 'Recetario Escolar Veracruz', 'Menús modalidad caliente'));
            allRecipes[RECIPE_SOURCES.VERACRUZ].forEach(recipe => {
                const card = createRecipeCard(recipe);
                if (card) fragment.appendChild(card);
            });
        }

        // 3. UNICEF Section
        if (allRecipes[RECIPE_SOURCES.UNICEF].length > 0) {
            fragment.appendChild(createSectionHeader('section-unicef', 'Recetario Saludable UNICEF', 'Sabores Sanos y Amigables con el Planeta'));
            allRecipes[RECIPE_SOURCES.UNICEF].forEach(recipe => {
                const card = createRecipeCard(recipe);
                if (card) fragment.appendChild(card);
            });
        }

        // Append all sections and cards to the container
        recipeListContainer.appendChild(fragment);
    }

    /**
     * Shows the recipe details in the modal.
     * @param {string|number} id - The ID of the recipe.
     * @param {string} source - The source of the recipe (Veracruz or UNICEF).
     */
    function showRecipeDetail(id, source) {
        const recipe = allRecipes[source]?.find(r => r.id == id); // Use == for potential type mismatch (e.g., number vs string ID)

        if (!recipe) {
            console.error(`Receta no encontrada: ID=${id}, Source=${source}`);
            return;
        }

        // Populate Modal Header
        modalTitle.textContent = (source === RECIPE_SOURCES.VERACRUZ) ? `Menú ${recipe.id}: ${recipe.title}` : recipe.title;
        modalImage.src = recipe.image || 'https://placehold.co/600x400/e2e8f0/4a5568?text=Imagen+no+disponible';
        modalImage.alt = `Imagen de ${recipe.title}`;

        // Clear previous content
        modalIngredientsVeracruzBody.innerHTML = '';
        modalIngredientsUnicefList.innerHTML = '';
        modalPreparationList.innerHTML = '';

        // Hide/Show correct ingredient format section
        ingredientsTableVeracruz.style.display = (source === RECIPE_SOURCES.VERACRUZ) ? 'block' : 'none';
        ingredientsListUnicef.style.display = (source === RECIPE_SOURCES.UNICEF) ? 'block' : 'none';

        // Populate Ingredients
        const ingFragment = document.createDocumentFragment();
        if (source === RECIPE_SOURCES.VERACRUZ) {
            recipe.ingredients.forEach(ing => {
                const row = document.createElement('tr');
                // Use Tailwind classes directly
                row.className = 'border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-slate-50 dark:hover:bg-gray-700';
                row.innerHTML = `
                    <td class="border-r border-gray-300 dark:border-gray-600 p-2 align-top">${ing.name}</td>
                    <td class="border-r border-gray-300 dark:border-gray-600 p-2 align-top">${ing.preescolar || '-'}</td>
                    <td class="border-r border-gray-300 dark:border-gray-600 p-2 align-top">${ing.escolar || '-'}</td>
                    <td class="p-2 align-top">${ing.secundaria || '-'}</td>
                `;
                ingFragment.appendChild(row);
            });
            // Add note if C.S. is present
            if (recipe.ingredients.some(ing => ing.preescolar?.includes('C.S.') || ing.escolar?.includes('C.S.') || ing.secundaria?.includes('C.S.'))) {
                const noteRow = document.createElement('tr');
                noteRow.innerHTML = `<td colspan="4" class="p-2 text-xs text-gray-500 dark:text-gray-400 bg-slate-50 dark:bg-gray-700">* C.S. = Cantidad Suficiente</td>`;
                ingFragment.appendChild(noteRow);
            }
            modalIngredientsVeracruzBody.appendChild(ingFragment);
        } else { // UNICEF
            recipe.ingredients.forEach(ing => {
                const li = document.createElement('li');
                // Check for category titles (e.g., "Picadillo:")
                if (ing.endsWith(':') && ing.trim().split(' ').length < 4) {
                    li.innerHTML = `<strong class="font-medium text-sm text-gray-800 dark:text-gray-100">${ing}</strong>`;
                    // Use Tailwind for styling subheadings
                    li.className = 'mt-2 list-none -ml-4 text-sm font-semibold text-gray-600 dark:text-gray-300';
                } else {
                    // Remove leading hyphens/spaces if present
                    li.textContent = ing.trim().replace(/^-?\s*/, '');
                }
                ingFragment.appendChild(li);
            });
            modalIngredientsUnicefList.appendChild(ingFragment);
        }

        // Populate Preparation Steps
        const prepFragment = document.createDocumentFragment();
        recipe.preparation.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            prepFragment.appendChild(li);
        });
        modalPreparationList.appendChild(prepFragment);

        // Show Modal and Handle Focus
        lastFocusedElement = document.activeElement; // Store element that had focus before opening
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100'); // Use Tailwind for transition
        document.body.classList.add('modal-open'); // Prevent body scroll

        // Delay focus slightly to ensure modal is fully visible
        setTimeout(() => {
            closeModalButton.focus(); // Focus the close button first
            trapFocus(modal); // Start trapping focus
        }, 100); // Adjust delay if needed
    }

    /**
     * Hides the recipe detail modal.
     */
    function hideRecipeDetail() {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100');
        document.body.classList.remove('modal-open');
        // Restore focus to the element that opened the modal
        if (lastFocusedElement) {
            lastFocusedElement.focus();
            lastFocusedElement = null; // Clear stored element
        }
    }

    // --- Theme Handling ---

    /**
     * Applies the current theme (light/dark) to the body.
     */
    function applyTheme() {
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark'); // Apply to <html> for Tailwind
            document.body.classList.add('dark'); // Keep for specific CSS rules if needed
            themeToggleBtn.textContent = '☀️';
            themeToggleBtn.title = 'Cambiar a tema claro';
            themeToggleBtn.setAttribute('aria-label', 'Cambiar a tema claro');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
            themeToggleBtn.textContent = '🌙';
            themeToggleBtn.title = 'Cambiar a tema oscuro';
             themeToggleBtn.setAttribute('aria-label', 'Cambiar a tema oscuro');
        }
    }

    /**
     * Toggles the theme between light and dark and saves the preference.
     */
    function toggleTheme() {
        currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, currentTheme);
        applyTheme();
    }

    // --- Favorites Handling ---

    /**
     * Saves the current set of favorites to localStorage.
     */
    function saveFavorites() {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
    }

    /**
     * Toggles a recipe's favorite status.
     * @param {string|number} recipeId - The ID of the recipe to toggle.
     */
    function toggleFavorite(recipeId) {
        if (favorites.has(recipeId)) {
            favorites.delete(recipeId);
        } else {
            favorites.add(recipeId);
        }
        saveFavorites();
        displayRecipes(); // Re-render to show updated favorite status and section
    }

    /**
     * Checks if a recipe is in the favorites.
     * @param {string|number} recipeId - The ID of the recipe to check.
     * @returns {boolean} - True if the recipe is a favorite, false otherwise.
     */
    function isFavorite(recipeId) {
        // Ensure consistent type comparison if IDs might be numbers/strings
        return [...favorites].some(favId => favId == recipeId);
    }


    // --- Accessibility ---

    /**
     * Traps focus within a given element (typically a modal).
     * @param {HTMLElement} element - The element within which focus should be trapped.
     */
    function trapFocus(element) {
        const focusableEls = element.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusableEl = focusableEls[0];
        const lastFocusableEl = focusableEls[focusableEls.length - 1];

        element.addEventListener('keydown', function(e) {
            const isTabPressed = e.key === 'Tab' || e.keyCode === 9;

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        });
    }

    // --- Event Listeners Setup ---

    function setupEventListeners() {
        // Theme Toggle
        themeToggleBtn.addEventListener('click', toggleTheme);

        // Mobile Menu Toggle
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.setAttribute('aria-hidden', isExpanded);
        });

        // Close Mobile Menu on Link Click
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            }
        });

        // Modal: Close Button
        closeModalButton.addEventListener('click', hideRecipeDetail);

        // Modal: Close on Outside Click
        modal.addEventListener('click', (event) => {
            // Check if the click is directly on the modal backdrop (the modal element itself)
            if (event.target === modal) {
                hideRecipeDetail();
            }
        });

        // Modal: Close on Escape Key
        document.addEventListener('keydown', (event) => {
            // Check if modal is visible using opacity class (more reliable than display)
            if (event.key === 'Escape' && modal.classList.contains('opacity-100')) {
                hideRecipeDetail();
            }
        });

        // Event Delegation for Recipe Cards and Favorite Buttons
        recipeListContainer.addEventListener('click', (event) => {
            const card = event.target.closest('.recipe-card');
            if (!card) return; // Click was not inside a card

            const recipeId = card.dataset.recipeId;
            const recipeSource = card.dataset.recipeSource;

            if (!recipeId || !recipeSource) return; // Card missing data attributes

            // Check if the favorite button was clicked
            if (event.target.closest('.favorite-btn')) {
                toggleFavorite(recipeId);
            } else {
                // Otherwise, open the modal for the card
                showRecipeDetail(recipeId, recipeSource);
            }
        });

        // Add keydown listener for Enter/Space on cards for accessibility
        recipeListContainer.addEventListener('keydown', (event) => {
             const card = event.target.closest('.recipe-card');
             if (!card) return;

             if (event.key === 'Enter' || event.key === ' ') {
                 // Prevent default spacebar scroll
                 event.preventDefault();

                 const recipeId = card.dataset.recipeId;
                 const recipeSource = card.dataset.recipeSource;

                 if (recipeId && recipeSource) {
                     // Check if focus is on the favorite button within the card
                     if (document.activeElement === card.querySelector('.favorite-btn')) {
                         toggleFavorite(recipeId);
                     } else {
                         // Otherwise, open the modal
                         showRecipeDetail(recipeId, recipeSource);
                     }
                 }
             }
        });


        // Smooth Scroll for Nav Links (including Favorites)
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Calculate offset based on sticky nav height if necessary
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight - 10; // Extra 10px padding

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                    // Optionally close mobile menu if open
                     if (!mobileMenu.classList.contains('hidden')) {
                         mobileMenu.classList.add('hidden');
                         mobileMenuButton.setAttribute('aria-expanded', 'false');
                         mobileMenu.setAttribute('aria-hidden', 'true');
                     }
                } else if (targetId === '#section-favorites') {
                    // Handle case where favorites section might not exist yet
                    console.warn("Sección de favoritos no encontrada. Añade alguna receta a favoritos.");
                     // Optionally scroll to top or show a message
                     window.scrollTo({ top: 0, behavior: "smooth" });
                }
            });
        });
    }

    // --- Initialization ---
    applyTheme(); // Apply theme immediately
    setupEventListeners(); // Set up interactions
    await loadRecipes(); // Load data and display recipes

}); // End DOMContentLoaded
