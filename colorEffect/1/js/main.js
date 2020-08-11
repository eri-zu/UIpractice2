'use strict';

{

	const circle = document.querySelector('.circle');
	const color = {
		r: 0,
		g: 0,
		b: 0
	}
	window.requestAnimationFrame(update);

	function update() {
		color.r =Math.floor(Math.random() * 256);
		color.g =Math.floor(Math.random() * 256);
		color.b =Math.floor(Math.random() * 256);

		circle.style.backgroundColor = `rgba(${color.r}, ${color.g}, ${color.b})`;

		window.requestAnimationFrame(update);
	}

}