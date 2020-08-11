'use strict';

{

	// const circle = document.querySelector('.circle');
	// const color = {
	// 	r: 0,
	// 	g: 0,
	// 	b: 0
	// };

	// setInterval(update,30)

	// function update() {
	// 	color.r =Math.floor(Math.random() * 256);
	// 	color.g =Math.floor(Math.random() * 256);
	// 	color.b =Math.floor(Math.random() * 256);

	// 	circle.style.backgroundColor = `rgba(${color.r}, ${color.g}, ${color.b})`;
	// }

	// リファクタリング

	const circle = document.querySelector('.circle');
	const color = [];

	setInterval(update,30)

	function update() {

		for(let i = 0; i < 3; i ++) {
			color[i] =Math.floor(Math.random() * 256);
		}

		circle.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]})`;

	}

}