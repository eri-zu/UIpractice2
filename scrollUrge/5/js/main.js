'use strict';

{
  const bar1 = document.getElementById('scroll-bar_01');

  var tl = new TimelineMax();
  tl
  .to(
    bar1, 
    0.5, 
    {x: '10px'})
  .to(bar2, 0.5, {x: '10px'}, 0.5)
  .to(bar3, 0.5, {x: '10px'}, 1);


}
