document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('open');
      });
    });
  }
});
