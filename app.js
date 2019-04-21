window.addEventListener('scroll', () => {
	let header = document.querySelector('header');
	let logo = document.querySelector('.logo-image');
	let menuLinks = document.querySelector('.menu-links');
	let animatie = document.querySelector('.animation-text');
	header.style.background = 'linear-gradient(to right, #141E30, #243B55)';
	logo.style.height = '60px';
	logo.style.width = '130px';
	animatie.classList.add('apareDefinitia');
})