'use strict';
{

	const btn = document.getElementById('conversionBtnFixed');
	let scrollArea;
	let scrollY = 0;

	window.addEventListener('scroll', fadeIn);

	function fadeIn () {
		scrollArea = window;
		scrollY = scrollArea.pageYOffset;
		//pageYOffsetで垂直方向のスクロール量を返す

		if(scrollY > 800) {
			btn.classList.add('active');
		}

	}

}