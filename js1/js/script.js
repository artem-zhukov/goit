checkName();

function pow(){
var querty = prompt('Введите число и степень ч/з зяпятую');
var numArray = querty.split(',');
console.log(Math.pow(numArray[0],numArray[1]));
}


function checkName(){
var nameQuerty = prompt('Введите имена ч/з зяпятую');
var controlName = prompt('Введите имя пользователя');
var nameList = nameQuerty.split(',');
var count = 0;
  for(var key in nameList){
     name = nameList[key].replace(/\s+/g, ''); //Удаление пробелов до и после имени
    if (controlName == name){
      alert(controlName +' , вы успешно вошли');
      break;
    }
    count++;
    if (count == nameList.length) {
      alert('Ошибка, совпадений имен нет');
    }
  }
}
