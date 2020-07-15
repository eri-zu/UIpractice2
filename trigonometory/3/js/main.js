'use strict';

// 目標:ボールの遠近感のある運動

{
	const dot = document.getElementById('dot');
	let deg = 0;

	window.requestAnimationFrame(update);

	function update() {

		const ww = window.innerWidth;
		const wh = window.innerHeight;
		const radius = wh * 0.5;

		const center = {
			x: ww / 2 - dot.clientWidth / 2,
			y: wh / 2 - dot.clientHeight / 2
		};

		const x = center.x + Math.cos(radian(deg)) * radius;
		const y = center.y;
		const z = Math.sin(radian(deg)) * radius;

		TweenMax.set(dot, {
			x: x,
			y: y,
			z: z
		});

		deg += 2;

		window.requestAnimationFrame(update);

	}

	// 度からラジアンに変換
	// @val : 度
	function radian(val) {
		return val * Math.PI / 180;
	}

}