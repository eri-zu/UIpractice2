'use strict';

// 目標:ボールの円上に配置

{
	const dots = document.querySelectorAll('.dot');

	// putDot();

	window.requestAnimationFrame(update);

	function update() {

		const ww = window.innerWidth;
		const wh = window.innerHeight;

		const radius = wh * 0.25;

		dots.forEach((dot, index) => {
			
			const center = {
				x: ww / 2 - dot.clientWidth / 2,
				y: wh / 2 - dot.clientHeight / 2,
			};

			const deg = index * 360 / dots.length;

			const x = center.x + Math.cos(radian(deg)) * radius;
			const y = center.y + Math.sin(radian(deg)) * radius;

			TweenMax.set(dot, {
				x: x,
				y: y,
			});
			
		});

		window.requestAnimationFrame(update);

	}

	// 度からラジアンに変換
	// @val : 度
	function radian(val) {
		return val * Math.PI / 180;
	}

}