export default class Slider extends EventTarget {

	constructor() {
		super ();
		// DOM
		this.sliderList = document.querySelector('.slider-list');
	}

	goToSlide(index) {
		this.sliderList.style.left = index * -500 + 'px';
	}

}