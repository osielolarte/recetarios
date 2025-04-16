document.addEventListener('DOMContentLoaded', () => {

    // --- Datos Recetario Veracruz (IDs 1-20) ---
    const veracruzRecipes = [
             {
                id: 1,
                source: 'Veracruz',
                title: "Sopa de Alubias con Camote, Malanga o Yuca y Zanahoria",
                image: "https://ziploc.com/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fscjohnsonana080-dart-production-40df%2Fmedia%2Fproject%2Fdart%2Fziploc%2Fimages%2Fimages-for-recipes%2Flunch%2Farticle-sweet_potato_vegetable_soup%2Fziploc_us-12_23-article_sweet_potato_vegetable_soup_hero.webp%3Fh%3D990%26iar%3D0%26w%3D1760&w=1920&q=75", // <-- Reemplaza esta URL con la imagen de la receta 1
                ingredients: [ // Formato Veracruz: Objeto con cantidades por edad
                    { name: "Zanahoria picada", preescolar: "1/2 Taza (70g)", escolar: "1/2 Taza (70g)", secundaria: "1 taza (140g)" },
                    { name: "Salsa de jitomate", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Camote cocido", preescolar: "1/3 taza (69g)", escolar: "2/3 taza (138g)", secundaria: "1 taza (207g)" },
                    { name: "Alubia cruda", preescolar: "1/4 Taza (35g)", escolar: "1/4 Taza (35g)", secundaria: "1/2 Taza (70g)" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                ],
                preparation: [
                    "Cocer las alubias de manera tradicional.",
                    "Lavar, desinfectar, cortar el camote, malanga o yuca y zanahoria en cubos y reservar.",
                    "Poner en un sartén el aceite a fuego suave, agregar la salsa de jitomate, sal y sazonar.",
                    "Una vez sazonado el jitomate agregar a las alubias con caldo, también las verduras cortadas, dejar hervir de 10 a 15 minutos y apagar.",
                    "Servir."
                ]
            },
            {
                id: 2,
                source: 'Veracruz',
                title: "Sopa de Pasta con Verduras y Pollo",
                image: "https://jetextramar.com/wp-content/uploads/2021/09/receta-fideo-grueso-empresa-de-alimentos.jpg", // <-- Reemplaza esta URL con la imagen de la receta 2
                ingredients: [
                    { name: "Chícharo cocido", preescolar: "2 Cucharadas (15g)", escolar: "1/4 Taza (30g)", secundaria: "1/4 Taza (25g)" },
                    { name: "Chayote cocido", preescolar: "1/4 Taza (30g)", escolar: "1/2 Taza (50g)", secundaria: "3/4 Taza (50g)" },
                    { name: "Zanahoria picada", preescolar: "1/4 Taza (25g)", escolar: "1/2 Taza (50g)", secundaria: "3/4 Taza (50g)" },
                    { name: "Salsa de jitomate", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Pasta integral cruda", preescolar: "20g", escolar: "40g", secundaria: "60g" },
                    { name: "Pollo deshebrado", preescolar: "38g", escolar: "76g", secundaria: "76g" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                ],
                preparation: [
                    "Lavar, desinfectar, picar el chayote y la zanahoria, reservar.",
                    "Lavar la bolsa del chícharo perfectamente, abrir, escurrir el líquido, enjuagar con agua de garrafón, volver a escurrir y reservar.",
                    "Lavar la bolsa del pollo perfectamente, abrir, escurrir el líquido y reservar.",
                    "Dorar levemente la sopa de pasta en un sartén y reservar.",
                    "En una cacerola calentar el aceite y sazonar a fuego suave la salsa de jitomate, agregar agua, sal y dejar hervir.",
                    "Agregar la pasta, el chayote y la zanahoria dejar cocinar durante 10 minutos.",
                    "Agregar el pollo y el chícharo, dejar que rompa el hervor y apagar.",
                    "Servir."
                ]
            },
             {
                id: 3,
                source: 'Veracruz',
                title: "Tortitas de Brócoli con Amaranto",
                 image: "https://img-global.cpcdn.com/recipes/ae37083d31194e56/680x964cq70/tortitas-de-brocoli-con-amaranto-en-caldillo-de-jitomate-foto-principal.webp", // <-- Reemplaza esta URL con la imagen de la receta 3
                ingredients: [
                    { name: "Brócoli cocido", preescolar: "1/2 Taza (92g)", escolar: "1/2 Taza (92g)", secundaria: "1 taza (184g)" },
                    { name: "Salsa de jitomate", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Amaranto tostado", preescolar: "1/4 Taza (16g)", escolar: "1/2 Taza (32g)", secundaria: "3/4 Taza (48g)" },
                    { name: "Fríjol crudo (para acompañar)", preescolar: "1/4 Taza (35g)", escolar: "1/4 Taza (35g)", secundaria: "1/2 Taza (70g)" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Huevo, sal, pimienta, ajo, laurel", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Cocer los frijoles de manera tradicional.",
                    "Lavar, desinfectar, picar el brócoli en trozos no tan pequeños; cocer al vapor por 10 minutos.",
                    "Una vez cocido el brócoli picar en trozos más pequeños, poner en un recipiente y agregar huevo, sal, pimienta y ajo finamente picado, mezclar.",
                    "Cuando todo esto este bien mezclado agregar el amaranto y volver a mezclar perfectamente; formar tortitas con la mezcla.",
                    "Poner un sartén con muy poco aceite a fuego bajo y dorar las tortitas por los dos lados.",
                    "En una cacerola poner aceite y sazonar la salsa de jitomate con sal y unas hojas de laurel.",
                    "Agregar las tortitas, dejar que rompa el hervor la salsa y apagar.",
                    "Servir las tortitas acompañadas de frijoles hervidos."
                ]
            },
            {
                id: 4,
                 source: 'Veracruz',
                title: "Tinga de Res con Coliflor o Brócoli",
                image: "https://www.cocinavital.mx/wp-content/uploads/2018/11/mini-tostadas-tinga-res.jpg", // <-- Reemplaza esta URL con la imagen de la receta 4
                ingredients: [
                    { name: "Coliflor cocida (o Brócoli)", preescolar: "1 taza (125g)", escolar: "1 taza (125g)", secundaria: "2 tazas (250g)" },
                    { name: "Col o repollo cocido", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Salsa de jitomate", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Harina de maíz nixtamalizada (para tortillas)", preescolar: "2.5 Cucharadas (18g)", escolar: "5 Cucharadas (36g)", secundaria: "7.5 Cucharadas (54g)" },
                    { name: "Carne de res deshebrada", preescolar: "30g", escolar: "30g", secundaria: "30g" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Sal, laurel", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Hidratar la harina de maíz nixtamalizado (siga las instrucciones de la etiqueta del producto), para hacer las tortillas.",
                    "Una vez hechas las tortillas poner al comal con fuego suave hasta tostar las tortillas.",
                    "Lavar la bolsa de la carne de res perfectamente, abrir, escurrir el líquido y reservar.",
                    "Lavar, desinfectar, rebanar la col y reservar.",
                    "Poner en un sartén el aceite a fuego suave, agregar la salsa de jitomate, sal y sazonar.",
                    "Una vez sazonado el jitomate agregar la col, unas hojas de laurel y dejar hervir unos 10 minutos.",
                    "Agregar la carne de res, dejar que rompa el hervor y apagar.",
                    "Coliflor o brócoli al vapor: Lavar, desinfectar, picar la coliflor o brócoli y cocer al vapor por 10 minutos.",
                    "Servir la tinga de res en las tortillas tostadas al comal y acompañar con la coliflor o el brócoli."
                ]
            },
             {
                id: 5,
                 source: 'Veracruz',
                title: "Lentejas con Arroz y Chayotes al Vapor",
                image: "https://img-global.cpcdn.com/recipes/8105878daf87d134/680x482cq70/cazuela-de-chayote-y-lenteja-foto-principal.jpg", // <-- Reemplaza esta URL con la imagen de la receta 5
                ingredients: [
                    { name: "Chayote", preescolar: "1/2 taza (80g)", escolar: "1/2 taza (80g)", secundaria: "1 taza (160g)" },
                    { name: "Arroz crudo", preescolar: "20g", escolar: "40g", secundaria: "60g" },
                    { name: "Lenteja cruda", preescolar: "1/4 taza (35g)", escolar: "1/4 taza (35g)", secundaria: "1/2 taza (70g)" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Cebolla, sal", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Cocer las lentejas de manera tradicional.",
                    "Guisar el arroz de manera tradicional.",
                    "En una cacerola poner aceite a fuego suave, agregar la cebolla hasta acitronar, vierte las lentejas sin caldo así como el arroz guisado y revolver hasta integrarlos.",
                    "Lavar, desinfectar pelar y picar el chayote y cocer al vapor por 10 minutos.",
                    "Servir las lentejas con arroz y acompañar con el chayote al vapor."
                ]
            },
            {
                id: 6,
                 source: 'Veracruz',
                title: "Ensalada de Alubias con Cacahuates y Tortillas Tostadas",
                image: "https://www.pequerecetas.com/wp-content/uploads/2020/05/ensalada-alubias-blancas.jpg", // <-- Reemplaza esta URL con la imagen de la receta 6
                ingredients: [
                    { name: "Ejotes cocidos picados", preescolar: "1/3 taza (42g)", escolar: "1/3 taza (42g)", secundaria: "1/2 Taza (63g)" },
                    { name: "Jitomate picado", preescolar: "1/2 Pieza (32g)", escolar: "1/2 Pieza (32g)", secundaria: "1 pieza (64g)" },
                    { name: "Cebolla blanca cruda", preescolar: "1 Cucharada (15g)", escolar: "1 Cucharada (15g)", secundaria: "2 Cucharadas (30g)" },
                    { name: "Harina de maíz nixtamalizada", preescolar: "2.5 Cucharadas (18g)", escolar: "5 Cucharadas (36g)", secundaria: "7.5 Cucharadas (54g)" },
                    { name: "Alubia cruda", preescolar: "1/4 Taza (35g)", escolar: "1/4 Taza (35g)", secundaria: "1/2 Taza (70g)" },
                    { name: "Cacahuate tostado sin sal", preescolar: "10 piezas (9g)", escolar: "14 piezas (12g)", secundaria: "14 piezas (12g)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Cilantro, limón, sal", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Hidratar la harina de maíz nixtamalizado (siga las instrucciones de la etiqueta del producto), para hacer las tortillas.",
                    "Una vez hechas las tortillas poner al comal con fuego suave hasta tostar las tortillas.",
                    "Cocinar las alubias de manera tradicional, ya cocidas separarlas del caldo.",
                    "Lavar, desinfectar, picar el ejote y cocer a vapor por 10 minutos.",
                    "Lavar, desinfectar, jitomate, cebolla, cilantro y reservar.",
                    "Lavar la bolsa de los cacahuates tostados, abrirla y vaciarlos en un recipiente.",
                    "En un recipiente hondo vaciar todo los ingredientes y revolver hasta integrar todo perfectamente, aderezar con unas gotas de limón y sal.",
                    "Servir la ensalada de alubias acompañadas con las tostadas."
                ]
            },
            {
                id: 7,
                 source: 'Veracruz',
                title: "Huevo Revuelto con Crucetas o Nopal y Tortilla",
                image: "https://images-gmi-pmc.edge-generalmills.com/e60233a5-319d-463d-be06-9697cffbec65.jpg", // <-- Reemplaza esta URL con la imagen de la receta 7
                ingredients: [
                    { name: "Nopal cocido (o Crucetas)", preescolar: "1 taza (149g)", escolar: "1 taza (149g)", secundaria: "2 tazas (298g)" },
                    { name: "Harina de maíz nixtamalizada", preescolar: "2.5 Cucharadas (18g)", escolar: "5 Cucharadas (36g)", secundaria: "7.5 Cucharadas (54g)" },
                    { name: "Huevo fresco", preescolar: "1 pieza (50g)", escolar: "2 piezas (100g)", secundaria: "2 piezas (100g)" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Cebolla, sal", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Hidratar la harina de maíz nixtamalizado (siga las instrucciones de la etiqueta del producto), para hacer las tortillas.",
                    "Lavar, desinfectar, picar y poner a cocer con muy poca agua y sal las crucetas o nopal.",
                    "Lavar, desinfectar, picar y reservar la cebolla.",
                    "Lavar los huevos, romperlos, depositar en un recipiente, agregar sal y revolver.",
                    "Poner al fuego suave un sartén con el aceite, vaciar la cebolla y sofreír, agregar las crucetas o nopal y revolver para integrar los ingredientes.",
                    "Cuando estos estén sazonados agregar el huevo y revolver hasta cocerse este.",
                    "Servir."
                ]
            },
             {
                id: 8,
                 source: 'Veracruz',
                title: "Guisado de Cerdo con Zanahoria y Chícharo, Tortillas",
                image: "https://img-global.cpcdn.com/recipes/a9a77639104ef7c6/1200x630cq70/photo.jpg", // <-- Reemplaza esta URL con la imagen de la receta 8
                ingredients: [
                    { name: "Chícharo cocido", preescolar: "1/8 taza (20g)", escolar: "1/6 taza (30g)", secundaria: "1/4 Taza (40g)" },
                    { name: "Zanahoria picada", preescolar: "1/4 Taza (32g)", escolar: "1/3 taza (30g)", secundaria: "1/2 Taza (64g)" },
                    { name: "Salsa de jitomate", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Tortilla de maíz", preescolar: "1 pieza (30g)", escolar: "2 piezas (60g)", secundaria: "3 piezas (90g)" },
                    { name: "Carne de cerdo", preescolar: "40g", escolar: "40g", secundaria: "40g" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                     { name: "Otros (mencionados en prep.)", preescolar: "Sal", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Lavar las bolsas de la zanahoria y el chícharo perfectamente, abrir, escurrir el líquido, enjuagar con agua de garrafón, volver a escurrir y reservar.",
                    "Lavar la bolsa de la carne de puerco perfectamente, abrir, escurrir el líquido y reservar.",
                    "En una cacerola poner aceite a fuego suave, agregar la salsa de jitomate, sal y sazonar.",
                    "Una vez sazonado el jitomate agregar la zanahoria y el chícharo, dejar hervir unos minutos y agregar la carne, esperar que rompa el hervor y apagar.",
                    "Servir el guisado de cerdo con verduras acompañado de tortillas."
                ]
            },
             {
                id: 9,
                 source: 'Veracruz',
                title: "Hongos Silvestres (Setas/Champiñones) con Queso y Tortillas",
                image: "https://img.recetascomidas.com/recetas/640_480/tarrinas-de-champinones-con-queso.jpg", // <-- Reemplaza esta URL con la imagen de la receta 9
                ingredients: [
                    { name: "Setas cocidas (o Champiñones)", preescolar: "1/2 Taza (78g)", escolar: "1/2 Taza (78g)", secundaria: "1 taza (156g)" },
                    { name: "Harina de maíz nixtamalizada", preescolar: "2.5 Cucharadas (18g)", escolar: "5 Cucharadas (36g)", secundaria: "7.5 Cucharadas (54g)" },
                    { name: "Queso fresco o panela", preescolar: "40g", escolar: "60g", secundaria: "80g" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Cebolla, sal", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Hidratar la harina de maíz nixtamalizado (siga las instrucciones de la etiqueta del producto), para hacer las tortillas.",
                    "Lavar, desinfectar, rebanar la cebolla y reservar.",
                    "Rallar el queso fresco.",
                    "Poner al fuego suave un sartén con el aceite, vaciar la cebolla y sofreír, agregar las zetas o champiñones y sal, revolver para integrar los ingredientes y cocinar por 5 minutos, agregar el queso para que se funda y apagar.",
                    "Servir los hongos silvestres acompañados de tortillas."
                ]
            },
            {
                id: 10,
                 source: 'Veracruz',
                title: "Ensalada de Frijoles con Nopales y Tortillas",
                image: "https://storage.googleapis.com/avena-recipes-v2/agtzfmF2ZW5hLWJvdHIZCxIMSW50ZXJjb21Vc2VyGICAkKyViMwKDA/24-06-2022/1656040751363.jpeg", // <-- Reemplaza esta URL con la imagen de la receta 10
                ingredients: [
                    { name: "Nopal cocido", preescolar: "1/4 Taza (40g)", escolar: "1/4 Taza (40g)", secundaria: "1/2 Taza (80g)" },
                    { name: "Jitomate picado", preescolar: "1/2 Pieza (35g)", escolar: "1/2 Pieza (35g)", secundaria: "1 pieza (70g)" },
                    { name: "Cebolla morada cruda", preescolar: "1/8 taza (15g)", escolar: "1/8 taza (15g)", secundaria: "1/4 Taza (30g)" },
                    { name: "Rábano crudo", preescolar: "1/4 Taza (30g)", escolar: "1/4 Taza (30g)", secundaria: "1/2 Taza (60g)" },
                    { name: "Cilantro crudo picado", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Harina de maíz nixtamalizada", preescolar: "2.5 Cucharadas (18g)", escolar: "5 Cucharadas (36g)", secundaria: "7.5 Cucharadas (54g)" },
                    { name: "Fríjol crudo", preescolar: "1/4 Taza (35g)", escolar: "1/4 Taza (35g)", secundaria: "1/2 Taza (70g)" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Limón, sal", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Hidratar la harina de maíz nixtamalizado (siga las instrucciones de la etiqueta del producto), para hacer las tortillas.",
                    "Cocinar los frijoles de manera tradicional, ya cocidos separarlos del caldo.",
                    "Lavar, desinfectar, picar y poner a cocer con muy poca agua y sal los nopales.",
                    "Lavar, desinfectar, picar el jitomate, cebolla, rábanos, cilantro y reservar.",
                    "En un recipiente hondo vaciar todo los ingredientes y revolver hasta integrar todo perfectamente, aderezar con limón, aceite de oliva y sal.",
                    "Servir la ensalada acompañada de tortillas suaves."
                ]
            },
             {
                id: 11,
                 source: 'Veracruz',
                title: "Sopa de Pasta Fría con Pollo y Chícharos",
                image: "https://i.ytimg.com/vi/7hcqrCByiXw/maxresdefault.jpg", // <-- Reemplaza esta URL con la imagen de la receta 11
                ingredients: [
                    { name: "Chícharo cocido", preescolar: "1/4 Taza (40g)", escolar: "1/3 taza (60g)", secundaria: "1/2 Taza (80g)" },
                    { name: "Cebolla molida", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Pasta integral cocida", preescolar: "46g", escolar: "92g", secundaria: "138g" },
                    { name: "Pollo deshebrado", preescolar: "38g", escolar: "38g", secundaria: "76g" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Ajo, sal", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Cocer la pasta en poca agua con sal, escurrir y reservar.",
                    "Lavar la bolsa del pollo perfectamente, abrir, escurrir el líquido y reservar.",
                    "Lavar la bolsa de Los chícharos perfectamente, abrir, escurrir el líquido, enjuagar con agua de garrafón, volver a escurrir y reservar.",
                    "Lavar, desinfectar y licuar el ajo y cebolla.",
                    "En una cacerola calentar el aceite y sazonar lo licuado, agregar el pollo para sazonar; después agregar también la pasta, los chícharos y revolver hasta integrarlos.",
                    "Servir."
                ]
            },
             {
                id: 12,
                 source: 'Veracruz',
                title: "Potaje de Alubias con Acelgas/Quelites, Zanahoria y Arroz",
                image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/0F34B1A0-FD4F-4C47-9F26-3AA776C40FFD/Derivates/527c82ba-e6c8-4a14-a367-95d4864dcba0.jpg", // <-- Reemplaza esta URL con la imagen de la receta 12
                ingredients: [
                    { name: "Quelite crudo (o Acelgas)", preescolar: "40g", escolar: "40g", secundaria: "80g" },
                    { name: "Zanahoria picada", preescolar: "1/4 Taza (32g)", escolar: "1/4 Taza (32g)", secundaria: "1/2 Taza (64g)" },
                    { name: "Salsa de jitomate", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Arroz crudo (al vapor)", preescolar: "20g", escolar: "40g", secundaria: "60g" },
                    { name: "Alubia cruda", preescolar: "1/4 Taza (35g)", escolar: "1/4 Taza (35g)", secundaria: "1/2 Taza (70g)" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Sal, cebolla (para arroz)", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Cocer las alubias de manera tradicional.",
                    "Lavar, desinfectar, picar las acelgas o quelites y la zanahoria en cubos y reservar.",
                    "Poner en un sartén el aceite a fuego suave, agregar la salsa de jitomate, sal y sazonar.",
                    "Una vez sazonado el jitomate agregar a las alubias con el caldo, también la zanahoria, dejar hervir por 10 minutos, agregar las acelgas o quelites y dejar que rompa el hervor y apagar.",
                    "Arroz al vapor: Lave el arroz perfectamente y déjelo escurrir. Ponga a cocer el arroz con el doble de agua, agregar la cebolla y sal; deje cocer a fuego bajo.",
                    "Servir el potaje acompañado del arroz."
                ]
            },
             {
                id: 13,
                 source: 'Veracruz',
                title: "Sardina Entomatada con Arroz y Ensalada",
                image: "https://storage.googleapis.com/avena-recipes-v2/2019/10/1571781244685.jpeg", // <-- Reemplaza esta URL con la imagen de la receta 13
                ingredients: [
                    { name: "Jícama picada (para ensalada)", preescolar: "1/2 Taza (60g)", escolar: "1/2 Taza (60g)", secundaria: "1 taza (120g)" },
                    { name: "Lechuga (para ensalada)", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Salsa de jitomate", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Arroz crudo (al vapor)", preescolar: "20g", escolar: "40g", secundaria: "60g" },
                    { name: "Sardina en tomate", preescolar: "38g", escolar: "38g", secundaria: "76g" },
                    { name: "Cacahuate tostado sin sal (para ensalada)", preescolar: "10 piezas (9g)", escolar: "14 piezas (12g)", secundaria: "14 piezas (12g)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Ajo, cebolla, sal, limón (para ensalada), aceite (para sardina)", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Sardina entomatada: Lavar la lata de sardina perfectamente, abrir, separar y trocear las piezas de sardina. En una cacerola calentar a fuego suave el aceite, añadir el ajo y la cebolla para acitronar, agregar salsa de jitomate, sal y sazonar. Agregar la sardina, revolver, dejar que rompa el hervor y apagar.",
                    "Arroz al vapor: Lave el arroz perfectamente y déjelo escurrir. Ponga a cocer el arroz con el doble de agua, agregar la cebolla y sal; deje cocer a fuego bajo.",
                    "Ensalada: Lavar, desinfectar, trocear en pedazos pequeños la lechuga. Lavar, desinfectar, pelar y picar la jícama. Lavar la bolsa de los cacahuates pelados, abrirla y reservar. En un recipiente hondo poner la lechuga, jícama, unas gotas de limón y mezclar perfectamente.",
                    "Servir la sardina con arroz acompañados de la ensalada de lechuga y jícama adornada con los cacahuates."
                ]
            },
             {
                id: 14,
                 source: 'Veracruz',
                title: "Mole de Olla con Lentejas, Calabacita y Elote",
                image: "https://editorialtelevisa.brightspotcdn.com/dims4/default/7e68e0d/2147483647/strip/true/crop/996x560+2+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2015%2F06%2Fmole-de-olla-con-lentejas.jpg", // <-- Reemplaza esta URL con la imagen de la receta 14
                ingredients: [
                    { name: "Calabacita cruda", preescolar: "1 pieza (111g)", escolar: "1 pieza (111g)", secundaria: "2 piezas (222g)" },
                    { name: "Salsa de jitomate", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Elote crudo desgranado", preescolar: "1/2 Taza (83g)", escolar: "1 taza (166g)", secundaria: "1.5 taza (249g)" },
                    { name: "Lenteja cruda", preescolar: "1/4 Taza (35g)", escolar: "1/4 Taza (35g)", secundaria: "1/2 Taza (70g)" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Sal, laurel", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Cocer las lentejas de manera tradicional.",
                    "Lavar, desinfectar, cortar la calabacita en cubos y reservar.",
                    "Pelar y desgranar el elote y reservar.",
                    "Poner en una cacerola el aceite a fuego suave, agregar la salsa de jitomate, sal y sazonar.",
                    "Una vez sazonado el jitomate agregar las lentejas con caldo, también la calabacita cortada, elote desgranado y unas hojas de laurel, dejar hervir por 10 minutos y apagar.",
                    "Servir."
                ]
            },
             {
                id: 15,
                 source: 'Veracruz',
                title: "Cerdo Oriental (Apio, Brócoli/Coliflor, Zanahoria) y Papas Secas",
                image: "https://i.ytimg.com/vi/tYfiQirKAHs/maxresdefault.jpg", // <-- Reemplaza esta URL con la imagen de la receta 15
                ingredients: [
                    { name: "Apio cocido", preescolar: "1/6 taza (25g)", escolar: "1/6 taza (25g)", secundaria: "1/3 taza (50g)" },
                    { name: "Brócoli cocido (o Coliflor)", preescolar: "1/6 taza (30g)", escolar: "1/6 taza (30g)", secundaria: "1/3 taza (70g)" },
                    { name: "Zanahoria picada", preescolar: "1/4 Taza (32g)", escolar: "1/4 Taza (32g)", secundaria: "1/2 Taza (70g)" },
                    { name: "Cebolla molida", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Papa cocida con cascara", preescolar: "1/2 Pieza (68g)", escolar: "1 pieza (136g)", secundaria: "1.5 pieza (204g)" },
                    { name: "Carne molida de cerdo", preescolar: "40g", escolar: "40g", secundaria: "80g" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Sal", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Cerdo oriental: Lavar, desinfectar, picar el apio y la coliflor y reservar. Lavar la bolsa de la zanahoria perfectamente, abrir, escurrir el líquido, enjuagar con agua de garrafón, volver a escurrir y reservar. Lavar la bolsa del cerdo perfectamente, abrir, escurrir el líquido y reservar. Poner en una cacerola el aceite a fuego suave, agregar la cebolla molida, sal y sazonar. Agregar el brócoli y el apio hasta que suavicen, entonces agregar también la zanahoria y el cerdo, dejar que rompa el hervor y apagar.",
                    "Papas secas: Lavar, desinfectar, poner a hervir las papas. Una vez cocidas las papas pelar y machacar. Poner en un sartén el aceite a fuego suave, agregar cebolla molida hasta acitronar, agregar la papa machacada, sal, revolver hasta integrar y apagar.",
                    "Servir el cerdo acompañado con las papas secas."
                ]
            },
             {
                id: 16,
                 source: 'Veracruz',
                title: "Enfrijoladas con Ensalada (Betabel, Zanahoria, Cacahuates)",
                image: "https://sabrosano.com/wp-content/uploads/2020/05/Enfrijoladas_06.jpg", // <-- Reemplaza esta URL con la imagen de la receta 16
                ingredients: [
                    { name: "Betabel crudo rallado", preescolar: "1/8 taza (20g)", escolar: "1/8 taza (20g)", secundaria: "1/4 Taza (40g)" },
                    { name: "Zanahoria rallada", preescolar: "1/4 Taza (30g)", escolar: "1/4 Taza (30g)", secundaria: "1/2 Taza (60g)" },
                    { name: "Harina de maíz nixtamalizada", preescolar: "2.5 Cucharadas (18g)", escolar: "5 Cucharadas (36g)", secundaria: "7.5 Cucharadas (54g)" },
                    { name: "Frijol crudo", preescolar: "1/4 Taza (35g)", escolar: "1/4 Taza (35g)", secundaria: "1/2 Taza (70g)" },
                    { name: "Cacahuate tostado sin sal", preescolar: "10 piezas (9g)", escolar: "14 piezas (12g)", secundaria: "14 piezas (12g)" },
                     { name: "Otros (mencionados en prep.)", preescolar: "Limón, sal", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Enfrijoladas: Hidratar la harina de maíz nixtamalizado (siga las instrucciones de la etiqueta del producto), para hacer las tortillas. Cocer los frijoles de manera tradicional y licuarlos. En una cacerola vierte los frijoles y calentarlos. Calentar las tortillas en comal y meterlas una por una a los frijoles. Sacar las tortillas enrollarlas o doblarlas.",
                    "Ensalada: Lavar, desinfectar, pelar y rallar el betabel y la zanahoria. Ponerlos en un recipiente hondo revolver hasta integrar y aderezar con unas gotas de limón y sal, adornar con los cacahuates.",
                    "Servir las Enfrijoladas y acompañarlas con la ensalada."
                ]
            },
             {
                id: 17,
                 source: 'Veracruz',
                title: "Res Entomatada con Nopales/Crucetas y Ejotes",
                image: "https://i.ytimg.com/vi/-0NQJprb4aQ/maxresdefault.jpg", // <-- Reemplaza esta URL con la imagen de la receta 17
                ingredients: [
                    { name: "Ejotes cocidos picados", preescolar: "1/4 Taza (35g)", escolar: "1/4 Taza (35g)", secundaria: "1/2 Taza (70g)" },
                    { name: "Nopal cocido (o Crucetas)", preescolar: "1/2 Taza (75g)", escolar: "1/2 Taza (75g)", secundaria: "1 taza (150g)" },
                    { name: "Salsa de jitomate", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Tortilla de maíz", preescolar: "1 pieza (30g)", escolar: "2 piezas (60g)", secundaria: "3 piezas (90g)" },
                    { name: "Carne de res cocida", preescolar: "30g", escolar: "30g", secundaria: "60g" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Sal, laurel", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Lavar la bolsa de la carne de res perfectamente, abrir, escurrir el líquido y reservar.",
                    "Lavar la bolsa del ejote con nopal perfectamente, abrir, escurrir el líquido, enjuagar con agua de garrafón, volver a escurrir y reservar.",
                    "Poner en un sartén el aceite a fuego suave, agregar la salsa de jitomate, sal y sazonar.",
                    "Una vez sazonado el jitomate agregar la carne, ejotes y nopal, unas hojas de laurel y dejar que rompa el hervor y apagar.",
                    "Servir la carne con las verduras acompañada de tortillas."
                ]
            },
             {
                id: 18,
                 source: 'Veracruz',
                title: "Tostadas de Sardina a la Mexicana",
                image: "https://i.ytimg.com/vi/X2xKS5vxStE/maxresdefault.jpg", // <-- Reemplaza esta URL con la imagen de la receta 18
                ingredients: [
                    { name: "Jitomate picado", preescolar: "1 pieza (75g)", escolar: "1.5 pieza (100g)", secundaria: "2 piezas (130g)" },
                    { name: "Cebolla morada cruda", preescolar: "1/4 Taza (30g)", escolar: "1/3 taza (50g)", secundaria: "1/2 Taza (60g)" },
                    { name: "Cilantro crudo picado", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Tostada de maíz horneada", preescolar: "1 pieza (20g)", escolar: "2 piezas (40g)", secundaria: "3 piezas (60g)" },
                    { name: "Sardina en tomate", preescolar: "40g", escolar: "40g", secundaria: "80g" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Sal", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Lavar, desinfectar y picar el jitomate, cebolla, cilantro, reservar.",
                    "Lavar la lata de sardina perfectamente, abrir y desmenuzar.",
                    "En un recipiente hondo vaciar la sardina con un poco de la salsa donde viene preparada, el jitomate, cebolla, cilantro, revolver hasta integrar todos los ingredientes, aderezar con sal de ser necesario.",
                    "A las tortillas (tostadas) se les pone la sardina preparada y se sirven."
                ]
            },
             {
                id: 19,
                 source: 'Veracruz',
                title: "Sopa de Lentejas con Zanahoria y Plátano Macho",
                image: "https://www.mexicanacomeplantas.com/uploads/1/2/0/0/120068298/dsc-1634_1_orig.jpg", // <-- Reemplaza esta URL con la imagen de la receta 19
                ingredients: [
                    { name: "Zanahoria picada", preescolar: "1/2 Taza (64g)", escolar: "1/2 Taza (64g)", secundaria: "1 taza (128g)" },
                    { name: "Salsa de jitomate", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Harina de maíz nixtamalizada", preescolar: "2.5 Cucharadas (18g)", escolar: "5 Cucharadas (36g)", secundaria: "7.5 Cucharadas (54g)" },
                    { name: "Lenteja cruda", preescolar: "35g", escolar: "35g", secundaria: "70g" },
                    { name: "Aceite vegetal", preescolar: "3/4 Cucharadita (3.5ml)", escolar: "1 Cucharadita (5ml)", secundaria: "1 Cucharadita (5ml)" },
                    { name: "Plátano macho", preescolar: "1/4 pieza", escolar: "1/4 pieza", secundaria: "1/2 pieza" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Sal, laurel", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Hidratar la harina de maíz nixtamalizado (siga las instrucciones de la etiqueta del producto), para hacer las tortillas.",
                    "Cocinar las lentejas de manera tradicional.",
                    "Lavar, desinfectar, pelar y cortar el plátano macho en cubos.",
                    "Lavar la bolsa de la zanahoria perfectamente, abrir, escurrir el líquido, enjuagar con agua de garrafón, volver a escurrir y reservar.",
                    "Poner en una cacerola el aceite a fuego suave, agregar la salsa de jitomate y sazonar.",
                    "Agregar las lentejas a la salsa de jitomate, el plátano macho, unas hojas de laurel y dejar hervir unos 10 minutos, incorporar la zanahoria, sazonar con sal, dejar que rompa el hervor y apagar.",
                    "Servir las lentejas acompañada de tortillas."
                ]
            },
             {
                id: 20,
                 source: 'Veracruz',
                title: "Tortitas de Atún con Amaranto/Avena y Ensalada Huerta",
                image: "https://i.ytimg.com/vi/v5ikvH4bE_I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDiHH0T9vdHU7I0Q7jhPPLF7dWkFg", // <-- Reemplaza esta URL con la imagen de la receta 20
                ingredients: [
                    { name: "Espinaca cruda (ensalada)", preescolar: "1/2 Taza (30g)", escolar: "3/4 Taza (40g)", secundaria: "1 taza (60g)" },
                    { name: "Pepino (ensalada)", preescolar: "1/4 Taza (30g)", escolar: "1/3 taza (40g)", secundaria: "1/2 Taza (60g)" },
                    { name: "Jitomate picado (ensalada)", preescolar: "1/2 Pieza (35g)", escolar: "3/4 Pieza (50g)", secundaria: "1 pieza (70g)" },
                    { name: "Cebolla blanca cruda (ensalada)", preescolar: "1 Cucharada (15g)", escolar: "1/8 taza (20g)", secundaria: "1/4 Taza (30g)" },
                    { name: "Harina amaranto con avena", preescolar: "2 Cucharadas (18g)", escolar: "4 Cucharadas (36g)", secundaria: "6 Cucharadas (54g)" },
                    { name: "Atún en agua drenado", preescolar: "1/3 lata (33g)", escolar: "1/3 lata (33g)", secundaria: "2/3 lata (66g)" },
                    { name: "Huevo fresco", preescolar: "C.S.*", escolar: "C.S.*", secundaria: "C.S.*" },
                    { name: "Cacahuate tostado sin sal (ensalada)", preescolar: "10 piezas (9g)", escolar: "14 piezas (12g)", secundaria: "14 piezas (12g)" },
                    { name: "Otros (mencionados en prep.)", preescolar: "Aceite (para tortitas), sal, pimienta, limón (para ensalada)", escolar: "-", secundaria: "-" },
                ],
                preparation: [
                    "Lavar perfectamente la lata de atún, abrirla y escurrir perfectamente.",
                    "Vaciar el contenido de la lata en un recipiente hondo, agregar la harina de amaranto con avena, huevo, sal y pimienta, revolver todos los ingredientes y hacer las tortitas.",
                    "En un sartén con muy poco aceite dorar las tortitas de atún de lado y lado.",
                    "Ensalada de la huerta: Lavar, desinfectar y picar la espinaca, pepino, jitomate y cebolla. Ponerlos en un recipiente hondo, revolver hasta integrarlos y aderezar con unas gotas de limón y sal, adornar los cacahuates.",
                    "Servir las tortitas acompañadas con la ensalada."
                ]
            },
        ];

        // --- Datos Recetario UNICEF (IDs U1-...) ---
        const unicefRecipes = [
             {
                id: 'U1', // ID con prefijo 'U'
                source: 'UNICEF', // Identificador de fuente
                title: "Ensalada de Pasta",
                image: "https://i.imgur.com/WZrQY1G.png", // <-- Reemplaza esta URL con la imagen de la receta U1
                ingredients: [ // Formato UNICEF: Array de strings
                    "½ bolsa de codito chico (bolsa de 200 gr)",
                    "1 taza de garbanzos cocidos, picados",
                    "1 taza de pepino pelado y picado",
                    "1 taza de zanahoria rallada",
                    "1 taza de elote amarillo",
                    "½ taza de yogurt sin azúcar",
                    "2 cucharadas de mostaza amarilla",
                    "½ cucharadita de orégano seco",
                    "1 pizca de sal",
                    "1 pizca de pimienta negra"
                ],
                preparation: [
                    "Remojar los garbanzos y cocerlos en una olla con agua y una pizca de sal.",
                    "Cocinar la pasta en una olla con abundante agua hirviendo con un poco de sal.",
                    "Cocinar hasta que esté al dente. Revisar los tiempos de la pasta que se use, ya que depende del tamaño de codito, el más chico está listo en unos 8 minutos.",
                    "Colar la pasta y dejar enfriar un poco con agua.",
                    "Mientras la pasta se cocina, preparar los demás ingredientes. Se puede empezar picando los garbanzos cocidos finamente para ayudar con la textura a las niñas y niños.",
                    "Pelar el pepino, retirar las semillas y cortar en cubitos. Pelar y rallar la zanahoria y drenar el elote o descongelar si se está usando elote congelado.",
                    "En un tazón grande mezclar yogurt, mostaza, orégano seco, sal y pimienta. Se puede agregar 1 cucharada de agua para hacer más ligera la mezcla.",
                    "Cuando esté mezclado el aderezo, agregar la pasta fría o tibia, los vegetales y los garbanzos picados.",
                    "Mezclar, rectificar y ajustar la sazón y disfrutar, ya sea tibia, a temperatura ambiente o fría.",
                    "Si se quiere dar un toque de acidez, agregar un poco de jugo de limón."

                ],                
            },
            {
                id: 'U2',
                source: 'UNICEF',
                title: "Tacos de Guisado (Picadillo de Cerdo)",
                image: "https://i.imgur.com/GhiQzJj.png", // <-- Reemplaza esta URL con la imagen de la receta U2
                ingredients: [
                    "Picadillo:",
                    "  500 gr carne molida de cerdo (o pollo/pavo)",
                    "  ½ cebolla blanca picada finamente",
                    "  1 chayote, en cubos pequeños",
                    "  2 zanahorias, peladas y en cubos pequeños",
                    "  ½ cucharita de orégano seco",
                    "  1 pizca de sal y pimienta",
                    "  20 tortillas de maíz",
                    "Caldillo de tomate:",
                    "  3 tomates rojos maduros, cortados en 4",
                    "  ½ chile chipotle, opcional",
                    "  1 trocito de cebolla blanca",
                    "  2 dientes de ajo pelados",
                    "  1½ tazas de agua",
                    "  ½ cucharadita comino molido",
                    "  1 pizca de sal y pimienta"
                ],
                preparation: [
                   "Para el caldillo de tomate, cortar los tomates en 4 y colocar en la licuadora. Agregar la cebolla, chipotle, ajos pelados, agua, comino, sal y pimienta. Licuar hasta que no queden grumos y reservar.",
                   "Pelar la zanahoria y cortar en cubitos. Al chayote se le deja la cáscara, solo lavarlo muy bien y cortar en cubitos, la pepita no se va a picar.",
                   "Calentar una olla y agregar la cebolla. Cocinar unos 3 minutos a fuego medio alto.",
                   "Agregar la carne molida y separar muy bien. Sazonar con orégano, pizca de sal y pimienta y cocinar hasta que cambie de color.",
                   "Agregar el chayote y la zanahoria, mezclar bien y cocinar unos 2 minutos a fuego medio mezclando de vez en cuando.",
                   "Verter el caldillo de tomate licuado sobre la carne con verduras. Mezclar bien, reducir el fuego, tapar y cocinar hasta que las verduras estén suaves y el guiso haya espesado ligeramente.", // Paso añadido basado en lógica culinaria
                   "Calentar las tortillas y servir el picadillo en tacos."
                
                ]
            },
             {
                id: 'U3',
                source: 'UNICEF',
                title: "Burritos o Taquitos de Frijoles Poder",
                image: "https://i.imgur.com/sVdlKSq.png", // <-- Reemplaza esta URL con la imagen de la receta U3
                ingredients: [
                    "2 tazas frijoles bayos secos (o negros, pintos)",
                    "1 taza de zanahoria en rodajas (2 medianas aprox.)",
                    "2 dientes de ajo, pelados",
                    "¼ cebolla blanca",
                    "½ cucharadita de comino molido",
                    "1 pizca de sal y pimienta",
                    "Paprika molida (opcional, para color)",
                    "20 tortillas de maíz o harina (¡Prefiere maíz!)"
                ],
                preparation: [
                    "Limpiar los frijoles, quitando las piedritas. Colocar en un tazón grande, cubrir con bastante agua y dejar reposar a temperatura ambiente de 8 a 12 horas.",
                    "Tirar el agua de remojo y enjuagar muy bien con agua.",
                    "Agregar 10 a 12 tazas de agua a una olla grande junto con los frijoles, ajo y cebolla.",
                    "Cuando hierva bajar a fuego medio bajo y cocinar medio tapado por 60 minutos.",
                    "Agregar a la olla la zanahoria pelada y cortada en rodajas medianas. Cocinar 10 a 20 minutos más o hasta que los frijoles estén cocidos.",
                    "Colocar en una licuadora la zanahoria, los frijoles, los ajos y la cebolla sin el caldo (hacer en partes si es necesario, agregar caldo poco a poco si se necesita).",
                    "Vaciar en una olla y sazonar con 1 pizca de sal, pimienta y comino. Se puede agregar paprika molida. Cocinar unos minutos a fuego bajo o hasta que espesen.",
                    "Calentar las tortillas, rellenar con los frijoles y enrollar para armar los burritos o taquitos."
                
                ]
            },
             {
                id: 'U4',
                source: 'UNICEF',
                title: "Flautas Crujientes Sin Freír",
                image: "https://i.imgur.com/CmjEJfs.png", // <-- Reemplaza esta URL con la imagen de la receta U4
                ingredients: [
                    "Flautas:",
                    "  20 tortillas de maíz",
                    "  Picadillo de cerdo (receta U2) o Frijoles poder (receta U3)",
                    "Curtido o ensalada de repollo:",
                    "  3 tazas de repollo verde en tiras (½ repollo chico aprox.)",
                    "  1 taza de zanahoria rallada (1 zanahoria aprox.)",
                    "  ½ taza de vinagre blanco o de manzana",
                    "  ½ taza de agua caliente",
                    "  ½ cucharita de orégano seco",
                    "  Cilantro picado (opcional)"
                ],
                preparation: [
                    "Si las tortillas están frías, calentarlas en microondas o comal para suavizar.",
                    "Tener listo el relleno (frijoles o picadillo).",
                    "Rellenar la parte inferior de las tortillas calientes y enrollar (sujetar con palillo si es necesario).",
                    "Cocinar las flautas (elegir una opción):",
                    "  Opción 1 (Sartén): Cocinar a fuego medio por 5-7 min total, dorando todos los lados (sin aceite o muy poco).",
                    "  Opción 2 (Horno): Colocar en bandeja y hornear a 200°C por 14-16 min o hasta crujientes.",
                    "  Opción 3 (Air Fryer): Dorar a 190°C por 5-6 minutos.",
                    "Para el curtido: Colocar en recipiente grande el repollo, zanahoria. Agregar agua caliente, vinagre y orégano (y cilantro opcional). Mezclar.",
                    "Servir las flautas con el curtido y salsa al gusto."
                
                ]
            },
            {
                id: 'U5',
                source: 'UNICEF',
                title: "Burritos o Taquitos de Desayuno con Chorizo Casero",
                image: "https://i.imgur.com/SAkbyMT.png", // <-- Reemplaza esta URL con la imagen de la receta U5
                ingredients: [
                    "Chorizo:",
                    "  4 tazas de nopales picados (8 pencas limpias aprox.) (o coliflor/champiñones)",
                    "  2 dientes de ajo, pelados",
                    "  2 chiles guajillo o mirasol",
                    "  2 chiles pasilla",
                    "  ¼ taza de vinagre blanco o de manzana",
                    "  ¼ taza de agua de cocción de los chiles",
                    "  ½ cucharita de comino molido",
                    "  ½ cucharita de orégano seco",
                    "  1 pizca de sal y pimienta negra",
                    "Burritos:",
                    "  20 tortillas de harina o de maíz (¡Prefiere maíz!)",
                    "  10 huevos",
                    "  2 papas medianas cocidas y picadas (opcional)",
                    "  1 pizca de sal y pimienta (para huevo)"
                ],
                preparation: [
                    "Para el chorizo: Picar finamente en cubos los nopales. Colocar en un sartén sin aceite y cocinar a fuego alto por 4-6 min mezclando.",
                    "Retirar rabito y semillas de los chiles. Colocar en agua hirviendo con ajo pelado y cocinar por 3-5 min a fuego bajo.",
                    "Retirar del agua y licuar con el ajo, comino, orégano, vinagre, sal, pimienta y el agua de cocción.",
                    "Agregar la mezcla del chile a los nopales y cocinar a fuego bajo de 2-4 min. Probar y sazonar si es necesario. Guardar.",
                    "Para los burritos: Engrasar ligeramente un sartén. Agregar 1 cda. de chorizo de nopales por cada huevo a usar y cocinar unos segundos.",
                    "Opcional: agregar papas cocidas picadas.",
                    "Agregar los huevos batidos, sazonar con pizca de sal y pimienta. Mezclar y cocinar 2 min o hasta que estén cocidos.",
                    "Calentar las tortillas y rellenar con el huevo con chorizo."
                
                ]
            },
            {
                id: 'U6',
                source: 'UNICEF',
                title: "Sopes y Gorditas Sanos",
                image: "https://i.imgur.com/sPQ0OWL.png", // <-- Reemplaza esta URL con la imagen de la receta U6
                ingredients: [
                    "300 g de masa de maíz nixtamalizada (o 2½ tazas harina + ½ taza agua)",
                    "1½ taza de agua tibia (si se usa harina)",
                    "1 cucharada de linaza molida",
                    "½ cucharada de semillas de chía",
                    "2 tazas de espinaca cruda picada o chaya",
                    "1 pizca de sal y pimienta",
                    "Relleno: Frijoles poder (U3), Picadillo (U2), Huevo con chorizo (U5), etc."
                ],
                preparation: [
                    "Cocinar la espinaca/chaya en sartén caliente sin grasa por 2 min.",
                    "Mezclar en un recipiente la masa (o harina+agua) con chía, linaza, sal, pimienta y espinaca/chaya cocida. Agregar agua si es necesario hasta obtener buena consistencia.",
                    "Separar en 10 bolas iguales. Cubrir la masa restante.",
                    "Aplastar las bolas entre dos plásticos: Sopes (¾ cm grosor), Gorditas (10 cm diámetro, ½ cm grosor).",
                    "Para Sopes: Cocinar en comal caliente a fuego medio-alto 2 min por lado. Retirar y pellizcar orillas para formar borde. Calentar en sartén antes de servir y rellenar.",
                    "Para Gorditas: Cocinar en comal 2 min por lado, luego 30 seg más por lado. Reposar unos minutos, abrir con cuchillo (sin cortar por completo), rellenar y regresar al comal para calentar."
                
                ]
            },
             {
                id: 'U7',
                source: 'UNICEF',
                title: "Nachos Caminantes",
                image: "https://i.imgur.com/0yBlcQC.png", // <-- Reemplaza esta URL con la imagen de la receta U7
                ingredients: [
                    "30 tortillas de maíz (preferiblemente de días anteriores)",
                    "2½ tazas de frijoles bayos o pintos cocidos (enteros, no refritos)",
                    "Pico de Gallo:",
                    "  5 tomates",
                    "  ¼ pieza de cebolla morada",
                    "  ¼ taza de cilantro picado",
                    "  1 limón verde (jugo)",
                    "  1 pizca de sal y pimienta",
                    "Jalapeños encurtidos (opcional)"
                ],
                preparation: [
                    "Para el pico de gallo: Mezclar tomates picados, cebolla picada y cilantro picado. Sazonar con jugo de limón, pizca de sal y pimienta.",
                    "Para los totopos: Cortar las tortillas en triángulos. Poner en charola para hornear sin encimar.",
                    "Hornear a 200°C por 10-12 min o hasta crujientes y dorados (sin aceite). Alternativa: air fryer o comal.",
                    "Para servir (por porción): Colocar totopos (aprox. 3 tortillas), ¼ taza de frijoles calientes, 2 cdas. de pico de gallo y jalapeños al gusto."
                
                ]
            },
            {
                id: 'U8',
                source: 'UNICEF',
                title: "Ceviche de Lentejas",
                image: "https://i.imgur.com/HVTYppz.png", // <-- Reemplaza esta URL con la imagen de la receta U8
                ingredients: [
                    "½ taza de lentejas crudas",
                    "½ taza de pepino picado",
                    "½ taza de tomate rojo picado",
                    "½ taza de zanahoria rallada",
                    "2 cucharadas de cilantro picado",
                    "2 cucharadas de aceite de oliva",
                    "2 cucharadas de jugo de naranja",
                    "2 cucharadas de jugo de limón",
                    "½ cucharada de mostaza amarilla",
                    "1 pizca de sal y pimienta",
                    "10 tostadas de maíz, para servir",
                    "Mango en cubos (opcional, si es temporada)"
                ],
                preparation: [
                    "Remojar lentejas (opcional, 1h o toda la noche). Colar y enjuagar.",
                    "Cocinar lentejas en abundante agua hasta suaves (aprox. 30 min). Cocinar a fuego bajo una vez que hiervan.",
                    "Picar pepino y tomate en cubitos. Rallar zanahoria. Picar cilantro.",
                    "Mezclar en un tazón aceite de oliva, jugo de naranja, jugo de limón, mostaza, pizca de sal y pimienta.",
                    "Agregar lentejas cocidas (sin líquido), pepino, tomate, zanahoria y cilantro. Mezclar bien (agregar mango opcional aquí).",
                    "Rectificar sazón. Servir con tostadas o solo."
                
                ]
            },
            {
                id: 'U9',
                source: 'UNICEF',
                title: "Ramen Saludable",
                image: "https://i.imgur.com/gAtjPl3.png", // <-- Reemplaza esta URL con la imagen de la receta U9
                ingredients: [
                    "400 gr de espagueti crudo",
                    "10 tazas de caldo de pollo casero (bien sazonado)",
                    "5 cucharadas de salsa de soya",
                    "2½ cucharadas de ajo picado finamente",
                    "3 piezas de calabacitas",
                    "Para servir (opcional):",
                    "  Jugo de limón",
                    "  Chile seco",
                    "  Semillas de ajonjolí o sésamo",
                    "  Pollo cocido deshebrado"
                ],
                preparation: [
                    "Cocinar el espagueti en abundante agua hirviendo con sal hasta al dente (10-12 min aprox).",
                    "Mientras, con un rallador de tiras, pelar la calabacita sin llegar a las semillas.",
                    "Cuando a la pasta le quede 1 min de cocción, agregar las tiras de calabacita y cocinar junto.",
                    "Drenar la pasta con la calabacita y reservar.",
                    "En una olla, mezclar el caldo de pollo, ajo picado y salsa de soya. Llevar a ebullición.",
                    "Servir el caldo caliente sobre la pasta con calabacita.",
                    "Terminar con los ingredientes opcionales para servir al gusto."
                
                ]
            },
             {
                id: 'U10',
                source: 'UNICEF',
                title: "Pizzas a la Mexicana",
                image: "https://i.imgur.com/zJNM0i2.png", // <-- Reemplaza esta URL con la imagen de la receta U10
                ingredients: [
                    "Salsa de Tomate Casera:",
                    "  800 gr de tomates enteros (maduros, pelados)",
                    "  1 cucharada de ajo picado",
                    "  ¼ de pieza cebolla amarilla o blanca (en trozo)",
                    "  1 cucharadita de azúcar mascabado",
                    "  1 cucharita de orégano seco",
                    "  Chile seco quebrado (opcional)",
                    "  1 pizca de sal y pimienta",
                    "Pizzas:",
                    "  10 tortillas de maíz o de harina (¡Prefiere maíz!)",
                    "  2½ tazas de queso manchego rallado o queso Oaxaca",
                    "  Vegetales al gusto (Champiñones, piña, pimiento morrón, etc.)"
                ],
                preparation: [
                    "Para la salsa: Licuar los tomates pelados con un poco de agua.",
                    "Calentar olla grande a fuego medio. Agregar ajo picado, orégano y chile seco (opcional). Cocinar a fuego bajo 2-3 min sin quemar.",
                    "Agregar tomates triturados, cebolla en trozo, sal, pimienta y azúcar. Cocinar tapado a fuego bajo (ligero burbujeo) por 30 min, mezclando a los 15 min.",
                    "Rectificar sazón (sal, pimienta, azúcar). Dejar enfriar por completo.",
                    "Para las pizzas: Calentar las tortillas en comal.",
                    "Cubrir con la salsa de tomate, esparcir queso rallado y vegetales al gusto.",
                    "Hornear en horno a 200°C, freidora de aire, sartén antiadherente o comal hasta que el queso se gratine.",
                    "(Opcional: dorar tortilla de un lado antes de agregar salsa para más crunch).",
                    "Cortar cada pizza en 4 rebanadas y servir."
                
                ]
            },
            {
                id: 'U11',
                source: 'UNICEF',
                title: "Chile en Polvo Casero",
                image: "https://i.imgur.com/FQbAUfi.png", // <-- Reemplaza esta URL con la imagen de la receta U11
                ingredients: [
                    "2 chiles guajillos grandes",
                    "4 chiles de árbol (ajustar cantidad para picor)",
                    "1 limón (jugo)",
                    "1 pizca de sal"
                ],
                preparation: [
                    "Retirar rabito y semillas de los chiles.",
                    "Cortar en trozos y colocar en un plato. Cubrir con jugo de limón y reposar 5-10 min, volteando a la mitad.",
                    "Colocar en bandeja para hornear sin encimar.",
                    "Secar en horno a 150°C por 12-18 minutos. Deben quedar totalmente secos.",
                    "Dejar enfriar por completo.",
                    "Colocar en licuadora o procesador y triturar hasta pulverizar.",
                    "Agregar pizca de sal. Guardar en recipiente con tapa."
                
                ]
            },
             {
                id: 'U12',
                source: 'UNICEF',
                title: "Esquites Sanos con Coliflor",
                image: "https://i.imgur.com/b5WKPYd.png", // <-- Reemplaza esta URL con la imagen de la receta U12
                ingredients: [
                    "5 elotes",
                    "5 tazas coliflor picada finamente (tamaño grano de elote)",
                    "Limón, al gusto",
                    "Chile en polvo, al gusto (Receta U11)",
                    "1 pizca de sal y pimienta",
                    "Epazote (opcional, para guisar)"
                ],
                preparation: [
                    "Limpiar los elotes y cocinar en abundante agua hirviendo (olla tapada) hasta suaves.",
                    "Mientras, cortar la coliflor en trozos tamaño grano de elote.",
                    "Desgranar los elotes cocidos.",
                    "Cocinar los trocitos de coliflor en agua hirviendo por 5 min (deben quedar suaves).",
                    "En una olla, agregar elote y coliflor cocidos.",
                    "Sazonar con pizca de sal y pimienta, mezclar bien. (Opcional: guisar con epazote).",
                    "Servir (1 taza total por porción) con chile en polvo y jugo de limón."
                
                ]
            },
             {
                id: 'U13',
                source: 'UNICEF',
                title: "Fruta Crujiente",
                image: "https://i.imgur.com/HvoRjEe.jpeg", // <-- Reemplaza esta URL con la imagen de la receta U13
                ingredients: [
                    "2½ tazas de mango en cubos (4 mangos aprox.) (o piña, tuna, sandía, melón, manzana)",
                    "2½ tazas de jícama en cubos (1 jícama chica aprox.)",
                    "10 cucharadas pepitas de calabaza (o cacahuates/semillas de girasol)",
                    "Chile en polvo, al gusto (Receta U11)",
                    "Jugo de limón, al gusto"
                ],
                preparation: [
                    "Pelar la jícama y cortarla en cubos. (Tip: guardar en agua en el refri para mantener crujiente, cambiar agua cada 2 días).",
                    "Pelar y cortar el mango (o fruta elegida) en cubitos.",
                    "Al servir (por vaso): mezclar ¼ taza de fruta picada, ¼ taza de jícama picada.",
                    "Terminar con jugo de limón, chile en polvo y 1 cucharada de pepitas/semillas/cacahuates."
                
                ]
            },
             {
                id: 'U14',
                source: 'UNICEF',
                title: "Picosito (Vegetales Rallados)",
                image: "https://i.imgur.com/9ayboaU.png", // <-- Reemplaza esta URL con la imagen de la receta U14
                ingredients: [
                    "2½ tazas de zanahoria rallada (3 zanahorias aprox.)",
                    "2½ tazas de jícama rallada (¼ pieza jícama chica aprox.)",
                    "2½ tazas betabel rallado (1 betabel grande aprox.)",
                    "10 cucharadas de cacahuates (o pepitas/semillas girasol)",
                    "Chile en polvo, al gusto (Receta U11)",
                    "Jugo de limón, al gusto",
                    "Fruta picada (opcional, ¼ taza por porción: mango, manzana, piña, tuna)"
                ],
                preparation: [
                    "Pelar los vegetales y rallar.",
                    "Servir en vasitos, acomodando por filas para un efecto colorido o mezclados.",
                    "Agregar la fruta picada opcional.",
                    "Añadir los cacahuates (o semillas).",
                    "Terminar con jugo de limón y chile en polvo."
                
                ]
            },
            {
                id: 'U15',
                source: 'UNICEF',
                title: "Churritos de Garbanzo",
                image: "https://i.imgur.com/wCkn695.png", // <-- Reemplaza esta URL con la imagen de la receta U15
                ingredients: [
                    "2 taza de harina de maíz",
                    "2 taza de harina de garbanzo",
                    "1¾ taza de agua tibia",
                    "¼ taza de aceite vegetal",
                    "1 cucharadita de chile en polvo (Receta U11)",
                    "1 pizca de sal",
                    "Papel encerado",
                    "Jugo de limón y chile para servir"
                ],
                preparation: [
                    "En tazón grande, mezclar harina de maíz y garbanzo. Incorporar agua tibia.",
                    "Agregar aceite vegetal, chile en polvo y sal. Mezclar (manos o cuchara). La masa debe ser suave (agregar más agua tibia si está seca).",
                    "Separar en bolitas. Mantener cubierta la masa restante.",
                    "Formar churritos (elegir opción):",
                    "  Opción 1: Usar tortilladora o aplastar bolitas entre plásticos, luego cortar tiras con cuchillo.",
                    "  Opción 2: Estirar bolitas con las manos hasta formar tiras delgadas. Cortar con cuchillo.",
                    "Colocar en charola con papel encerado.",
                    "Hornear a 180°C por 10-12 minutos (revisar desde 8 min). Deben quedar crujientes.",
                    "Dejar enfriar. Servir con jugo de limón y chile.",
                    "Guardar en recipiente hermético."
                
                ]
            },
            {
                id: 'U16',
                source: 'UNICEF',
                title: "Granola en Sartén",
                image: "https://i.imgur.com/xMR2htH.jpeg", // <-- Reemplaza esta URL con la imagen de la receta U16
                ingredients: [
                    "1 taza de hojuelas de avena",
                    "½ taza de amaranto inflado natural",
                    "¼ taza de cacahuates picados",
                    "½ cucharada de semillas de chía",
                    "2 cucharadas de miel de abeja",
                    "½ cucharita de canela molida"
                ],
                preparation: [
                    "Dorar hojuelas de avena en sartén a fuego medio por 3-4 min.",
                    "Agregar cacahuates y amaranto. Cocinar 2 min más, cuidando no quemar.",
                    "Agregar canela, chía y miel. Mezclar bien y cocinar hasta evaporar/secar (aprox. 2 min).",
                    "Retirar del fuego, vaciar en plato/tabla y dejar enfriar.",
                    "Despegar con las manos y guardar en recipiente hermético (dura 2 semanas)."
                
                ]
            },
             {
                id: 'U17',
                source: 'UNICEF',
                title: "Galletas de Avena",
                image: "https://i.imgur.com/TPXG7tG.jpeg", // <-- Reemplaza esta URL con la imagen de la receta U17
                ingredients: [
                    "1 plátano mediano maduro (¼ taza machacado)",
                    "1 huevo",
                    "2 cucharadas de aceite",
                    "2 cucharadas de yogurt natural sin azúcar",
                    "¼ taza de azúcar mascabado",
                    "1 cucharita de vainilla",
                    "½ cucharita de canela molida",
                    "2 cucharaditas de polvo de hornear",
                    "2 tazas de copos de avena",
                    "¼ taza de nuez picada",
                    "1 pizca de sal"
                ],
                preparation: [
                    "Precalentar horno a 180°C. Preparar bandeja (engrasar o usar papel encerado/capacillos).",
                    "Licuar 2 tazas de copos de avena para hacer harina.",
                    "Machacar plátano con tenedor en un tazón (necesitas ¼ taza).",
                    "Agregar al plátano: huevo, aceite, yogurt, azúcar, vainilla, canela, sal. Mezclar bien.",
                    "Agregar harina de avena y polvo de hornear. Incorporar casi por completo.",
                    "Incorporar nuez picada, mezclar solo hasta integrar (no sobremezclar).",
                    "Formar galletas (aprox. 16 chicas) con cucharita copeteada en la bandeja. Dar forma redonda sin presionar mucho.",
                    "Hornear 10-12 min (bandeja del medio) o hasta ligeramente doradas del fondo.",
                    "Dejar reposar 5 min en la bandeja antes de pasar a enfriar."
                
                ]
            },
             {
                id: 'U18',
                source: 'UNICEF',
                title: "Bolitas de Jamaica Enchilada",
                image: "https://i.imgur.com/WUn6k7m.png", // <-- Reemplaza esta URL con la imagen de la receta U18
                ingredients: [
                    "2 tazas de flor de jamaica cocida (la que sobra del agua U22)",
                    "1 taza de arándanos secos (o ciruelas pasa sin hueso)",
                    "2 cucharada de jugo de limón",
                    "1 cucharita chile en polvo (Receta U11)",
                    "Chile en polvo extra para cubrir (opcional)"
                ],
                preparation: [
                    "Colocar flor de jamaica (sobrante del agua) en olla con agua nueva. Cocinar 5 min a fuego medio para suavizar más.",
                    "Si los arándanos/ciruelas están secos, remojar 2 min en agua hirviendo y drenar bien.",
                    "Colar la flor de jamaica cocida.",
                    "Procesar/picar finamente la flor de jamaica (procesador, licuadora potente o cuchillo).",
                    "Agregar arándanos/ciruelas, jugo de limón, chile en polvo (1 cdita). Procesar/picar hasta formar una pasta.",
                    "Formar bolitas pequeñas.",
                    "Opcional: cubrir cada bolita con más chile en polvo.",
                    "Guardar en recipiente hermético."
                
                ]
            },
            {
                id: 'U19',
                source: 'UNICEF',
                title: "Bolis o Paletas de Fruta con Yogurt Natural",
                image: "https://i.imgur.com/b7o4ztg.png", // <-- Reemplaza esta URL con la imagen de la receta U19
                ingredients: [
                    "1¼ tazas de yogurt natural sin azúcar",
                    "2 cucharadas de miel de abeja",
                    "1 taza de fruta picada (fresas, mango, etc., de temporada)",
                    "Vainilla al gusto"
                ],
                preparation: [
                    "Picar la fruta elegida.",
                    "Incorporar la mitad de la miel y vainilla al yogurt, mezclar bien.",
                    "Agregar la miel restante y vainilla a la mezcla y revolver.",
                    "Formar paletas/bolis: alternar capas de yogurt y fruta en moldes/bolsitas.",
                    "Insertar palito (paletas) o cerrar bolsita (bolis).",
                    "Congelar 4 horas o hasta firmes."
                
                ]
            },
             {
                id: 'U20',
                source: 'UNICEF',
                title: "Muffins con Zanahoria y Avena",
                image: "https://i.imgur.com/3d2gixr.png", // <-- Reemplaza esta URL con la imagen de la receta U20
                ingredients: [
                    "1½ tazas de hojuelas o copos de avena",
                    "½ taza de harina de trigo integral",
                    "½ taza de coco seco rallado",
                    "1 cucharada de polvo de hornear",
                    "1 cucharita de canela molida",
                    "1 pizca de sal",
                    "2 huevos",
                    "½ taza de azúcar mascabado",
                    "¼ taza de aceite vegetal",
                    "¼ taza de yogurt natural",
                    "1 cucharada de vainilla",
                    "1 taza de zanahoria, pelada y rallada (1 aprox.)",
                    "1 taza de calabacita rallada (1 mediana aprox.)",
                    "Hojuelas de avena y coco rallado para decorar"
                ],
                preparation: [
                    "Precalentar horno a 175°C. Preparar molde de muffins (engrasar o usar capacillos).",
                    "Pelar y rallar zanahoria. Rallar calabacita. (Picar si se prefieren trozos más pequeños).",
                    "Mezclar en tazón: aceite, azúcar, vainilla, canela, huevo, yogurt. Incorporar bien.",
                    "Agregar calabacita y zanahoria ralladas. Mezclar.",
                    "Licuar copos de avena hasta pulverizar. Vaciar en la mezcla.",
                    "Agregar harina integral, polvo de hornear y sal. Incorporar solo hasta no ver harina.",
                    "Agregar coco rallado. Terminar de incorporar sin sobremezclar.",
                    "Vaciar en los moldes preparados.",
                    "Decorar con hojuelas de avena y coco.",
                    "Hornear 30 min o hasta que palillo salga limpio.",
                    "Dejar reposar 5 min en el molde antes de sacar."
                
                ]
            },
             {
                id: 'U21',
                source: 'UNICEF',
                title: "Refrigerio de Manzana Cremosa",
                image: "https://i.imgur.com/kjlltBY.png", // <-- Reemplaza esta URL con la imagen de la receta U21
                ingredients: [
                    "5 manzanas escolares",
                    "1¼ tazas de zanahoria rallada",
                    "1¼ tazas de yogurt natural sin azúcar",
                    "½ taza de arándanos secos",
                    "½ taza de coco seco rallado",
                    "1 cucharada de vainilla",
                    "Coco seco para servir"
                ],
                preparation: [
                    "Cortar manzana en cubitos (con cáscara).",
                    "Pelar y rallar zanahoria. Picar finamente.",
                    "Mezclar manzana con yogurt (para evitar oxidación).",
                    "Agregar zanahoria, arándanos, coco (½ taza) y vainilla. Mezclar bien.",
                    "Servir en vasitos y decorar con más coco."
                
                ]
            },
             {
                id: 'U22',
                source: 'UNICEF',
                title: "Agua de Jamaica con Naranja",
                image: "https://i.imgur.com/dkRW5k8.png", // <-- Reemplaza esta URL con la imagen de la receta U22
                ingredients: [
                    "1 taza de flor de jamaica seca",
                    "12 tazas de agua",
                    "½ taza de jugo de naranja",
                    "4 cucharadas de azúcar mascabado",
                    "1 naranja en rodajas (bien limpia)"
                ],
                preparation: [
                    "En olla, hervir 6 tazas de agua. Agregar flor de jamaica. Cocinar a fuego bajo 5 min.",
                    "Apagar fuego, reposar 10 min.",
                    "Colar el agua (guardar flor para receta U18).",
                    "Mezclar azúcar mascabado con 1 taza de agua caliente y jugo de naranja hasta disolver.",
                    "Mezclar agua de jamaica colada con mezcla de jugo de naranja.",
                    "Agregar el agua restante (5 tazas).",
                    "Cortar naranja en trocitos y agregar al agua para infusionar.",
                    "Servir bien fría o con hielo. (No dejar naranja más de 1 día)."
                
                ]
            },
             {
                id: 'U23',
                source: 'UNICEF',
                title: "Agua de Piña con Chía",
                image: "https://i.imgur.com/Kpx9KaS.png", // <-- Reemplaza esta URL con la imagen de la receta U23
                ingredients: [
                    "4 tazas de piña picada (usar la más madura)",
                    "7 tazas de agua",
                    "2 cucharaditas de semillas de chía"
                ],
                preparation: [
                    "Pelar y cortar piña en cubos.",
                    "Licuar piña con un poco del agua.",
                    "Pasar por colador (opcional).",
                    "Agregar a jarra, verter agua restante y semillas de chía. Mezclar bien.",
                    "Dejar reposar 10 min para hidratar chía.",
                    "Servir bien fría o con hielos."
                
                ]
            },
             {
                id: 'U24',
                source: 'UNICEF',
                title: "Agua de Sandía con Coco",
                image: "https://i.imgur.com/1Io0fKg.png", // <-- Reemplaza esta URL con la imagen de la receta U24
                ingredients: [
                    "12 tazas de sandía en cubos, sin semillas (usar la más dulce)",
                    "2 tazas de agua de coco (o agua natural)",
                    "Limón al gusto para servir (opcional)",
                    "Hielos para servir"
                ],
                preparation: [
                    "Pelar y cortar sandía en cubos, quitar semillas.",
                    "Licuar sandía con agua de coco.",
                    "Pasar por colador.",
                    "Probar y decidir si agregar jugo de limón.",
                    "Servir bien fría o con hielos."
                
                ]
            },
             {
                id: 'U25',
                source: 'UNICEF',
                title: "Atole de Chocolate con Avena",
                image: "https://i.imgur.com/2X7pcHg.png", // <-- Reemplaza esta URL con la imagen de la receta U25
                ingredients: [
                    "1¼ tazas de copos de avena",
                    "10 tazas de leche descremada",
                    "⅔ taza de cocoa en polvo",
                    "1 cucharada de canela molida",
                    "2 cucharadas de vainilla"
                ],
                preparation: [
                    "Licuar 2 tazas de leche con avena, cocoa, canela y vainilla hasta sin grumos.",
                    "Vaciar en olla y agregar leche restante.",
                    "Llevar a ebullición a fuego bajo, mezclando ocasionalmente.",
                    "Cuando empiece a hervir, apagar y servir."
                
                ]
            },
             {
                id: 'U26',
                source: 'UNICEF',
                title: "Agua Infusionada",
                image: "https://i.imgur.com/YETwIZu.png", // <-- Reemplaza esta URL con la imagen de la receta U26
                ingredients: [
                    "2½ litros de agua",
                    "½ pepino chico en rebanadas",
                    "1 limón en rodajas",
                    "1 naranja en rodajas",
                    "Hojas de menta o hierbabuena (opcional)"
                ],
                preparation: [
                    "Llenar jarra con el agua.",
                    "Lavar pepino, naranja, limones y menta/hierbabuena.",
                    "Cortar pepino, naranja y limón en rebanadas.",
                    "Agregar al agua junto con menta/hierbabuena (opcional).",
                    "Dejar reposar 1-2 horas en refrigeración para infusionar.",
                    "Servir fría o con hielos."
                
                ]
            },
        ];
        // * C.S. = Cantidad Suficiente

    // --- Selectores DOM ---
    const recipeListContainer = document.getElementById('recipeListContainer');
    const modal = document.getElementById('recipeModal');
    const modalTitle = document.getElementById('modalRecipeTitle');
    const modalImage = document.getElementById('modalRecipeImage');
    const ingredientsTableVeracruz = document.getElementById('ingredientsTableVeracruz');
    const ingredientsListUnicef = document.getElementById('ingredientsListUnicef');
    const modalIngredientsVeracruzBody = document.getElementById('modalIngredientsVeracruzBody');
    const modalIngredientsUnicefList = document.getElementById('modalIngredientsUnicefList');
    const modalPreparationList = document.getElementById('modalRecipePreparation');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // --- Funciones ---

    // Función para mostrar tarjetas de recetas agrupadas por fuente
    function displayRecipes() {
        recipeListContainer.innerHTML = ''; // Limpiar contenedor
        const cardColors = ['bg-primary', 'bg-teal', 'bg-orange'];
        let colorIndex = 0;

        // Función auxiliar para crear tarjetas
        const createCard = (recipe, source) => {
            const card = document.createElement('div');
            const bgColor = cardColors[colorIndex % cardColors.length];
            colorIndex++;

            // Añadida clase 'recipe-card' para el efecto hover de CSS
            card.className = `recipe-card rounded-2xl shadow-lg overflow-hidden cursor-pointer bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col h-72`;
            card.onclick = () => showRecipeDetail(recipe.id, source);

            const imageUrl = recipe.image || (source === 'Veracruz'
                ? 'https://placehold.co/600x400/e0e7ff/4338ca?text=Platillo+Veracruz'
                : 'https://placehold.co/600x400/a5f3fc/0e7490?text=Platillo+UNICEF');

            const cardTitle = (source === 'Veracruz') ? `Menú ${recipe.id}` : `Menú ${recipe.id}`; // Usar Menú + ID para ambos

            card.innerHTML = `
                <div class="${bgColor} flex-grow flex items-center justify-center p-4 h-1/2">
                    <h3 class="font-bold text-3xl lg:text-4xl text-white text-center leading-tight">${cardTitle}</h3>
                </div>
                <div class="h-1/2 relative">
                   <img src="${imageUrl}" alt="Imagen de ${recipe.title}" class="absolute inset-0 w-full h-full object-cover" onerror="this.onerror=null; this.src='https://placehold.co/600x400/e0e7ff/4338ca?text=Error+Imagen';">
                   <div class="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                       <p class="text-white text-base font-medium truncate" title="${recipe.title}">${recipe.title}</p>
                   </div>
                </div>
            `;
            recipeListContainer.appendChild(card);
        };

        // Crear encabezado y tarjetas para Veracruz
        const headerVeracruz = document.createElement('div');
        headerVeracruz.className = 'section-header';
        headerVeracruz.id = 'section-veracruz'; // ID para el enlace del menú
        headerVeracruz.innerHTML = `
            <h2>Recetario Escolar Veracruz</h2>
            <p>Menús modalidad caliente</p>
        `;
        recipeListContainer.appendChild(headerVeracruz);
        veracruzRecipes.forEach(recipe => createCard(recipe, 'Veracruz'));

        // Crear encabezado y tarjetas para UNICEF
        const headerUnicef = document.createElement('div');
        headerUnicef.className = 'section-header';
        headerUnicef.id = 'section-unicef'; // ID para el enlace del menú
        headerUnicef.innerHTML = `
            <h2>Recetario Saludable UNICEF</h2>
            <p>Sabores Sanos y Amigables con el Planeta</p>
        `;
        recipeListContainer.appendChild(headerUnicef);
        unicefRecipes.forEach(recipe => createCard(recipe, 'UNICEF'));
    }

    // Función para mostrar detalles en el modal (Adaptada y sin Notas)
    function showRecipeDetail(id, source) {
        const recipe = (source === 'Veracruz')
                     ? veracruzRecipes.find(r => r.id === id)
                     : unicefRecipes.find(r => r.id === id);

        if (!recipe) return;

        modalTitle.textContent = (source === 'Veracruz') ? `Menú ${recipe.id}: ${recipe.title}` : recipe.title;
        modalImage.src = recipe.image || 'https://placehold.co/600x400/e2e8f0/4a5568?text=Imagen+no+disponible';
        modalImage.alt = `Imagen de ${recipe.title}`;

        modalIngredientsVeracruzBody.innerHTML = '';
        modalIngredientsUnicefList.innerHTML = '';
        modalPreparationList.innerHTML = '';

        ingredientsTableVeracruz.style.display = 'none';
        ingredientsListUnicef.style.display = 'none';

        if (source === 'Veracruz') {
            ingredientsTableVeracruz.style.display = 'block';
            recipe.ingredients.forEach(ing => {
                const row = modalIngredientsVeracruzBody.insertRow();
                row.className = 'border-b border-gray-200 last:border-b-0 hover:bg-slate-50';
                row.innerHTML = `
                    <td class="border-r border-gray-300 p-2 align-top">${ing.name}</td>
                    <td class="border-r border-gray-300 p-2 align-top">${ing.preescolar || '-'}</td>
                    <td class="border-r border-gray-300 p-2 align-top">${ing.escolar || '-'}</td>
                    <td class="p-2 align-top">${ing.secundaria || '-'}</td>
                `;
            });
            if (recipe.ingredients.some(ing => ing.preescolar?.includes('C.S.') || ing.escolar?.includes('C.S.') || ing.secundaria?.includes('C.S.'))) {
                 const noteRow = modalIngredientsVeracruzBody.insertRow();
                 noteRow.innerHTML = `<td colspan="4" class="p-2 text-xs text-gray-500 bg-slate-50">* C.S. = Cantidad Suficiente</td>`;
            }
        } else { // Source is UNICEF
            ingredientsListUnicef.style.display = 'block';
            recipe.ingredients.forEach(ing => {
                const li = document.createElement('li');
                if (ing.endsWith(':') && ing.trim().split(' ').length < 4) {
                     li.innerHTML = `<strong class="font-medium text-sm text-gray-800">${ing}</strong>`;
                     li.className = 'mt-2 list-none -ml-4';
                } else {
                    li.textContent = ing.trim().startsWith('-') ? ing.trim().substring(1).trim() : ing.trim();
                }
                modalIngredientsUnicefList.appendChild(li);
            });
        }

        recipe.preparation.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            modalPreparationList.appendChild(li);
        });

        modal.style.display = 'flex';
        document.body.classList.add('modal-open'); // Evita scroll del body
        setTimeout(() => { modal.style.opacity = 1; }, 10);
    }

    // Función global para ocultar el modal (accesible desde el botón HTML)
    window.hideRecipeDetail = function() {
        modal.style.opacity = 0;
        document.body.classList.remove('modal-open'); // Restaura scroll del body
        setTimeout(() => {
            modal.style.display = 'none';
         }, 300);
    }

    // --- Event Listeners ---

    // Toggle menú móvil
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú móvil al hacer clic en un enlace
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mobileMenu.classList.add('hidden');
        }
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        hideRecipeDetail();
      }
    });

     // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            hideRecipeDetail();
        }
    });

    // --- Inicialización ---
    displayRecipes(); // Cargar las recetas al iniciar

}); // Fin de DOMContentLoaded
