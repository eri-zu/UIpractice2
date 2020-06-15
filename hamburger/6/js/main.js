'use strict';

// 目標:ハンバーガーメニュー
// TImelineMaxでアニメーション

{
	const icon = document.querySelector('.menuIcon');
	const bars = document.querySelectorAll('.menuIconBar');
	const bar1 = document.querySelectorAll('.bar01');
	const bar2 = document.querySelectorAll('.bar02');
	const bar3 = document.querySelectorAll('.bar03');

	icon.addEventListener('click', () => {
		var tl = new TimelineMax();
		tl
		.to(bar1, 0.4, {y: '0px'}, 0)
		.to(bar3, 0.4, {y: '0px'}, 0)
		.to(bar2, 0.3, {opacity: '0'}, 0.4)
		.to(bar1, 0.4, {rotation: '45deg'}, 0.4)
		.to(bar3, 0.4, {rotation: '-45deg'}, 0.4);
	});
}