const progressCircle = document.querySelector('.autoplay-progress svg');
const progressContent = document.querySelector('.autoplay-progress span');

const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	spaceBetween: 80,
	// effect: 'fade',
	// fadeEffect: {
	// 	crossFade: true,
	// },

	// pagination: {
	// 	el: '.swiper-pagination',
	// },
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
		draggable: true,
	},
	// autoplay: {
	// 	delay: 5000,
	// },
	// on: {
	// 	autoplayTimeLeft(s, time, progress) {
	// 		progressCircle.style.setProperty('--progress', 1 - progress);
	// 		progressContent.textContent = `${Math.ceil(time / 1000)}s`;
	// 	},
	// },
});
