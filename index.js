$(function (){
  effectNow = 1;
  tickNow = 0;
  tickMax = 500;

  function effect(num) {
    if (num != effectNow) {
      effectNow = num;
      tickNow = 0;
      $('#effSelect > span').attr({
        'class' : ''
      });
      $('#effSelect > span:eq(' + (num-1) + ')').attr({
        'class' : 'selectedEff'
      });
      $('#effectOutput').attr({
        'class' : 'effect' + effectNow
      });
      $('#effectOutput').css('background', 'black');
    }
  }

  setInterval( function (){
    tickNow++;
    animationProgress = tickNow/tickMax;

    switch (effectNow) {
      case 1:
        if (tickNow/tickMax < 0.5) {
          $('.effect1').css('background', 'repeating-linear-gradient(45deg, #444, #444 ' + (160*animationProgress) + 'px, #888 0, #888 80px)');
        } else {
          $('.effect1').css('background', 'repeating-linear-gradient(45deg, #888, #888 ' + ((160*animationProgress)-80) + 'px, #444 0, #444 80px)');
        }
        break;
    }

    if (tickNow >= tickMax) {tickNow = 0;};
  }, 5);

  $(document).on('click','#effSelect > span',function() {
    effect($('#effSelect > span').index(this)+1);
  });

  effect(Math.floor(Math.random()*9)+1);
});
