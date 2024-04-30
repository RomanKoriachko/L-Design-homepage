// Initialization of swipers

const progressCircle = document.querySelector('.autoplay-progress svg');
const progressContent = document.querySelector('.autoplay-progress span');

const swiper = new Swiper('.preview-swiper', {
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

const projectSwiper = new Swiper('.projects-swiper', {
	spaceBetween: 30,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	loop: true,
	pagination: {
		el: '.projects-swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
});

// Services section animation

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

// Change projects-link-wrapper background image when projects-swiper slide change

// const parentElement = document.querySelector('.projects-swiper');
// const projectsLink = document.querySelector('.projects-link-wrapper');

// function setBackgroundToElementFromImg(img, element) {
// 	const imgUrl = img.getAttribute('src');
// 	element.style.backgroundImage = `url(${imgUrl})`;
// }

// function observeDOMChanges() {
// 	const parentElement = document.querySelector('.projects-swiper');
// 	const targetElement = document.querySelector('.projects-link-wrapper');

// 	if (parentElement && targetElement) {
// 		const observer = new MutationObserver((mutationsList) => {
// 			for (let mutation of mutationsList) {
// 				if (
// 					mutation.type === 'attributes' &&
// 					mutation.attributeName === 'class'
// 				) {
// 					const nextSlide = parentElement.querySelector('.swiper-slide-next');
// 					if (nextSlide) {
// 						const img = nextSlide.querySelector('img');
// 						if (img) {
// 							setBackgroundToElementFromImg(img, targetElement);
// 						}
// 					}
// 				}
// 			}
// 		});

// 		observer.observe(parentElement, {
// 			attributes: true,
// 			subtree: true,
// 			attributeFilter: ['class'],
// 		});
// 	}
// }

// observeDOMChanges();
