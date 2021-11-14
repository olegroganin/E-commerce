document.addEventListener('DOMContentLoaded', function () {

	$(document).ready(function () {
		$(".slider").slick({
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		})
	});

	const headerBurger = document.querySelector('.header__burger');
	const navMobile = document.querySelector('.nav__links-mobile');
	const body = document.querySelector('body');
	const header = document.querySelector('.header__inner-hidden');

   navMobile.addEventListener('click', () => {
	   navMobile.classList.remove('active');
	   headerBurger.classList.remove('active');
	   body.classList.remove('lock');
});

   headerBurger.addEventListener('click', () => {
		headerBurger.classList.toggle('active');
		navMobile.classList.toggle('active');
		body.classList.toggle('lock');
	});

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 150) {
			header.classList.remove('hidden');
		} else {
			header.classList.add('hidden');
		}
	});

   window.addEventListener('resize', () => {
		let windowSize = window.innerWidth;
		if(windowSize > 767){
			navMobile.classList.remove('active');
			headerBurger.classList.remove('active');
		}
	})
});


