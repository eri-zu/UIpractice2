'use strict';

// 目標:ハンバーガーメニュー

{
	const icon = document.querySelector('.menuIcon');
	const bars = document.querySelectorAll('.menuIconBar');
	const bars = document.querySelectorAll('.menuIconBar');
	const bars = document.querySelectorAll('.menuIconBar');

	icon.addEventListener('click', () => {
		bars.forEach(bar => {
			bar.classList.toggle('active');
		});
	});

	var tl = new TimelineMax();
	tl
	.to(bar1, 0.5, {x: '10px'})
	.to(bar2, 0.5, {x: '10px'}, 0.5)
	.to(bar3, 0.5, {x: '10px'}, 1);
}