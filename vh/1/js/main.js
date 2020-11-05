'use strict';

{

	const mv = document.getElementById('mv')
	const drawer = document.getElementById('drawer');
	let h;

  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    // sp（vhを使わない）
    // ロードされた時のheight
		window.addEventListener('load', () => {
      h = window.innerHeight;
			mv.style.height = `${h}px`;
			drawer.style.height = `${h}px`;
		});

		//アドレスバーが引っ込んで画面の高さが変わった時、サイズを取り直す
    window.addEventListener('resize', () => {
      h = window.innerHeight;
      mv.style.height = `${h}px`;
      drawer.style.height = `${h}px`;
    });

  } else {
    //pc（vhを使う）
    mv.style.height = '100vh';
    drawer.style.height = '100vh';
  }

	const btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
    drawer.classList.toggle('active');
	});

}