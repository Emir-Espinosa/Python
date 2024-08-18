document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.style.display === 'block';

            // Cerrar todos los contenidos abiertos
            document.querySelectorAll('.accordion-content').forEach(item => item.style.display = 'none');

            // Mostrar el contenido actual si estaba cerrado
            if (!isActive) {
                content.style.display = 'block';
            }
        });
    });
});
