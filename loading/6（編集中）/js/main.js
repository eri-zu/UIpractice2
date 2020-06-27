'use strict';

// 目標:ローディングバー

{
	const loadingScreen = document.querySelector('.loading');
	const imgs = document.querySelectorAll('img');
	const txt = document.querySelector('.loading-percent');
	const len = imgs.length;
	let currentPos = 0; // プログレスバーの現在位置
	let target = 0;
	let loadIndex = 0;

	imgs.forEach(img => {
		
		img.addEventListener('load', () => {

			//カウンター
			loadIndex ++;	

			// 進捗率（%）
			target = loadIndex / len * 100;
			currentPos += (target - currentPos) * 0.12; // イージング
			txt.textContent = Math.floor(currentPos); // 整数返す

			// 99.9より大きければ100とみなす
			if(target > 99.9) {
				target = 100;
			}

			// 終了処理
			if(target >= 100) {
				onComplete();
			}

		});

		const src = img.getAttribute('data-src');
		img.setAttribute('src', src); 

	});

	function onComplete () {
		loadingScreen.classList.add('hide');
	}
	
}