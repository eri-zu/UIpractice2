'use strict';

{

	const mv = document.getElementById('mv');
	let h;

  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    // sp（vhを使わない）
    // ロードされた時のheight
		window.addEventListener('load', () => {
      h = window.innerHeight;
			mv.style.height = `${h}px`;
		});

		//アドレスバーが引っ込んで画面の高さが変わった時、サイズを取り直す
    window.addEventListener('resize', () => {
      h = window.innerHeight;
      mv.style.height = `${h}px`;
    });

  } else {
    //pc（vhを使う）
    mv.style.height = '100vh';
  }

	const btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
    drawer.classList.toggle('active');
	});

}

{
  const btn = document.getElementById('btn');
  const drawer = document.getElementById('drawer');
  const body = document.body;
  let scrollPosition;

  //iosかどうかの判定
  //参考 https://qiita.com/mtdune/items/97abb9c0bd926d4c8a13
  const ua = window.navigator.userAgent.toLowerCase();
  const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;

  btn.addEventListener('click', () => {
    drawer.classList.toggle('is_active');

    if(drawer.classList.contains('is_active')) {
      bodyFixedOn();
    } else {
      bodyFixedOff();
    }
  });

  function bodyFixedOn() {
    if(isiOS) {
      scrollPosition = window.pageYOffset;
      body.style.top = `-${scrollPosition}px`; // fixedをかけた時にtop: 0に戻らないようにする
      body.classList.add('is_fixed');
    } else {
      body.classList.add('is_hidden');
    }
  }

  function bodyFixedOff() {
    if(isiOS) {
      body.style.removeProperty('top');
      window.scrollTo(0, scrollPosition); 
      body.classList.remove('is_fixed');
    } else {
      body.classList.remove('is_hidden');
    }
  }
}

