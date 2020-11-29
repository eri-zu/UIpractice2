'use strict';

{
	const arrow = document.getElementById('arrow');
	const line = document.getElementById('line');
	const path = document.getElementById('path');

	const l = arrow.clientWidth;

	console.log(l);

	arrow.addEventListener('mouseenter', () => {
    var tl = new TimelineMax();

		tl
		.to(
			line, 
			0.5, 
			{ 
				scaleX: 1.5,
				ease: Expo.easeOut
			}
		)
		.to(
			path,
		  0.5, 
			{
				x: l * (1.5 - 1),
				ease: Expo.easeOut
			}, 
			0
		);

		return tl;
	});

	arrow.addEventListener('mouseleave', () => {
    var tl = new TimelineMax();

		tl
		.to(
			line, 
			0.5, 
			{ 
				scaleX: 1,
				ease: Expo.easeOut
			}
		)
		.to(
			path,
		  0.5, 
			{
				x: '0px',
				ease: Expo.easeOut
			}, 
			0
		);

		return tl;
	});




}