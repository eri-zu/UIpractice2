'use strict';

// 目標:ボールの円運動

{
	const dot = document.getElementById('dot');
	const dw = dot.clientWidth / 2;
	const dh = dot.clientHeight / 2; 
	let deg = 0;
	let wh;
	let ww;
	let radius; // 描く円の半径
	let x;
	let y;

	window.requestAnimationFrame(update);

	function update() {

		ww = window.innerWidth;
		wh = window.innerHeight;

		console.log(ww);

		const center = {
			x: ww / 2 - dw,
			y: wh / 2 - dh
		};

		radius = wh / 2 - 10 - dh;

		x = center.x + Math.cos(radian(deg)) * radius;
		y = center.y + Math.sin(radian(deg)) * radius;

		TweenMax.set(dot, {
			x: x,
			y: y
		});

		deg += 1.5;
		
		window.requestAnimationFrame(update);

	}


	// 度からラジアンに変換
	// @val : 度
	function radian(val) {
		return val * Math.PI / 180;
	}

}