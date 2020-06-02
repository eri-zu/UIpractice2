'use strict';

// 目標:section04の中途半端な位置で発火させる実装

{

	const btn = document.getElementById('conversionBtnFixed');
	const wrapper = document.getElementById('wrapper');
	const sec04 = document.querySelector('.section04');
	let scrollArea;

	wrapper.addEventListener('scroll', fadeIn);

	function fadeIn () {

		scrollArea = wrapper;

		// 表示開始させたい場所のトップからの絶対距離（基準線的な？）
		const distance = scrollArea.getBoundingClientRect().top + 450;

		// sec04の表示開始させたい位置のビューポートにおけるトップからの距離
		// 数値は、sec04の表示開始させたい場所
		const sec04OffsetTop = sec04.getBoundingClientRect().top + 500;

		console.log(sec04OffsetTop); // スクロールするたびにスクロール量は減る

		if(distance > sec04OffsetTop) {
			btn.classList.add('active');
		} else {
			btn.classList.remove('active');
		}

	}

}