'use strict';

// 目標:ハンバーガーメニュー

{
	const icon = document.getElementById('menuIcon');
	const bars = document.querySelectorAll('.menuIconBar');

	icon.addEventListener('mouseenter', () => {
    bars.forEach(bar => {
		  bar.classList.add('is-active');	
		});
	});
	icon.addEventListener('mouseleave', () => {
    bars.forEach(bar => {
		  bar.classList.remove('is-active');	
		});
	});


}