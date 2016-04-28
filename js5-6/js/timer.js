var time = document.getElementById('id_1');
time = time.innerHTML;
var arr = time.split(':');
var init = 0, pauseInterval=0, dateObj=0, fullTime=0,tempTime =0;
var but= document.getElementById('id_3');
var clocktimer;
function pause() {
  var countClick =1;
  if (init==0&&countClick===1) {
    but.style.backgroundColor='blue';
    but.value='Pause';
    dateObj = new Date();
   	startTIME();
    init=1;
    countClick = 0;
  } else if(init==1&&countClick===1){
    init = 2;
    countClick = 0;
    but.style.backgroundColor='green';
    but.value='Contin...';
    startPause();
  } else if (init ==2&&countClick===1) {
    but.style.backgroundColor='green';
    but.value='Start';
    init =0;
    countClick = 0;
    statusPause=1;
    pause();
  }
}

function clearСlock(){
    init = 2;
    document.getElementById("id_2").innerHTML=0;
    arr[2]= '00';
    arr[1]= '00';
    arr[0]= '00';
    fullTime=-10800000;
    document.getElementById("id_1").innerHTML=arr.join(':');
    but.style.backgroundColor='green';
    but.value='Start';
}
function startTIME() {
  if (init == 2) return;
 	var cdateObj = new Date();
  fullTime = tempTime + cdateObj.getTime() - dateObj.getTime() - 10800000;
  var date = new Date(fullTime);
  document.getElementById("id_2").innerHTML=date.getMilliseconds();

  if (arr[2] <10) {
    arr[2] ='0'+ date.getSeconds();
    } else{
      arr[2] =date.getSeconds();
    }
   if (arr[1] <10) {
      arr[1]='0'+ date.getMinutes();
  }else{
    arr[1]=date.getMinutes();
  }
  if(arr[0] <10){
      arr[0]= '0'+  date.getHours();
    } else{
    arr[0]= date.getHours();
    }
document.getElementById("id_1").innerHTML=arr.join(':');
clocktimer = setTimeout("startTIME()",1);

}

function startPause(){
  if (init ==2) {
     dateObj = new Date();
     tempTime = fullTime +10800000;
     pauseInterval = setTimeout("startPause()",1);
  }
}
