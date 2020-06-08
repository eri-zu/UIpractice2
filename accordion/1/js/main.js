'use strict';

// 目標:アコーディオンを開く TweenMax使う
{
	const accordions = document.querySelectorAll('.box');
	const duration = 0;

	accordions.forEach(accordion => {
		accordion.addEventListener('click', () => {
			const txt = accordion.querySelector('.box-txt_detail');
			const arrow = accordion.querySelector('.box-arrow');

			txt.classList.toggle('active');

			TweenMax.to(arrow, duration, {
				ease: Power4.easeInOut,
				rotation: '135deg',
				yoyo: true
			});

		});
	});



}