'use strict';

// x軸スクロールの動きをoverflow scrollを使わずに実装

{
	// const slider = document.querySelector('.slider-inner');
	// const duration = 3;
	// let mousedownX = 0;
	// let mousemoveX = 0;
	// let mouseupX = 0;
	// let dist = 0;
	// let posX = 0;

	// TweenMax.to(slider, duration, {
	// 	repeat: -1,
	// 	onRepeat: function(){

	// 		posX += mouseX - posX;
			
	// 		TweenMax.set(slider, {
	// 			x: posX, 
	// 		});

	// 	}   
	// });

	// function getDist() {
	// 	// マウスを押し込んだ場所の座標
	// 	slider.addEventListener('mousedown', e => {
	// 		mousedownX = e.pageX;
	// 		console.log(mousedownX);
	// 	});

	// 	// マウスを動かした場所の座標
	// 	slider.addEventListener('mousemove', e => {
	// 		mousemoveX = e.pageX;
	// 		console.log(mousemoveX);
	// 	});

	// 	dist = mousemoveX - mousedownX;

	// }

	// getDist();



	
	// マウスをあげた場所の座標
	// slider.addEventListener('mouseup', e => {
	// 	mouseupX = e.pageX;
	// 	// console.log(mouseupX);
	// });



	const sliderInner = document.querySelector('.slider-inner');
	const items = document.querySelectorAll('.slider-inner a ');
	let posX;
	let direction;

	drag();

	function drag() {
		sliderInner.addEventListener('mousedown', onMouseDown);
		sliderInner.addEventListener('mousemove', onMouseMove);
		sliderInner.addEventListener('mouseup', onMouseUp);
	}

	// マウスを押し込んだ時の座標を取得
	function onMouseDown(e) {
		posX = getPos(e); // タッチした位置
		direction = '';
	}

	// ドラッグの方向判定
	// 30px以上移動しないとドラッグと判断しない
	function onMouseMove(e) {
		if(posX - getPos(e) > 30) { 
			direction = 'left';
		} else if(posX - getPos(e) < -30) {
			direction = 'right';
		}
	}

	// ドラッグ結果
	function onMouseUp(e) {
		if(direction == 'right') {
			TweenMax.to(sliderInner, 0.6, {
				ease: Power4.easeInOut,
				x: "+=250px"
			});
		} else if (direction == 'left') {
			TweenMax.to(sliderInner, 0.6, {
				ease: Power4.easeInOut,
				x: "-=250px"
			});
		}
	}

	// x座標を取得
	function getPos(e) {
		return e.pageX;
	}

}