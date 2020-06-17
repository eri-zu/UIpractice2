'use strict';

// 目標:ハンバーガーメニュー × Tweenmax

{
	const icon = document.querySelector('.menuIcon');
	const bars = document.querySelectorAll('.menuIconBar');
	const bg = document.querySelector('.bg');
	const duration = 1.5;

	icon.addEventListener('click', () => {
		bars.forEach(bar => {
			bar.classList.toggle('active');

			if(bar.classList.contains('active')) {
				TweenMax.to(bg, duration, {
					ease: Power4.easeInOut,
					scale: 100,
				});
			} else {
				TweenMax.to(bg, duration, {
					ease: Power4.easeInOut,
					scale: 1,
				});
			}
		});

	});
}