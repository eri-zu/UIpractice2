'use strict';

// ローディングとスライダーのコンビネーション


{
	//----------------------------------------------------
	// スライダー
	//----------------------------------------------------

	const imgs = document.querySelectorAll('.slider-item');
	const indicators = document.querySelectorAll('.indicator div')
	const slider = document.querySelector('.slider');
	const sliderFirst = document.querySelector('.slider-item:first-child');
	let len = imgs.length;
	let current = 0;
	let nextIndex;
	let timer2;
	

	// スライダー
	// インデックス番号に基づき動かす処理
	function goToSlide(index) {
		current = index;
		updatePhoto();
		updateIndicator();
	}

	function updatePhoto () {
		imgs.forEach(img => {
			img.classList.remove('active');
			img.classList.remove('active-effect');
		});

		imgs[current].classList.add('active');
		imgs[current].classList.add('active-effect');
	}

	function updateIndicator () {
		indicators.forEach(indicator => {
			indicator.classList.remove('active');
		});

		indicators[current].classList.add('active');
	}

	// sliderをクリックすると次の画像
	slider.addEventListener('click', () => {
		nextIndex = (current + 1) % len;
		goToSlide(nextIndex);

		stopAutoPlay();
		autoPlay();

	});


	// インジゲーターをクリックすると該当の画像表示
	indicators.forEach(indicator => {
		indicator.addEventListener('click', (e) => {

			const clickedItem = e.target;
			const targetIndex = Array.prototype.indexOf.call(indicators, clickedItem);

			goToSlide(targetIndex);
			stopAutoPlay(); // 再生されていたautoplayがいったんリセットされる
			autoPlay(); // 新たなautoplayが開始

		});
	});

	// 自動再生
	function autoPlay () {
		timer2 = setInterval(() => {
			nextIndex = (current + 1) % len;
			goToSlide(nextIndex);
		}, 7500);
	}

	function stopAutoPlay () {
		clearInterval(timer2);
	}

	// ロゴを2秒見せてから、sliderFirstを見せてスライドショー開始
	const timer = setTimeout(() => {
		goToSlide(current);
		autoPlay();
	}, 2000);

}