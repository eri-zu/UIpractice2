'use strict';

// 目標:ローディングバー

{
	const loadingScreen = document.querySelector('.loading');
	const imgs = document.querySelectorAll('img');
	const txt = document.querySelector('.loading-percent');
	const len = imgs.length;
	let target = 0;
	let loadIndex = 0;

	imgs.forEach(img => {
		
		img.addEventListener('load', () => {

			//カウンター
			loadIndex ++;	

			// 進捗率（%）
			target = loadIndex / len * 100;
			txt.textContent = Math.floor(target); // 整数返す

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