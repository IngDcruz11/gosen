document.addEventListener('DOMContentLoaded', () => {
    // 1. Desplazamiento Suave (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. LÓGICA DE MODO CLARO/OSCURO
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Solo ejecuta la lógica si el botón existe
    if (themeToggle) { 
        
        // Función para aplicar o quitar el modo oscuro
        function toggleTheme() {
            body.classList.toggle('dark-mode');
            
            // Actualizar el ícono y guardar la preferencia en el navegador
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            
            // Cambiar el ícono: Luna (oscuro) o Sol (claro)
            themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }

        // Comprobar la preferencia de tema guardada al cargar la página
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            // Por defecto será modo claro y tendrá el ícono de la luna
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

        // Event listener para el botón
        themeToggle.addEventListener('click', toggleTheme);
    }
    // FIN DE LÓGICA DE MODO CLARO/OSCURO

    // 3. Versículo Bíblico Dinámico
    const versiculos = [
        {
            texto: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
            referencia: "Juan 3:16"
        },
        {
            texto: "Fíate de Jehová de todo tu corazón, Y no te apoyes en tu propia prudencia.",
            referencia: "Proverbios 3:5"
        },
        {
            texto: "Todo lo puedo en Cristo que me fortalece.",
            referencia: "Filipenses 4:13"
        }
    ];

    const elementoVersiculo = document.getElementById('versiculo-dinamico');
    
    if (elementoVersiculo) {
        const versiculoAleatorio = versiculos[Math.floor(Math.random() * versiculos.length)];
        
        elementoVersiculo.innerHTML = `
            <p>"${versiculoAleatorio.texto}"</p>
            <footer>— ${versiculoAleatorio.referencia}</footer>
        `;
    }
});