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

	// ----------------------------------------
	// 範囲変換
	// @val     : 変換したい値
	// @toMin   : 変換後の最小値
	// @toMax   : 変換後の最大値
	// @fromMin : 変換前の最小値
	// @fromMax : 変換前の最大値
	// ----------------------------------------
	function map(val, toMin, toMax, fromMin, fromMax) {
	if(val <= fromMin) {
		return toMin;
	}
	if(val >= fromMax) {
		return toMax;
	}
	p = (toMax - toMin) / (fromMax - fromMin);
	return ((val - fromMin) * p) + toMin;
	}



}