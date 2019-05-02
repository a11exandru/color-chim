window.addEventListener('scroll', () => {
	let header = document.querySelector('header');
	let logo = document.querySelector('.logo-image');
	let menuLinks = document.querySelector('.menu-links');
	let animatie = document.querySelector('.animation-text');
	let toTop = document.querySelector('.toTop');
	let tipTitlu = document.querySelector('.tipColorantiTitlu');
	header.style.background = '#111';
	logo.style.height = '60px';
	logo.style.width = '130px';

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
		logo.style.height = '70px';
		logo.style.width = '170px';
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