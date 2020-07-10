'use strict';

// 基本のスライダー
// アニメーションについて↓
// effectは切り替わる時、明るめのグレースケールで
// 切り替わった後は、鮮やかになる（グレースケールから徐々に色が入っていくイメージ）

// インジゲーターをクリックできるようにした
// インジゲーターをクリックしたとき、autoplayとのコンフリクに注意

{
	const slider = document.querySelector('.slider-list');
	const imgs = document.querySelectorAll('img');
	const indicators = document.querySelectorAll('.indicator-dot');
	const len = imgs.length;

	function goToSlide(index) {
		slider.style.left = index * -500 + 'px';
	}

	indicators.forEach(indicator => {
		indicator.addEventListener('click', (e) => {

			const clickedItem = e.target;
			const targetIndex = Array.prototype.indexOf.call(indicators, clickedItem);

			goToSlide(targetIndex);

		});
	});

	


}