function Human() {
  this.name = 'Anton';
  this.age = 25;
  this.sex ='m';
  this.height = 180;
  this.weight = 80
}

function Worker(){
    this.work = function(placeWork,salary){
    this.placeWork = placeWork;
    this.salary = salary;
  }
}

function Student(){
      this.watchSerials = function(placeStudy, scholarship){
      this.placeStudy = placeStudy;
      this.scholarship = scholarship;
    }
}

Worker.prototype =new Human();
Student.prototype = new Human();

var mainHuman = new Human();
var frstWorker = new Worker();
var scdWorker = new Worker();
var frstStudent = new Student();
var scdStudent = new Student();

frstWorker.work('Office', '1000$');
scdWorker.work("Factory", '2000$');
frstStudent.watchSerials('University','100$');
scdStudent.watchSerials('College', '80$');
console.log(frstWorker.name);
console.log(scdWorker.age);
console.log(frstStudent.height);
console.log(scdStudent.weight);
