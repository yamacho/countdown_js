(function() {
  'use strict';

  var timer = document.getElementById('timer');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var reset = document.getElementById('reset');
  var start = document.getElementById('start');

  var startTime;
  var timeLeft;
  var timeToCountDown = 4 * 1000;

  function countDown() {
    setTimeout(function() {
      timeLeft = timeToCountDown - (Date.now() - startTime);
      console.log(timeLeft);
      countDown();
    }, 10);
  }

  start.addEventListener('click', function() {
    startTime = Date.now();
    countDown();
  });
})();
