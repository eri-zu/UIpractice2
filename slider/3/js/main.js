'use strict';

{
	const slider = document.querySelector('.slider-list');
	const imgs = document.querySelectorAll('img');
	const indicators = document.querySelectorAll('.indicator-dot');
	const len = imgs.length;

	function goToSlide(index) {
		slider.style.left = index * -500 + 'px';
	}

	indicators.forEach(indicator => {
		indicator.addEventListener('click', (e) => {

			const clickedItem = e.target;
			const targetIndex = Array.prototype.indexOf.call(indicators, clickedItem);

			goToSlide(targetIndex);

		});
	});

}
