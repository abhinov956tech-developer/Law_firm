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
  
  