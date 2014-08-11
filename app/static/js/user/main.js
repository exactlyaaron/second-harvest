(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    animateTest();
  }

  function animateTest(){
    $('.block').tween({
       left:{
          start: 0,
          stop: 100,
          time: 0,
          duration: 1,
          units: 'px',
          effect: 'easeInOut',
          onStop: function(){
            alert( 'Done!' );
          }
       }
    });

    $.play();
  }

})();
