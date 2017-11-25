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
  var timeId;

  function updateTimer(t) {
    var d = new Date(t);
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ms = d.getMilliseconds();

    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);
    timer.textContent = m + ':' + s + '.' + ms;
  }

  function countDown() {
    timeId = setTimeout(function() {
      timeLeft = timeToCountDown - (Date.now() - startTime);

      if (timeLeft < 0) {
        clearTimeout(timeId);
        timeLeft = 0;
        timeToCountDown = 0;
        updateTimer(timeLeft);
        return;
      }

      updateTimer(timeLeft);
      countDown();
    }, 10);
  }

  start.addEventListener('click', function() {
    startTime = Date.now();
    countDown();
  });
})();
