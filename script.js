document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');

    // Toggle para el menú de navegación móvil
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Cierra el menú si se hace clic fuera del mismo
    document.addEventListener('click', function(event) {
        const isClickInside = navList.contains(event.target) || menuToggle.contains(event.target);
        
        if (!isClickInside && navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    });
});