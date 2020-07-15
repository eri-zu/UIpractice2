'use strict';

// 目標:ハンバーガーメニュー × Tweenmax

{
	const icon = document.querySelector('.menuIcon');
	const bars = document.querySelectorAll('.menuIconBar');
	const bgs = document.querySelectorAll('.bg');
	const duration = 1;

	icon.addEventListener('click', () => {
		bars.forEach(bar => {

			bar.classList.toggle('active');

			if(bar.classList.contains('active')) {
				TweenMax.staggerTo(bgs, duration, {
					ease: Power4.easeInOut,
					scale: 100,
				}, 0.4);
			} else {
				TweenMax.staggerTo(bgs, duration, {
					ease: Power4.easeInOut,
					scale: 1,
				}, 0.4);
			}
		});

	});
}