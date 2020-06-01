'use strict';

// 目標:section04がscrollArea内に入ってきたときに発火するというのを数値を使わずに実装

{

	const btn = document.getElementById('conversionBtnFixed');
	const wrapper = document.getElementById('wrapper');
	const sec04 = document.querySelector('.section04');
	let scrollArea;

	wrapper.addEventListener('scroll', fadeIn);

	function fadeIn () {

		scrollArea = wrapper;
	
		//ビューポートにおけるトップからの距離=> getBoundingClientRect().top; 
		//scrollAreaのトップからの距離と高さ = OffsetTop
		const distance = scrollArea.getBoundingClientRect().top;
		const h = scrollArea.getBoundingClientRect().height;
		const OffsetTop = distance + h;

		//section04のウィンドウトップからの絶対位置
		const sec04OffsetTop = sec04.getBoundingClientRect().top;

		//section04がscrollArea内に入ってきたときに発火
		if(OffsetTop > sec04OffsetTop) {
			btn.classList.add('active');
		} else {
			btn.classList.remove('active');
		}
		
	}

}