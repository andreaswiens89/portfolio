var hamburger = document.getElementById('hamburger');
var navMobile = document.getElementById('navVisibility');

function showNavigation() {
	navMobile.classList.toggle("show");
}

hamburger.addEventListener('click', showNavigation);
