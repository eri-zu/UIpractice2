'use strict';

{
	const arrow = document.getElementById('arrow');
	const polyline = document.getElementById('polyline');

	

	arrow.addEventListener('mouseenter', () => {
    var tl = new TimelineMax();
		const offset = 66;

		tl
		.to(
			// hide
			polyline, 
			0.75, 
			{ 
				drawSVG: 0,
				ease: Expo.easeOut
			}
		)
		.to(
			//show
			polyline, 
			0.75, 
			{
				startAt: {
          "stroke-dashoffset": -parseFloat(offset)
        },
				drawSVG: "100%",
				ease: Expo.easeOut
			}
		);

		return tl;


	});

	

	// arrow.addEventListener('mouseleave', () => {
  //   var tl = new TimelineMax();

	// 	tl
	// 	.to(
	// 		line, 
	// 		0.5, 
	// 		{ 
	// 			scaleX: 1,
	// 			ease: Expo.easeOut
	// 		}
	// 	)
	// 	.to(
	// 		path,
	// 	  0.5, 
	// 		{
	// 			x: '0px',
	// 			ease: Expo.easeOut
	// 		}, 
	// 		0
	// 	);

	// 	return tl;
	// });




}