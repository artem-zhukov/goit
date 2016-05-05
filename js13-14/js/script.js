'use strict;'

var testForm = {

  testBody: document.body,
  testForm: document.createElement('form'),
  testHead: document.createElement('header'),
  testName: document.createElement('h1'),
  testBtn:  document.createElement('button'),
  rCounter: 0,
  qCounter: 0,

  createTest: function(tName, btnName) {

    this.testForm.classList.add('test');
    this.testName.classList.add('test__name');
    this.testName.innerHTML = tName;
    this.testBtn.classList.add('test__submit');
    this.testBtn.setAttribute('type', 'submit');
    this.testBtn.setAttribute('id', 'checkAnswr');
    this.testBtn.innerHTML = btnName;

    this.testBody.appendChild(this.testForm);
    this.testForm.appendChild(this.testHead);
    this.testHead.appendChild(this.testName);
    this.testForm.appendChild(this.testBtn);
    this.testName.style.textAlign='center';

  //  console.log('added <h1> instanse', this.testForm);
  },


  creatTestModalWnd: function() {
    var modalDiv = document.createElement('div');
    var modalBut = document.createElement('button');
    modalBut.setAttribute('type', 'submit');
    modalDiv.classList.add('modal_form');
    modalBut.setAttribute('id', 'closeModalWin');
    modalDiv.appendChild(modalBut);

    modalDiv.setAttribute('id', 'modal_form');
    modalDiv.style.width='300px';
    modalDiv.style.height='300px';
    modalDiv.style.border = '3px #000 solid';
    modalDiv.style.display='none';
    modalDiv.style.index='5';
    modalDiv.style.position= 'absolute';
    modalDiv.style.opacity='1';
    modalDiv.style.background='#fff';
    modalDiv.style.left='45%';
    modalDiv.style.textAlign='center';

    modalBut.style.width='100px';
    modalBut.style.height='40px';
    modalBut.style.marginTop='230px';
    modalBut.innerHTML = 'Close';
    this.testBody.appendChild(modalDiv);
  },

  createTestQuestion: function(qName, answersArray) {

    var questionBody = document.createElement('figure');
    var questionHead = document.createElement('header');
    var questionName = document.createElement('h2');
    var questionAnswerRadio;
    var questionAnswerLabel;

    questionBody.classList.add('question')
    questionName.classList.add('question__title')
    questionName.innerHTML = qName;

    questionBody.appendChild(questionHead);
    questionHead.appendChild(questionName);

    if(this.qCounter%4==0){
      this.rCounter++;
    }

    this.qCounter++;

    questionBody.style.marginLeft='100px';

    for (var i = 0; i < answersArray.length; i++) {

      var labelText = document.createTextNode(answersArray[i]);
      questionAnswerLabel =  document.createElement('label');
      questionAnswerRadio =  document.createElement('input');
      questionAnswerRadio.classList.add('answer__radio');
      questionAnswerLabel.classList.add('answer__title');
      questionAnswerRadio.setAttribute('type', 'radio');

      questionAnswerRadio.setAttribute('name', 'radio'+this.rCounter);

      questionAnswerRadio.setAttribute('id', ('q-'+this.qCounter+'-answer-'+(i+1)) );

      questionBody.appendChild(questionAnswerLabel);
      questionAnswerLabel.appendChild(questionAnswerRadio);
      questionAnswerLabel.innerHTML=questionAnswerLabel.innerHTML+answersArray[i]+'<br>';
      questionAnswerLabel.style.marginLeft='20px';


    }
    this.testForm.insertBefore(questionBody, this.testBtn);
    this.testBtn.style.margin='0 575px';
    this.testBtn.style.height='50px';
    this.testBtn.style.width='250px';


  }
}
$(function() {

var html = $('#page').html();

var listQuestions = {
  question1: {
    question:'1. Вопрос №1',
    answer1: {
      answer:"Вариант ответа №1",
      check: 1
    },
    answer2: {
      answer:"Вариант ответа №2",
      check: 0
    },
    answer3: {
      answer:"Вариант ответа №3",
      check: 0
    }
  }
}

  var content = tmpl(html, listQuestions);
  $('body').append(content);

});

  //
  // },
  // question2:{
  //   question:'2. Вопрос №2',
  //   ask1:"Вариант ответа №1",
  //   ask2:"Вариант ответа №2",
  //   ask3:"Вариант ответа №3"
  // },
  // question3: {
  //   question:'3. Вопрос №3',
  //   ask1:"Вариант ответа №1",
  //   ask2:"Вариант ответа №2",
  //   ask3:"Вариант ответа №3"
  // }
//}

// var listQuestions = {
//   question1: {
//     question:'1. Вопрос №1',
//     ask1:"Вариант ответа №1",
//     ask2:"Вариант ответа №2",
//     ask3:"Вариант ответа №3"
//   },
//   question2:{
//     question:'2. Вопрос №2',
//     ask1:"Вариант ответа №1",
//     ask2:"Вариант ответа №2",
//     ask3:"Вариант ответа №3"
//   },
//   question3: {
//     question:'3. Вопрос №3',
//     ask1:"Вариант ответа №1",
//     ask2:"Вариант ответа №2",
//     ask3:"Вариант ответа №3"
//   }
// }

// testForm.createTest('Тест по программированию', 'Проверить мои результаты');
// testForm.creatTestModalWnd();
// var size = Object.keys(listQuestions).length;
// for(var i = 1; i<=size; i++){
//   var question = "question"+i;
//   testForm.createTestQuestion(listQuestions[question].question,  [] );
//     for(var y = 1; y <Object.keys(listQuestions[question]).length; y++){
//       var ask = "ask"+y;
//       testForm.createTestQuestion(" ",  [listQuestions[question][ask]] );
//     }
// }


  $('#checkAnswr').click(function(event){
    event.preventDefault();
    $('#modal_form').css('display','block').animate({opacity: 1, top: '30%'}, 400);

  });

  $('#closeModalWin').click(function(event){
    $('#modal_form').css('display','none');
    location.reload()
  });


//});
//  modalSpan: document.createElement('span'),

  // this.modalDiv.classList.add('modal_form');
  // this.testBody.appendChild(this.modalDiv);
