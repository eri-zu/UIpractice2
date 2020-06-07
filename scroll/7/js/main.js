'use strict';

// 目標:各セクションにスムーススクロール

{
	const btns = document.querySelectorAll('.nav-item');
	const wrapper = document.getElementById('wrapper');
	const offsetTopWrapper = wrapper.getBoundingClientRect().top;
	const scrollArea = document.getElementById('wrapper');
	const duration = 1;
	
	btns.forEach(btn => {
		btn.addEventListener('click', e => {

			e.preventDefault();

			const clickedItem = e.target;
			const targetHref = clickedItem.getAttribute('href');
			const destination = document.querySelector(targetHref);
			const offsetTop = destination.getBoundingClientRect().top + scrollArea.scrollTop - offsetTopWrapper;


            // destination.getBoundingClientRect().top -> ブラウザ左上（0, 0）からの相対距離 ->スクロールすると値が変わるので注意
			// scrollArea.scrollTop -> スクロール量 
			// offsetTopWrapper ->scrollAreaのトップからの絶対距離

			console.log(offsetTop);
			console.log(destination.getBoundingClientRect().top);
			console.log(scrollArea.scrollTop);
			console.log(offsetTopWrapper);

			TweenMax.to(wrapper, duration, {
				scrollTop: offsetTop,
				ease: CustomEase.create("custom", "M0,0,C0.25,0,0.294,0.023,0.335,0.05,0.428,0.11,0.466,0.292,0.498,0.502,0.532,0.73,0.524,0.843,0.574,0.896,0.664,0.992,0.698,1,1,1"),
			});
			
		})
	});
	

}