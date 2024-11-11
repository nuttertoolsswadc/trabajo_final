// Modo Claro y Oscuro
document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.textContent = 'Cambiar Tema';
    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

// Muestra un mensaje de confirmación al enviar el formulario
document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Previene el envío real del formulario
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
});
