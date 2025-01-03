        document.addEventListener('DOMContentLoaded', function () {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            const totalSlides = slides.length;
            let currentIndex = 0;

            function showNextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            setInterval(showNextSlide, 6000);
        });
document.getElementById('agree-button').addEventListener('click', function() {
    document.getElementById('disclaimer-popup').style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  let data = {};
  formData.forEach((value, key) => (data[key] = value));

  console.log('Form Data Submitted:', data);
  alert('Your message has been submitted successfully!');
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
  document.querySelectorAll('.practice').forEach(practice => {
    practice.addEventListener('mouseover', () => {
        practice.querySelector('.icon').style.transform = 'rotate(360deg)';
    });

    practice.addEventListener('mouseout', () => {
        practice.querySelector('.icon').style.transform = 'rotate(0deg)';
    });
});
  
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.width === '150px') {
    sidebar.style.width = '0';
  } else {
    sidebar.style.width = '150px';
  }
}