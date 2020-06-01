'use strict';
{

	const btn = document.getElementById('conversionBtnFixed');
	const wrapper = document.getElementById('wrapper');
	let scrollArea;
	let scrollY;

	//プロパティはwindowじゃないので注意
	wrapper.addEventListener('scroll', fadeIn);

	function fadeIn () {

		scrollArea = wrapper;
		scrollY = scrollArea.scrollTop;
		// プロパティがwindowじゃない場合は、scrollTopとすること
		// pageYOffsetやscrollYはだめ

		console.log(scrollY);

		if(scrollY > 800) {
			btn.classList.add('active');
		} else {
			btn.classList.remove('active');
		}

	}

}