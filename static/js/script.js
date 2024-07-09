document.addEventListener("DOMContentLoaded", function() {
    const cape = document.getElementById('cape');
    const mainImage = document.getElementById('main-image');
    document.addEventListener('DOMContentLoaded', (event) => {

    // Adjust cape position based on main image position and size
    cape.style.width = mainImage.width + 'px';
    cape.style.height = mainImage.height + 'px';
});
