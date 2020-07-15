'use strict';
// 目標：スクロールが特定のエリアに入ったかどうかを検知
// -> section03でheaderの色変更
{
	const targetArea = document.querySelector('.target-area');
	const header = document.querySelector('header');
	let scrollY; // スクロール量
	let areaTop; // 対象エリア上部の絶対位置
	let areaBottom; // 対象エリア上部の絶対位置

	window.addEventListener('scroll', () => {

		scrollY = window.scrollY;
		areaTop = targetArea.getBoundingClientRect().top + scrollY;
		areaBottom = targetArea.getBoundingClientRect().bottom + scrollY;

		if(scrollY > areaTop && scrollY < areaBottom) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}

	});
	
	

}