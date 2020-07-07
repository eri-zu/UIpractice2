'use strict';

// 目標:ボールの円運動

{
	const dots = document.querySelectorAll('.dot');
	let ww ,wh;
	let angle = 0;
	let radius;
	let x, y;

 	window.requestAnimationFrame(update);

	function update() {

		ww = window.innerWidth;
		wh = window.innerHeight;
		radius = wh * 0.4;

		dots.forEach((dot, index) => {

			const dw = dot.clientWidth / 2;
			const dh = dot.clientHeight / 2;

			const center = {
				x: ww / 2 - dw,
				y: wh / 2 - dh
			};

			angle = index * (360 / dots.length); // 0, 30, 60, ...

			x = center.x + Math.cos(radian(angle)) * radius;
			y = center.y + Math.sin(radian(angle)) * radius;

			TweenMax.set(dot, {
				x: x,
				y: y,
			});
			
		});

		angle += 2;
		
		window.requestAnimationFrame(update);
	}

	// 度からラジアンに変換
	// @val : 度
	function radian(val) {
		return val * Math.PI / 180;
	}

}