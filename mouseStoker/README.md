<h1>mouseStoker</h1>
画面遷移アニメーションの練習

<h2>1 / シンプル</h2>
<p>hoverしたところでマウスストーカーが大きくなる</p>
<p>TweenMaxで実装</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/mouseStoker/1/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/mouseStoker/1/js/main.js</p>

<h2>2 / シンプル</h2>
<p>１を少しいじってみた。hoverすると文字が出現する。</p>
<p>TweenMaxで実装</p>
<p>https://eri-tsutsui.github.io/UIpractice2/mouseStoker/2/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/mouseStoker/2/js/main.js</p>

<h2>3 / シンプル</h2>
<p>１と同じだが、TweenMaxなしで実装->（課題）easingのかけ方学ぶ必要あり</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/mouseStoker/3/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/mouseStoker/3/js/main.js</p>

<h2>4 / シンプル</h2>
<p>3にイージングをかけていい感じに追従するようにした</p>
<p>【メモ】</p>
<ol>
  <li>
    イージングのかけ方<br>
    nowX += (targetX - nowX) * ease;<br>
    nowY += (targetY - nowY) * ease;
  </li>
  <li>
    window.requestedAnimationFrame(update)<br>
    ->初め、mousemoveで実装したが、マウスを動かすのを止めるとfollwerがついてこなくなった<br>
    ->requestedAnimationFrameで毎フレーム呼び出す必要があると思われる
  </li>
</ol>  

<p>デモ：https://eri-tsutsui.github.io/UIpractice2/mouseStoker/4/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/mouseStoker/4/js/main.js</p>
