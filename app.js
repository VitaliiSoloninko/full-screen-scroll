const pageSlider = new Swiper('.swiper', {
	wrapperClass: 'page__wrapper',
	slidersClass: 'page__screen',

	direction: 'vertical',
	parallax: 'true',
	// loop: true,
	speed: 800,
	watchOverflow: true, // Відключати слайдер. коли вн один
	slidesPerView: 'auto',
	observer: true,
	observeParents: true,
	observeSlideChildren: true,

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: 'page__bullet',
		bulletActiveClass: 'page__bullet_active',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
})

/*
	pagination: {
		el: '.page__pagination',
	},
	scrollbar: {
		el: '.page__scroll',
		dragClass: 'page__drag-scroll',
		draggable: true,
	},
*/
