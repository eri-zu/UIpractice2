'use strict';

// x軸スクロールの動きをoverflow scrollを使わずに実装

{
	
	const sliderInner = document.querySelector('.slider-inner');
	const items = document.querySelectorAll('.slider-inner a ');
	// const slider = document.querySelector('.slider');
	// const ease = 0.12;
	let position;
	let direction;

	swipe();

	function swipe() {
		sliderInner.addEventListener('touchstart', onTouchStart, {passive: true});
		sliderInner.addEventListener('touchmove', onTouchMove, {passive: true});
		sliderInner.addEventListener('touchend', onTouchEnd, {passive: true});
	}

	// スワイプ開始時の座標を取得
	function onTouchStart(e) {
		position = getPosition(e); // タッチした位置
		direction = '';
	}

	// スワイプの方向判定
	// 70px以上移動しないとスワイプと判断しない
	function onTouchMove(e) {
		if(position - getPosition(e) > 70) { 
			direction = 'left';
		} else if(position - getPosition(e) < -70) {
			direction = 'right';
		}
	}

	// スワイプ結果
	function onTouchEnd(e) {
		if(direction == 'right') {
			// alert('右だよ');
			TweenMax.to(sliderInner, 0.6, {
				ease: Power4.easeInOut,
				x: "+=250px"
			});
		} else if (direction == 'left') {
			// alert('左だよ');
			TweenMax.to(sliderInner, 0.6, {
				ease: Power4.easeInOut,
				x: "-=250px"
			});
		}
	}

	// x座標を取得
	function getPosition(e) {
		return e.changedTouches[0].pageX;
	}

	// マウスを押し込んだ時/タッチした時、要素が小さくなるエフェクト
	items.forEach(clickedItem => {

		clickedItem.addEventListener('mousedown', (e) => {
			e.preventDefault();
			TweenMax.to(clickedItem, 0.8, {
				scale: 0.96,
				ease: Expo.easeOut,
			});
		});

		clickedItem.addEventListener('touchstart', (e) => {
			e.preventDefault();
			TweenMax.to(clickedItem, 0.8, {
				scale: 0.96,
				ease: Expo.easeOut,
			});
		});

		clickedItem.addEventListener('mouseup', (e) => {
			e.preventDefault();
			TweenMax.to(clickedItem, 0.8, {
				scale: 1,
				ease: Expo.easeOut,
			});
		});

		clickedItem.addEventListener('mousemove', (e) => {
			e.preventDefault();
			TweenMax.to(clickedItem, 0.8, {
				scale: 1,
				ease: Expo.easeOut,
			});
		});

		clickedItem.addEventListener('touchend', (e) => {
			e.preventDefault();
			TweenMax.to(clickedItem, 0.8, {
				scale: 1,
				ease: Expo.easeOut,
			});
		});

	});

}