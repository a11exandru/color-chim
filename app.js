window.addEventListener('scroll', () => {
	let header = document.querySelector('header');
	let logo = document.querySelector('.logo');
	let logoImage = document.querySelector('.logo-image');
	let menuLinks = document.querySelector('.menu-links');
	let animatie = document.querySelector('.animation-text');
	let toTop = document.querySelector('.toTop');
	let tipTitlu = document.querySelector('.tipColorantiTitlu');
	header.style.background = '#111';
	logoImage.style.height = '60px';
	logoImage.style.width = '130px';
	logo.style.padding = '9px 0px 2px 5px';

	if (window.scrollY > 130) {
		animatie.classList.add('apareDefinitia');
	}

	if (window.scrollY > 240) {
		toTop.style.opacity = "1";
	}

	if(window.scrollY < 150) {		
		toTop.style.opacity = "0";
	}

	if(window.scrollY < 50) {
		header.style.background = 'linear-gradient(to left, #09203f  , #537895)';
		logoImage.style.height = '70px';
		logoImage.style.width = '170px';
	}

	if(window.scrollY > 900) {
		tipTitlu.style.opacity = "1";
	}
})

// ascunde meniul in phone mode cand este apasat un link din meniu.
const ascundeMeniu = () => {
	let input = document.getElementById('menu-input');
	input.checked = false;
}