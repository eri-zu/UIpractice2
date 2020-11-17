'use strict';

// 目標:ハンバーガーメニュー

{
	const icon = document.querySelector('.menuIcon');
	const bars = document.querySelectorAll('.menuIconBar');
	const bar01 = document.getElementById('bar01');
	const bar02 = document.getElementById('bar02');
	const bar03 = document.getElementById('bar03');

	// icon.addEventListener('click', () => {
	// 	bars.forEach(bar => {
	// 		bar.classList.toggle('active');
	// 	});
	// });

	// icon.addEventListener('mouseenter', () => {
  //   bars.forEach(bar => {
			
	// 	});
	// });

	icon.addEventListener('mouseenter', () => {

		var tl = new TimelineMax();


		tl
		.staggerTo(
			bars, 
			0.5, 
			{
				startAt: {
					transformOrigin: "0 0"
				},
				scaleX: 0,
				ease: Expo.easeOut,
			},
			0.1
		);
		
		tl
		.staggerTo(
			bars, 
			0.5, 
			{
				startAt: {
					transformOrigin: "100% 0"
				},
				scaleX: 1,
				ease: Expo.easeOut,
			},
			0.1 * 3 + 0.5
		);

		return tl;


		// tl
		// .to(
		// 	bar01, 
		//   0.5, 
		// 	{
		// 		startAt: {
		// 			"transform-origin": "0 0"
		// 		},
		// 		scaleX: 0,
		// 		ease: Expo.easeOut,
				
		// 	}
		// )
		// .to(
		// 	bar02, 
		//   0.5, 
		// 	{
		// 		startAt: {
		// 			"transform-origin": "0 0"
		// 		},
		// 		scaleX: 0,
		// 		ease: Expo.easeOut,
		// 	}, 
		// 	0.1
		// )
		// .to(
		// 	bar03, 
		// 	0.5, 
		// 	{
		// 		startAt: {
		// 			"transform-origin": "0 0"
		// 		},
		// 		scaleX: 0,
		// 		ease: Expo.easeOut,
		// 	}, 
		// 	0.2
		// );






	});



}