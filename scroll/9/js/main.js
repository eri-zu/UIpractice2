'use strict';
// 目標：スクロールインジゲーターの実装

{
	const h = document.documentElement.scrollHeight;
	const wh = window.innerHeight;
	const wholeArea = h - wh; 
	const bar = document.querySelector('.progress-bar');
	let percent = 0;
	let scrollY = 0;

	window.addEventListener('scroll', () => {
		scrollY = window.pageYOffset;
		percent = scrollY / wholeArea * 100;

		bar.style.width = percent + '%';

	});
	
	

}