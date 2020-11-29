'use strict';

{
  var btn = document.querySelector('.js-menu-btn');

  btn.addEventListener('mouseenter', function () {

      //  下に落ちていく
      TweenMax.to('.js-menu-btn__circle--bottom', 0.5, {
          y: 15,
          opacity: 0,
          ease: Expo.easeOut
      });

      // 上からバウンスで入ってくる
      TweenMax.set('.js-menu-btn__circle--top', {
          opacity: 1
      });

      TweenMax.fromTo('.js-menu-btn__circle--top', 0.75, {
          y: -60
      }, {
          y: 0,
          ease: Bounce.easeOut
      });

  });

  btn.addEventListener('mouseleave', function () {
      TweenMax.to('.js-menu-btn__circle--top', 0.5, {
          y: 15,
          opacity: 0,
          ease: Expo.easeOut
      });

      TweenMax.set('.js-menu-btn__circle--bottom', {
          opacity: 1
      });

      TweenMax.fromTo('.js-menu-btn__circle--bottom', 0.75, {
          y: -60
      }, {
          y: 0,
          ease: Bounce.easeOut
      });

  });


}