'use strict';

// 目標:animationを使わずにTweenMaxでローティング　
{
	const icon = document.querySelector('.loading-icon');
	const duration = 1.5;
	
	TweenMax.to(icon, duration, {
		ease: Linear.easeNone,
		repeat: -1,
		rotation: '360deg'
	});

}