document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('input[type="submit"]');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        // Crear el efecto de explosión
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        document.body.appendChild(explosion);

        setTimeout(() => {
            explosion.remove();
            showAtomsAnimation();
        }, 1000); // Duración del efecto de explosión

    });

    function showAtomsAnimation() {
        // Crear la animación de átomos
        const atomsContainer = document.createElement('div');
        atomsContainer.className = 'atoms-container';
        document.body.appendChild(atomsContainer);

        for (let i = 0; i < 50; i++) {
            const atom = document.createElement('div');
            atom.className = 'atom';
            atomsContainer.appendChild(atom);
        }

        setTimeout(() => {
            atomsContainer.remove();
            showMessage();
        }, 3000); // Duración de la animación de átomos
    }

    function showMessage() {
        // Mostrar el mensaje final
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = 'Enviado';
        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 2000); // Duración del mensaje final
    }
});
