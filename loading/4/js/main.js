'use strict';

// 目標:animationを使わずにTweenMaxでローティング　
{
	const bars = document.querySelectorAll('.loading-icon');
	const duration = 1.5;
	
	TweenMax.staggerTo(bars, 1.5, {
		height: '40px',
		opacity: 0.6,
		ease:Linear.easeNone,
		repeat: -1, // -1は無限リピート
	}, 0.2);

}