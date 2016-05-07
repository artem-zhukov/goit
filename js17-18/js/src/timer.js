var time = document.getElementById('id_1');
var milli = document.getElementById('id_2');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('clear');
var watch = new Stopwatch(time, milli);

function start() {
  watch.start();
  toggleBtn.style.backgroundColor='blue';
  toggleBtn.textContent='Contin...';
}

function pause() {
  watch.pause();
  toggleBtn.style.backgroundColor='green';
  toggleBtn.textContent = 'Start';
}

toggleBtn.addEventListener('click', function() {
  (watch.isOn) ? pause() : start();
});

resetBtn.addEventListener('click', function() {
  pause();
  watch.reset();
});

function Stopwatch(elem, milli) {
  var time = 0;
  var interval;
  var offset;

  function update() {
    if (this.isOn) {
      var timePassed = delta();
      time += timePassed;
    }
    timeFormatter(time, milli);
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(time, milli) {
    var time = new Date(time);
    var hours = time.getHours().toString()-2;//Поправка на часовой пояс
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (hours ==0) {
      hours = '00';
    }

    if (hours.length < 2) {
      hours = '0' + hours;
    }

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    elem.textContent = hours + ':' + minutes + ':' + seconds;;
    milli.textContent = milliseconds;
  }

  this.isOn = false;

  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.pause = function() {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = function() {
    time = 0;
    update();
  };
}
