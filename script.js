document.addEventListener('DOMContentLoaded', async () => {

    // --- Global Variables & Constants ---
    const FAVORITES_KEY = 'recetario_favoritos';
    const THEME_KEY = 'recetario_tema';
    const RECIPE_SOURCES = {
        VERACRUZ: 'Veracruz',
        UNICEF: 'UNICEF'
    };
    const veracruzJsonPath = './data/veracruz.json';
    const unicefJsonPath = './data/unicef.json';
    const CARD_COLORS = ['bg-emerald-600', 'bg-teal-600', 'bg-sky-600'];

    let allRecipes = {
        [RECIPE_SOURCES.VERACRUZ]: [],
        [RECIPE_SOURCES.UNICEF]: []
    };
    let favorites = new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]'));
    let currentTheme = localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    let lastFocusedElement = null;
    let removeFocusTrapListener = null; // Declare here

    // --- DOM Element Selectors ---
    const recipeListContainer = document.getElementById('recipeListContainer');
    const modal = document.getElementById('recipeModal');
    const modalTitle = document.getElementById('modalRecipeTitle');
    const modalImage = document.getElementById('modalRecipeImage');
    const modalContentContainer = document.getElementById('modalRecipeContentContainer');
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

    async function loadRecipes() {
        recipeListContainer.innerHTML = '<p class="text-gray-500 dark:text-gray-400 italic col-span-full text-center">Cargando recetas...</p>';
        console.log(`Intentando cargar desde: ${veracruzJsonPath} y ${unicefJsonPath}`);
        try {
            const veracruzPromise = fetch(veracruzJsonPath);
            const unicefPromise = fetch(unicefJsonPath);
            const [veracruzResponse, unicefResponse] = await Promise.all([veracruzPromise, unicefPromise]);

            if (!veracruzResponse.ok) throw new Error(`Error cargando ${RECIPE_SOURCES.VERACRUZ}: ${veracruzResponse.status} ${veracruzResponse.statusText} (Path: ${veracruzJsonPath})`);
            if (!unicefResponse.ok) throw new Error(`Error cargando ${RECIPE_SOURCES.UNICEF}: ${unicefResponse.status} ${unicefResponse.statusText} (Path: ${unicefJsonPath})`);

            allRecipes[RECIPE_SOURCES.VERACRUZ] = await veracruzResponse.json();
            allRecipes[RECIPE_SOURCES.UNICEF] = await unicefResponse.json();

            console.log('Recetas cargadas:', allRecipes);
            displayRecipes();
        } catch (error) {
            console.error("Error al cargar los datos de las recetas:", error);
            recipeListContainer.innerHTML = `<p class="text-red-600 dark:text-red-400 font-semibold col-span-full text-center px-2">Error al cargar las recetas. Por favor, intente recargar la página. (${error.message || 'Error desconocido'})</p>`;
        }
    }

    /**
     * Displays recipes grouped by Favorites, Veracruz, and UNICEF.
     * Uses the <template> element for card creation.
     */
    function displayRecipes() {
        recipeListContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        let colorIndex = 0;

        const createSectionHeader = (id, title, subtitle) => {
            const headerDiv = document.createElement('section');
            headerDiv.className = 'section-header';
            headerDiv.id = id;
            headerDiv.setAttribute('aria-labelledby', `${id}-title`);
            headerDiv.innerHTML = `
                <h2 id="${id}-title">${title}</h2>
                ${subtitle ? `<p>${subtitle}</p>` : ''}
            `;
            return headerDiv;
        };

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

            cardElement.dataset.recipeId = recipe.id;
            cardElement.dataset.recipeSource = recipe.source;
            const cardTitleText = (recipe.source === RECIPE_SOURCES.VERACRUZ) ? `Menú ${recipe.id}` : `Menú ${recipe.id}`;
            cardTitleEl.textContent = cardTitleText;
            const imageUrl = recipe.image || (recipe.source === RECIPE_SOURCES.VERACRUZ
                ? 'https://placehold.co/600x400/e0e7ff/4338ca?text=Platillo+Veracruz'
                : 'https://placehold.co/600x400/a5f3fc/0e7490?text=Platillo+UNICEF');
            cardImageEl.src = imageUrl;
            cardImageEl.alt = `Imagen de ${recipe.title}`;
            recipeTitleEl.textContent = recipe.title;
            recipeTitleEl.title = recipe.title;

            const isFav = isFavorite(recipe.id);
            favBtn.innerHTML = isFav ? '★' : '☆';
            favBtn.title = isFav ? 'Quitar de favoritos' : 'Agregar a favoritos';
            favBtn.setAttribute('aria-label', favBtn.title);
            if (isFav) favBtn.classList.add('favorited');
            else favBtn.classList.remove('favorited');

            const bgColor = CARD_COLORS[colorIndex % CARD_COLORS.length];
            cardHeader.classList.add(bgColor);
            // Do not increment colorIndex here if favorites have a fixed color

            return cardClone;
        };

        // --- FAVORITES Section ---
        const favoriteRecipes = [];
        console.log("Current favorites Set:", favorites); // Log: See what IDs are in the Set
        favorites.forEach(favId => { // favId is guaranteed to be a string from the Set
            console.log(`Looking for favorite ID: ${favId} (type: ${typeof favId})`); // Log: ID being searched

            // Find in Veracruz recipes (comparing as strings)
            let foundRecipe = allRecipes[RECIPE_SOURCES.VERACRUZ].find(r => {
                // console.log(`Comparing Veracruz r.id: ${r.id} (type: ${typeof r.id}) with favId: ${favId}`); // Detailed log
                return String(r.id) === favId;
            });

            // If not found in Veracruz, find in UNICEF recipes (comparing as strings)
            if (!foundRecipe) {
                foundRecipe = allRecipes[RECIPE_SOURCES.UNICEF].find(r => {
                     // console.log(`Comparing UNICEF r.id: ${r.id} (type: ${typeof r.id}) with favId: ${favId}`); // Detailed log
                     return String(r.id) === favId; // UNICEF IDs are already strings, but String() is safe
                });
            }

            if (foundRecipe) {
                console.log(`Found favorite recipe for ID ${favId}:`, foundRecipe.title); // Log: Success
                favoriteRecipes.push({ ...foundRecipe }); // Push a copy
            } else {
                console.warn(`Could not find recipe data for favorite ID: ${favId}`); // Log: Failure
            }
        });
        console.log('Final favoriteRecipes array to render:', favoriteRecipes); // Log: Array before rendering

        if (favoriteRecipes.length > 0) {
            fragment.appendChild(createSectionHeader('section-favorites', '⭐ Favoritos', 'Tus recetas favoritas'));
            favoriteRecipes.forEach(recipe => {
                colorIndex = 0; // Reset color index for non-favorite sections if needed, or manage differently
                const card = createRecipeCard(recipe);
                if (card) {
                    const cardHeader = card.querySelector('.card-header');
                    CARD_COLORS.forEach(cls => cardHeader.classList.remove(cls));
                    cardHeader.classList.add('bg-orange-500'); // Fixed color for favorites
                    fragment.appendChild(card);
                }
            });
        } else {
            const noFavDiv = document.createElement('div');
            noFavDiv.id = 'section-favorites';
            noFavDiv.className = 'col-span-full text-center text-gray-500 dark:text-gray-400 italic py-4';
            noFavDiv.textContent = 'Aún no tienes recetas favoritas. ¡Marca algunas con la estrella ☆!';
            noFavDiv.style.scrollMarginTop = '90px';
            fragment.appendChild(noFavDiv);
        }
         // Reset color index before rendering non-favorite sections
        colorIndex = 0;

        // --- VERACRUZ Section ---
        if (allRecipes[RECIPE_SOURCES.VERACRUZ].length > 0) {
            fragment.appendChild(createSectionHeader('section-veracruz', 'Recetario Escolar Veracruz', 'Menús modalidad caliente'));
            allRecipes[RECIPE_SOURCES.VERACRUZ].forEach(recipe => {
                const card = createRecipeCard(recipe);
                 if (card) {
                     // Re-apply cycled color (createRecipeCard adds it, but we ensure it cycles correctly)
                     const cardHeader = card.querySelector('.card-header');
                     const bgColor = CARD_COLORS[colorIndex % CARD_COLORS.length];
                     CARD_COLORS.forEach(cls => cardHeader.classList.remove(cls)); // Remove potential favorite color if any overlap
                     cardHeader.classList.add(bgColor);
                     fragment.appendChild(card);
                     colorIndex++; // Increment only for non-favorite cards rendered
                 }
            });
        }

        // --- UNICEF Section ---
        if (allRecipes[RECIPE_SOURCES.UNICEF].length > 0) {
            fragment.appendChild(createSectionHeader('section-unicef', 'Recetario Saludable UNICEF', 'Sabores Sanos y Amigables con el Planeta'));
            allRecipes[RECIPE_SOURCES.UNICEF].forEach(recipe => {
                const card = createRecipeCard(recipe);
                 if (card) {
                     const cardHeader = card.querySelector('.card-header');
                     const bgColor = CARD_COLORS[colorIndex % CARD_COLORS.length];
                      CARD_COLORS.forEach(cls => cardHeader.classList.remove(cls));
                     cardHeader.classList.add(bgColor);
                     fragment.appendChild(card);
                     colorIndex++;
                 }
            });
        }

        recipeListContainer.appendChild(fragment);
    }


    function showRecipeDetail(id, source) {
        const recipe = allRecipes[source]?.find(r => String(r.id) === String(id)); // Use string comparison

        if (!recipe) {
            console.error(`Receta no encontrada: ID=${id}, Source=${source}`);
            return;
        }

        modalTitle.textContent = (source === RECIPE_SOURCES.VERACRUZ) ? `Menú ${recipe.id}: ${recipe.title}` : recipe.title;
        modalImage.src = recipe.image || 'https://placehold.co/600x400/e2e8f0/4a5568?text=Imagen+no+disponible';
        modalImage.alt = `Imagen de ${recipe.title}`;
        modalIngredientsVeracruzBody.innerHTML = '';
        modalIngredientsUnicefList.innerHTML = '';
        modalPreparationList.innerHTML = '';
        ingredientsTableVeracruz.style.display = (source === RECIPE_SOURCES.VERACRUZ) ? 'block' : 'none';
        ingredientsListUnicef.style.display = (source === RECIPE_SOURCES.UNICEF) ? 'block' : 'none';

        const ingFragment = document.createDocumentFragment();
        if (source === RECIPE_SOURCES.VERACRUZ) {
            recipe.ingredients.forEach(ing => {
                const row = document.createElement('tr');
                row.className = 'border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-slate-50 dark:hover:bg-gray-700';
                row.innerHTML = `
                    <td class="border-r border-gray-300 dark:border-gray-600 p-2 align-top">${ing.name}</td>
                    <td class="border-r border-gray-300 dark:border-gray-600 p-2 align-top">${ing.preescolar || '-'}</td>
                    <td class="border-r border-gray-300 dark:border-gray-600 p-2 align-top">${ing.escolar || '-'}</td>
                    <td class="p-2 align-top">${ing.secundaria || '-'}</td>
                `;
                ingFragment.appendChild(row);
            });
            if (recipe.ingredients.some(ing => ing.preescolar?.includes('C.S.') || ing.escolar?.includes('C.S.') || ing.secundaria?.includes('C.S.'))) {
                const noteRow = document.createElement('tr');
                noteRow.innerHTML = `<td colspan="4" class="p-2 text-xs text-gray-500 dark:text-gray-400 bg-slate-50 dark:bg-gray-700">* C.S. = Cantidad Suficiente</td>`;
                ingFragment.appendChild(noteRow);
            }
            modalIngredientsVeracruzBody.appendChild(ingFragment);
        } else {
            recipe.ingredients.forEach(ing => {
                const li = document.createElement('li');
                if (ing.endsWith(':') && ing.trim().split(' ').length < 4) {
                    li.innerHTML = `<strong class="font-medium text-sm text-gray-800 dark:text-gray-100">${ing}</strong>`;
                    li.className = 'mt-2 list-none -ml-4 text-sm font-semibold text-gray-600 dark:text-gray-300';
                } else {
                    li.textContent = ing.trim().replace(/^-?\s*/, '');
                }
                ingFragment.appendChild(li);
            });
            modalIngredientsUnicefList.appendChild(ingFragment);
        }

        const prepFragment = document.createDocumentFragment();
        recipe.preparation.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            prepFragment.appendChild(li);
        });
        modalPreparationList.appendChild(prepFragment);

        lastFocusedElement = document.activeElement;
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        document.body.classList.add('modal-open');

        setTimeout(() => {
            closeModalButton.focus();
            // Start trapping focus and store the cleanup function
            if (removeFocusTrapListener) removeFocusTrapListener(); // Remove previous listener if any
            removeFocusTrapListener = trapFocus(modal);
        }, 100);
    }

    function hideRecipeDetail() {
        // Remove focus trap listener first
        if (removeFocusTrapListener) {
            removeFocusTrapListener();
            removeFocusTrapListener = null;
        }

        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100');
        document.body.classList.remove('modal-open');
        if (lastFocusedElement) {
            setTimeout(() => {
                 if(lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
                    lastFocusedElement.focus();
                 }
                 lastFocusedElement = null;
            }, 0);
        }
    }

    function applyTheme() {
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
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

    function toggleTheme() {
        currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, currentTheme);
        applyTheme();
    }

    function saveFavorites() {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
    }

    function toggleFavorite(recipeId) {
        const idStr = String(recipeId);
        if (favorites.has(idStr)) {
            favorites.delete(idStr);
        } else {
            favorites.add(idStr);
        }
        saveFavorites();
        displayRecipes(); // Re-render

        // Announce change for accessibility
        const favButton = recipeListContainer.querySelector(`.recipe-card[data-recipe-id="${recipeId}"] .favorite-btn`);
        if (favButton) {
            const status = favorites.has(idStr) ? 'agregada a' : 'eliminada de';
            announcePolitely(`Receta ${status} favoritos.`);
            favButton.innerHTML = favorites.has(idStr) ? '★' : '☆';
            favButton.title = favorites.has(idStr) ? 'Quitar de favoritos' : 'Agregar a favoritos';
            favButton.setAttribute('aria-label', favButton.title);
        }
    }

    function announcePolitely(text) {
        let announcer = document.getElementById('polite-announcer');
        if (!announcer) {
            announcer = document.createElement('div');
            announcer.id = 'polite-announcer';
            announcer.setAttribute('aria-live', 'polite');
            announcer.style.position = 'absolute';
            announcer.style.width = '1px';
            announcer.style.height = '1px';
            announcer.style.padding = '0';
            announcer.style.margin = '-1px';
            announcer.style.overflow = 'hidden';
            announcer.style.clip = 'rect(0, 0, 0, 0)';
            announcer.style.whiteSpace = 'nowrap';
            announcer.style.border = '0';
            document.body.appendChild(announcer);
        }
        announcer.textContent = text;
        setTimeout(() => {
            if (announcer) announcer.textContent = '';
        }, 1000);
    }

    function isFavorite(recipeId) {
        return favorites.has(String(recipeId));
    }

    function trapFocus(element) {
        const focusableEls = element.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableEls.length === 0) return function(){}; // Return no-op cleanup

        const firstFocusableEl = focusableEls[0];
        const lastFocusableEl = focusableEls[focusableEls.length - 1];

        const handleKeyDown = function(e) {
            const isTabPressed = e.key === 'Tab' || e.keyCode === 9;
            if (!isTabPressed) return;

            // If focus is outside, bring it back
            if (!element.contains(document.activeElement)) {
                 firstFocusableEl.focus();
                 e.preventDefault(); // Prevent default tab behavior which might move focus outside
                 return; // Exit after refocusing
            }

            // Handle Tab and Shift+Tab
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        };

        element.addEventListener('keydown', handleKeyDown);
        // Return a function to remove the event listener
        return function removeTrapFocus() {
            element.removeEventListener('keydown', handleKeyDown);
        };
    }


    function setupEventListeners() {
        themeToggleBtn.addEventListener('click', toggleTheme);
        mobileMenuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            mobileMenuButton.setAttribute('aria-expanded', !isHidden);
            mobileMenu.setAttribute('aria-hidden', isHidden);
        });
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            }
        });
        closeModalButton.addEventListener('click', hideRecipeDetail);
        modal.addEventListener('click', (event) => {
            if (event.target === modal) hideRecipeDetail();
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('opacity-100')) hideRecipeDetail();
        });

        recipeListContainer.addEventListener('click', (event) => {
            const card = event.target.closest('.recipe-card');
            if (!card) return;
            const recipeId = card.dataset.recipeId;
            const recipeSource = card.dataset.recipeSource;
            if (!recipeId || !recipeSource) {
                console.warn("Card clicked is missing data attributes"); return;
            }
            if (event.target.closest('.favorite-btn')) {
                toggleFavorite(recipeId);
            } else {
                showRecipeDetail(recipeId, recipeSource);
            }
        });

        recipeListContainer.addEventListener('keydown', (event) => {
             const card = event.target.closest('.recipe-card');
             if (!card) return;
             if (event.key === 'Enter' || event.key === ' ') {
                 event.preventDefault();
                 const recipeId = card.dataset.recipeId;
                 const recipeSource = card.dataset.recipeSource;
                 if (recipeId && recipeSource) {
                     if (document.activeElement === card.querySelector('.favorite-btn')) {
                         toggleFavorite(recipeId);
                     } else {
                         showRecipeDetail(recipeId, recipeSource);
                     }
                 }
             }
        });

        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                try {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const nav = document.querySelector('nav');
                        const navHeight = nav ? nav.offsetHeight : 70;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navHeight - 10;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        if (!mobileMenu.classList.contains('hidden')) {
                             mobileMenu.classList.add('hidden');
                             mobileMenuButton.setAttribute('aria-expanded', 'false');
                             mobileMenu.setAttribute('aria-hidden', 'true');
                         }
                    } else if (targetId === '#section-favorites') {
                         const favPlaceholder = document.getElementById('section-favorites');
                         if (favPlaceholder) {
                             const nav = document.querySelector('nav');
                             const navHeight = nav ? nav.offsetHeight : 70;
                             const elementPosition = favPlaceholder.getBoundingClientRect().top;
                             const offsetPosition = elementPosition + window.pageYOffset - navHeight - 10;
                              window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                         } else {
                            console.warn("Sección de favoritos no encontrada.");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                         }
                    } else {
                         console.warn(`Elemento con ID '${targetId}' no encontrado para scroll.`);
                    }
                } catch (error) {
                     console.error(`Error al intentar hacer scroll a '${targetId}':`, error);
                }
            });
        });
    }

    // --- Initialization ---
    applyTheme();
    setupEventListeners();
    await loadRecipes();

}); // End DOMContentLoaded
