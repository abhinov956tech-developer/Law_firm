        document.addEventListener('DOMContentLoaded', function () {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            const totalSlides = slides.length;
            let currentIndex = 0;

            function showNextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            setInterval(showNextSlide, 3000); // Change slide every 3 seconds
        });
document.getElementById('agree-button').addEventListener('click', function() {
    document.getElementById('disclaimer-popup').style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach(item => {
      item.addEventListener("mouseenter", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  
    menu.addEventListener("mouseleave", () => {
      menuItems.forEach(item => item.classList.remove("active"));
    });
  });
  
  