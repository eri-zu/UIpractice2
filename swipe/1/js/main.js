'use strict';

// スワイプ実装

{
	const sliderInner = document.querySelector('.slider-inner');
	const items = document.querySelectorAll('.slider-inner a ');
	const slider = document.querySelector('.slider');
	const ease = 0.12;
	let position;
	let direction;

	swipe();
	// onDown();
	// onUp();


	function swipe() {
		sliderInner.addEventListener('touchstart', onTouchStart);
		sliderInner.addEventListener('touchmove', onTouchMove);
		sliderInner.addEventListener('touchend', onTouchEnd);
	}

	// スワイプ開始時の座標を取得
	function onTouchStart(event) {
		position = getPosition(event);
		direction = '';
	}

	// スワイプの方向判定
	// 70px以上移動しないとスワイプと判断しない
	function onTouchMove(event) {

		if(position - getPosition(event) > 70) { 
			direction = 'left';
		} else if(position - getPosition(event) < -70) {
			direction = 'right';
		}
	}

	// スワイプ結果
	function onTouchEnd(event) {
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

	// 横方向の座標を取得
	function getPosition(event) {
		return event.changedTouches[0].pageX;
	}
	
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