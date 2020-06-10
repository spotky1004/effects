$(function (){
  effectNow = 1;
  tickNow = 0;
  tickMax = 1000;

  function effect(num) {
    effectNow = num;
    tickNow = 0;
  }

  setInterval( function (){
    tickNow++;
    animationProgress = tickNow/tickMax;

    if (tickNow/tickMax < 0.5) {
      $('.effect1').css('background', 'repeating-linear-gradient(45deg, #444, #444 ' + (160*animationProgress) + 'px, #888 0, #888 80px)');
    } else {
      $('.effect1').css('background', 'repeating-linear-gradient(45deg, #888, #888 ' + ((160*animationProgress)-80) + 'px, #444 0, #444 80px)');
      console.log((80-(tickNow*1.6/(tickMax/100))))
    }

    if (tickNow >= tickMax) {tickNow = 0;};
  }, 1e143);

  effect(Math.floor(Math.random()*9)+1);
});
