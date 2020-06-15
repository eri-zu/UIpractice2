'use strict';

// 
{
	let startPosX = 0;

	document.addEventListener('mousedown', mouseDownHandler);
	document.addEventListener('mouseup', mouseUpHandler);

	function mouseDownHandler(e) {
		startPosX = e.pageX;
		console.log(startPosX);
	}
	function mouseUpHandler(e) {
		console.log(e.pageX - startPosX);
	}
	
}