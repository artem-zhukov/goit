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
  console.log("Reset");
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







// var time = document.getElementById('id_1');
// time = time.innerHTML;
// var arr = time.split(':');
// var init = 0, pauseInterval=0, dateObj=0, fullTime=0,tempTime =0;
// var but= document.getElementById('id_3');
// var clocktimer;
// function pause() {
//   var countClick =1;
//   if (init==0&&countClick===1) {
//     but.style.backgroundColor='blue';
//     but.value='Pause';
//     dateObj = new Date();
//    	startTIME();
//     init=1;
//     countClick = 0;
//   } else if(init==1&&countClick===1){
//     init = 2;
//     countClick = 0;
//     but.style.backgroundColor='green';
//     but.value='Contin...';
//     startPause();
//   } else if (init ==2&&countClick===1) {
//     but.style.backgroundColor='green';
//     but.value='Start';
//     init =0;
//     countClick = 0;
//     statusPause=1;
//     pause();
//   }
// }
//
// function clearСlock(){
//     init = 2;
//     document.getElementById("id_2").innerHTML=0;
//     arr[2]= '00';
//     arr[1]= '00';
//     arr[0]= '00';
//     fullTime=-10800000;
//     document.getElementById("id_1").innerHTML=arr.join(':');
//     but.style.backgroundColor='green';
//     but.value='Start';
// }
// function startTIME() {
//   if (init == 2) return;
//  	var cdateObj = new Date();
//   fullTime = tempTime + cdateObj.getTime() - dateObj.getTime() - 10800000;
//   var date = new Date(fullTime);
//   document.getElementById("id_2").innerHTML=date.getMilliseconds();
//
//   if (arr[2] <10) {
//     arr[2] ='0'+ date.getSeconds();
//     } else{
//       arr[2] =date.getSeconds();
//     }
//    if (arr[1] <10) {
//       arr[1]='0'+ date.getMinutes();
//   }else{
//     arr[1]=date.getMinutes();
//   }
//   if(arr[0] <10){
//       arr[0]= '0'+  date.getHours();
//     } else{
//     arr[0]= date.getHours();
//     }
// document.getElementById("id_1").innerHTML=arr.join(':');
// clocktimer = setTimeout("startTIME()",1);
//
// }
//
// function startPause(){
//   if (init ==2) {
//      dateObj = new Date();
//      tempTime = fullTime +10800000;
//      pauseInterval = setTimeout("startPause()",1);
//   }
// }
