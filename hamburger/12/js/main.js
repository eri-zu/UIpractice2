'use strict';

// 目標:ハンバーガーメニュー

{
	const icons = document.querySelectorAll('.menuIcon');
	const bars = document.querySelectorAll('.menuIconBar');
	const rotate = document.querySelector('.rotate');
	const bg = document.querySelector('.bg');

	rotate.addEventListener('click', () => {
		TweenMax.to(rotate, 1.5, {
			ease: Elastic.easeOut.config(1, 0.3),
			rotation: '360deg'
		});

	});

	
}