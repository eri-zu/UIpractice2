'use strict';

// 基本のスライダー
// アニメーションについて↓
// effectは切り替わる時、明るめのグレースケールで
// 切り替わった後は、鮮やかになる（グレースケールから徐々に色が入っていくイメージ）

// インジゲーターをクリックできるようにした
// インジゲーターをクリックしたとき、autoplayとのコンフリクに注意

{
	const slider = document.querySelector('.slider');
	const imgs = document.querySelectorAll('.slider-item');
	const indicators = document.querySelectorAll('.indicator div')
	let len = imgs.length;
	let current = 0;
	let timer;

	// インデックス番号に応じて表示するスライドを決定
	function goToSlide(index) {
		current = index; 
		updatePhoto();
		updateIndicator();
	}

	function updatePhoto() {
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

	// mvをクリックすると次のスライドへうつる
	slider.addEventListener('click', () => {
		const nextIndex = (current + 1) % len;
		goToSlide(nextIndex);
	});

	// インジゲーターをクリックすると該当のスライドへうつる
	indicators.forEach(indicator => {
		indicator.addEventListener('click', (e) => {
			// e.preventDefault();

			const clickedItem = e.target;
			const targetIndex = Array.prototype.indexOf.call(indicators, clickedItem);

			goToSlide(targetIndex);
			stopAutoPlay(); // 再生されていたautoplayがいったんリセットされる
			autoPlay(); // 新たなautoplayが開始

		});
	});

	// オートプレイ
	function autoPlay () {
		timer = setInterval(() => {
			const nextIndex = (current + 1) % len;
			goToSlide(nextIndex);
		}, 7000);
	}

	function stopAutoPlay () {
		clearInterval(timer);
	}

	goToSlide(current);
	autoPlay();

}