// Navigation

const aboutBtn = document.querySelectorAll('.header-menu-item-1');
const servicesBtn = document.querySelectorAll('.header-menu-item-3');
const contactsBtn = document.querySelectorAll('.header-menu-item-4');
const cooperationBtn = document.querySelectorAll('.slide-cooperation-btn');

const aboutSection = document.querySelector('.description-section');
const servicesSection = document.querySelector('.services-section');
const contactsSection = document.querySelector('.contacts-section');
const cooperationSection = document.querySelector('.cooperation-section');

for (let i = 0; i < aboutBtn.length; i++) {
	aboutBtn[i].addEventListener('click', function () {
		window.scrollTo({
			top: aboutSection.getBoundingClientRect().top + window.scrollY,
			behavior: 'smooth',
		});
		document.body.style.overflow = 'auto';
		closeBurgerMenu();
	});
}

for (let i = 0; i < servicesBtn.length; i++) {
	servicesBtn[i].addEventListener('click', function () {
		window.scrollTo({
			top: servicesSection.getBoundingClientRect().top + window.scrollY,
			behavior: 'smooth',
		});
		document.body.style.overflow = 'auto';
		closeBurgerMenu();
	});
}

for (let i = 0; i < contactsBtn.length; i++) {
	contactsBtn[i].addEventListener('click', function () {
		window.scrollTo({
			top: contactsSection.getBoundingClientRect().top + window.scrollY,
			behavior: 'smooth',
		});
		document.body.style.overflow = 'auto';
		closeBurgerMenu();
	});
}

for (let i = 0; i < cooperationBtn.length; i++) {
	cooperationBtn[i].addEventListener('click', function () {
		window.scrollTo({
			top: contactsSection.getBoundingClientRect().top + window.scrollY,
			behavior: 'smooth',
		});
		document.body.style.overflow = 'auto';
		closeBurgerMenu();
	});
}

// Burger menu

const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const closeBurgerMenuBtn = document.querySelector('.close-burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuBg = document.querySelector('.burger-menu-bg');

burgerMenuBtn.addEventListener('click', () => {
	burgerMenu.classList.add('active');
	burgerMenuBg.classList.add('active');
	document.body.style.overflow = 'hidden';
});

closeBurgerMenuBtn.addEventListener('click', () => {
	closeBurgerMenu();
});

function closeBurgerMenu() {
	burgerMenu.classList.remove('active');
	burgerMenuBg.classList.remove('active');
	document.body.style.overflow = 'auto';
}

// Initialization of swipers

const swiper = new Swiper('.preview-swiper', {
	spaceBetween: 0,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	loop: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
		draggable: false,
	},
	autoplay: {
		delay: 5000,
	},
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

const projectTabletSwiper = new Swiper('.projects-tablet-swiper', {
	spaceBetween: 30,
	loop: true,
	slidesPerView: 'auto',
	pagination: {
		el: '.projects-tablet-swiper-pagination',
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
	if (window.innerWidth >= 1350) {
		servicesContainer.classList.add('hovered-1');
	}
});
serviceItem1.addEventListener('mouseout', () => {
	if (window.innerWidth >= 1350) {
		servicesContainer.classList.remove('hovered-1');
	}
});

serviceItem2.addEventListener('mouseover', () => {
	if (window.innerWidth >= 1350) {
		servicesContainer.classList.add('hovered-2');
	}
});
serviceItem2.addEventListener('mouseout', () => {
	if (window.innerWidth >= 1350) {
		servicesContainer.classList.remove('hovered-2');
	}
});

serviceItem3.addEventListener('mouseover', () => {
	if (window.innerWidth >= 1350) {
		servicesContainer.classList.add('hovered-3');
	}
});
serviceItem3.addEventListener('mouseout', () => {
	if (window.innerWidth >= 1350) {
		servicesContainer.classList.remove('hovered-3');
	}
});

serviceItem4.addEventListener('mouseover', () => {
	if (window.innerWidth >= 1350) {
		servicesContainer.classList.add('hovered-4');
	}
});
serviceItem4.addEventListener('mouseout', () => {
	if (window.innerWidth >= 1350) {
		servicesContainer.classList.remove('hovered-4');
	}
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
