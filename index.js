$(function (){
  effectNow = 0;
  tickNow = 0;
  tickMax = 500;
  indexNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  function effect(num) {
    if (num != effectNow) {
      effectNow = num;
      tickNow = 0;
      for (var i = 0; i < 10; i++) {
        indexNum[i] = 0;
      }
      $('#effSelect > span').attr({
        'class' : ''
      });
      $('#effSelect > span:eq(' + (num-1) + ')').attr({
        'class' : 'selectedEff'
      });
      $('#effectOutput').css('background', '');
      $('#effectOutput').attr({
        'class' : 'effect' + effectNow
      });
      $('#effectOutput').html(function (index,html) {
        return '';
      });
      switch (effectNow) {
        case 3:
          boxUIndexNums = [];
          boxDIndexNums = [];
          boxUyAxis = [];
          boxDyAxis = [];
          break;
      }
    }
  }

  setInterval( function (){
    tickNow++;
    animationProgress = tickNow/tickMax;
    animationSpeed = 1/tickMax;

    switch (effectNow) {
      case 1:
        if (tickNow/tickMax < 0.5) {
          $('.effect1').css('background', 'repeating-linear-gradient(45deg, #444, #444 ' + (160*animationProgress) + 'px, #888 0, #888 80px)');
        } else {
          $('.effect1').css('background', 'repeating-linear-gradient(45deg, #888, #888 ' + ((160*animationProgress)-80) + 'px, #444 0, #444 80px)');
        }
        break;
      case 2:
        $('.effect2').css('background-image', 'linear-gradient(' + animationProgress*360 + 'deg, #e0b8b8, #d8e0b8, #b8e0c8, #b8c8e0, #d8b8e0)');
        break;
      case 3:
        if (Math.random() < 0.01) {
          boxUIndexNums.push(indexNum[0]);
          boxUyAxis.push(110);
          $('<div class=eff3u>').addClass('eff3u' + Number(indexNum[0])).appendTo('#effectOutput');
          $('.eff3u' + Number(indexNum[0])).css('left', (Math.random()*100 + 'vw'));
          indexNum[0]++;
        }
        if (Math.random() < 0.01) {
          boxDIndexNums.push(indexNum[1]);
          boxDyAxis.push(110);
          $('<div class=eff3d>').addClass('eff3d' + Number(indexNum[1])).appendTo('#effectOutput');
          $('.eff3d' + Number(indexNum[1])).css('left', (Math.random()*100 + 'vw'));
          indexNum[1]++;
        }
        for (var i = 0; i < boxUIndexNums.length; i++) {
          boxUyAxis[i] -= animationSpeed*25;
          $('.eff3u' + boxUIndexNums[i]).css('bottom', (boxUyAxis[i] + 'vh'));
          $('.eff3u' + boxUIndexNums[i]).css('opacity', Math.min((boxUyAxis[i]-50)/60, 1));
          if (boxUyAxis[i] < 60) {
            $('.eff3u' + boxUIndexNums[i]).remove();
            boxUIndexNums.splice(i, 1);
            boxUyAxis.splice(i, 1);
          }
        }
        for (var i = 0; i < boxDIndexNums.length; i++) {
          boxDyAxis[i] -= animationSpeed*25;
          $('.eff3d' + boxDIndexNums[i]).css('top', (boxDyAxis[i] + 'vh'));
          $('.eff3d' + boxDIndexNums[i]).css('opacity', Math.min((boxDyAxis[i]-50)/60, 1));
          if (boxDyAxis[i] < 60) {
            $('.eff3d' + boxDIndexNums[i]).remove();
            boxDIndexNums.splice(i, 1);
            boxDyAxis.splice(i, 1);
          }
        }
        break;
    }

    if (tickNow >= tickMax) {tickNow = 0;};
  }, 5);

  $(document).on('click','#effSelect > span',function() {
    effect($('#effSelect > span').index(this)+1);
  });

  effect(Math.floor(Math.random()*3)+1);
});
