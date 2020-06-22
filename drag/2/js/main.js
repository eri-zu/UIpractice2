'use strict';

// 目標：ドラッグ量を取得

{
	const amount = document.querySelector('.amount');
	const sliderInner = document.querySelector('.slider-inner');
	let isDrag = false;
	let startPosX = 0;
	let currentPosX = 0;
	let dist = 0;

	document.addEventListener('mousedown', mouseDownHandler);
	document.addEventListener('mousemove', mouseMoveHandler);
	document.addEventListener('mouseup', mouseUpHandler);

	function mouseDownHandler (e) {
		isDrag = true;
		startPosX = e.pageX;
		sliderInner.classList.add('active');
	}

	function mouseMoveHandler (e) {
		currentPosX = e.pageX;
		if(isDrag) {
			amount.innerHTML = currentPosX - startPosX;
			dist = currentPosX - startPosX;

			TweenMax.to(sliderInner, 0.1, {
				// ease: Power4.easeInOut,
				x: dist
			});
			
		} 
	}

	function mouseUpHandler (e) {
		isDrag = false;
		sliderInner.classList.remove('active');
		
	}
	

}