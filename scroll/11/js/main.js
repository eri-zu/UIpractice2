'use strict';

{
	const obj = document.querySelector('.obj');
	const wholeHeight = document.documentElement.scrollHeight;
	const windowHeight = window.innerHeight;
	const wholeArea = wholeHeight - windowHeight;
	let scrollY = 0;

	window.requestAnimationFrame(update);

	function update() {
		scrollY = window.pageYOffset;

		const ratio = scrollY / wholeArea;

		console.log(scrollY);
		console.log(wholeArea);
		console.log(ratio);

		let r = 255 * ratio;
		obj.style.backgroundColor = `rgba(${r}, 0, 0, 1)`;

		window.requestAnimationFrame(update);

	}

}