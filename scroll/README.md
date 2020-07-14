<h1>scroll</h1>
スクロールして発火する様々なイベントを実装

<h2>1 / ボタンのフェードインver1</h2>
<p>800pcスクロールして、コンバージョンボタンのフェードイン</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/scroll/1/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/scroll/1/js/main.js</p>

<h2>2 / ボタンのフェードインver2</h2>
<p>基本的に1と同じだが、スクロールエリアがwindowではなく、指定した要素内の場合</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/scroll/2/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/scroll/2/js/main.js</p>

<h2>3 / ボタンのフェードインver3</h2>
<p>基本的に2と同じだが、スクロール量を絶対値（800px）ではなく、section04がスクロールエリア内に入ってきた時にボタンをフェードインさせる</p>
<p>※スクロール量を数値で指定しない練習</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/scroll/3/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/scroll/3/js/main.js</p>

<h2>4 / ボタンのフェードインver4</h2>
<p>基本的に3と同じだが、スクロールエリア内にsection04の具体的なポイントが入ってきた時にボタンをフェードインさせる</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/scroll/4/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/scroll/4/js/main.js</p>

<h2>5 / スムーススクロールver1</h2>
<p>スムーススクロールでページ内リンク（ヘッダーは固定でない）</p>
<p>TweenMax利用</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/scroll/5/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/scroll/5/js/main.js</p>

<h2>6 / スムーススクロールver2</h2>
<p>2と5のコンビネーション。特定エリア内でのスムーススクロールしてページ内リンク</p>
<p>TweenMax利用</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/scroll/6/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/scroll/6/js/main.js</p>

<h2>7 /　スムーススクロールver3</h2>
<p>6とほぼ同じだが、念のため特定エリア外も領域を作成してバグをチェックした</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/scroll/7/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/scroll/7/js/main.js</p>

<h2>8 /　ヘッダーのカラー変更</h2>
<p>section03内にいる時のみ、ヘッダーカラーを変更する（特定エリアの検知が目標）</p>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/scroll/8/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/scroll/8/js/main.js</p>

<h2>9 /　スクロールインジゲーター</h2>
<p>最後までスクロールすると、インジゲーターが100%になる</p>
<p>【メモ】</p>
<ul>
  <li>ページ全体（window.innerHeight - document.documentElement.scrollHeight）に対して、それくらいスクロール（window.pageYOffset;）したか割合をとる</li>
  <li>その割合をインジゲーターのwidthにする</li>
</ul>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/scroll/9/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/scroll/9/js/main.js</p>

<h2>10 /　編集中</h2>
<p>インジゲーターが壊れているので調査中</p>

<h2>11 /　スクロール量に応じて背景色が変化</h2>
<p>背景色が黒から赤へ変化</p>
<p>【メモ】</p>
<ul>
  <li>document.documentElement.scrollHeight;でページ全体の高さを取得可能（oerflow: hiddenで隠れている部分の高さも含む）</li>
</ul>
<p>デモ：https://eri-tsutsui.github.io/UIpractice2/scroll/11/</p>
<p>JSコード：https://github.com/eri-tsutsui/UIpractice2/blob/master/scroll/11/js/main.js</p>

