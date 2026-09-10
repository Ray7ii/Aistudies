const darkModeButton = document.querySelector('.nav-buttons .btn-secondary');
const logoImage = document.querySelector('.logo-image');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the dark-mode class and update the controls that show the current mode.
darkModeButton.addEventListener('click', () => {
	const isDarkMode = document.body.classList.toggle('dark-mode');

	darkModeButton.textContent = isDarkMode ? 'Light' : 'Dark';
	logoImage.src = isDarkMode ? 'images/light-logo.png' : 'images/dark-logo.png';
});

// Toggle the mobile navigation links when the hamburger button is clicked.
menuToggle.addEventListener('click', () => {
	const isMenuOpen = navLinks.classList.toggle('is-open');

	// Swap the hamburger icon for a close icon while the menu is open.
	menuToggle.querySelector('i').className = isMenuOpen ? 'bi bi-x-lg' : 'bi bi-list';
});

// Show or hide each FAQ answer when its question is clicked.
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
	question.addEventListener('click', () => {
		question.parentElement.classList.toggle('is-open');
	});
});
