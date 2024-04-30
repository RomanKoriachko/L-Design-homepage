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

const servicesItems = document.querySelectorAll('.services-item');
const serviceItem1 = document.querySelector('.services-item-1');
const serviceItem2 = document.querySelector('.services-item-2');
const serviceItem3 = document.querySelector('.services-item-3');
const serviceItem4 = document.querySelector('.services-item-4');
const servicesContainer = document.querySelector('.services-container');

serviceItem1.addEventListener('mouseover', () => {
	servicesContainer.classList.add('hovered-1');
});
serviceItem1.addEventListener('mouseout', () => {
	servicesContainer.classList.remove('hovered-1');
});

serviceItem2.addEventListener('mouseover', () => {
	servicesContainer.classList.add('hovered-2');
});
serviceItem2.addEventListener('mouseout', () => {
	servicesContainer.classList.remove('hovered-2');
});

serviceItem3.addEventListener('mouseover', () => {
	servicesContainer.classList.add('hovered-3');
});
serviceItem3.addEventListener('mouseout', () => {
	servicesContainer.classList.remove('hovered-3');
});

serviceItem4.addEventListener('mouseover', () => {
	servicesContainer.classList.add('hovered-4');
});
serviceItem4.addEventListener('mouseout', () => {
	servicesContainer.classList.remove('hovered-4');
});
