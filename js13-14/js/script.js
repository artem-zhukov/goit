'use strict;'

var listQuestions, modalMsg;

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

    this.testBody.appendChild(this.testForm);
    this.testForm.appendChild(this.testHead);
    this.testHead.appendChild(this.testName);
    this.testForm.appendChild(this.testBtn);
    this.testName.style.textAlign='center';

    this.testBtn.classList.add('test__submit');
    this.testBtn.setAttribute('type', 'submit');
    this.testBtn.setAttribute('id', 'checkAnswr');
    this.testBtn.style.position = 'relative';
    this.testBtn.style.top = '400px';
    this.testBtn.innerHTML = btnName;
  },

  //Модальное окно
  creatTestModalWnd: function() {
    var modalWrapper = document.createElement('div');
    var modalMsgWrap = document.createElement('div');
    modalMsg = document.createElement('span');
    var modalBut = document.createElement('button');
    modalBut.setAttribute('type', 'submit');
    modalWrapper.classList.add('modal_form');
    modalBut.setAttribute('id', 'closeModalWin');
    modalMsgWrap.appendChild(modalMsg);
    modalWrapper.appendChild(modalMsgWrap);
    modalWrapper.appendChild(modalBut);

    modalWrapper.setAttribute('id', 'modal_form');
    modalWrapper.style.width='300px';
    modalWrapper.style.height='150px';
    modalWrapper.style.border = '3px #000 solid';
    modalWrapper.style.display='none';
    modalWrapper.style.index='5';
    modalWrapper.style.position= 'absolute';
    modalWrapper.style.opacity='1';
    modalWrapper.style.background='#fff';
    modalWrapper.style.left='45%';
    modalWrapper.style.textAlign='center';

    modalMsgWrap.style.marginTop = '50px';

    modalBut.style.width='100px';
    modalBut.style.height='40px';
    modalBut.style.marginTop='35px';
    modalBut.innerHTML = 'Close';
    this.testBody.appendChild(modalWrapper);
  }
}

$(function() {
var html = $('#page').html();

listQuestions = [
    {
    question:'1. Вопрос №1',
    answers : ["Вариант ответа №1",
              "Вариант ответа №2",
               "Вариант ответа №3"],
    correctAnswer: [1,0,0]
    },
  {
    question:'2. Вопрос №2',
    answers : ["Вариант ответа №1",
              "Вариант ответа №2",
              "Вариант ответа №3"],
              correctAnswer: [0,1,0]
            },
  {
  question:'3. Вопрос №3',
  answers : ["Вариант ответа №1",
            "Вариант ответа №2",
             "Вариант ответа №3"],
  correctAnswer: [0,0,1]
  }
]
  var content = tmpl(html, {listQuestions:listQuestions});
  $('body').append(content);
});


testForm.createTest('Тест по программированию', 'Проверить мои результаты');

testForm.creatTestModalWnd();

  //Проверка результата
  $('#checkAnswr').click(function(event){
    event.preventDefault();
    $('#modal_form').css('display','block').animate({opacity: 1, top: '30%'}, 400);
    $ (function () {
    var result = 0;
    for (var i =0; i<listQuestions.length; i++){
    var inp = document.getElementsByName('rb'+i);
    for (var y = 0; y < inp.length; y++) {
        if (inp[y].type == "radio" && inp[y].checked) {
            result += Number(inp[y].value);
          }
        }
      }
      if (inp.length == result) {
        modalMsg.innerHTML = 'Тест сдан!';
      }else {
        modalMsg.innerHTML = 'Тест не сдан!';
      }
    }
  );
});

//Закрыть модальное окно
  $('#closeModalWin').click(function(event){
    $('#modal_form').css('display','none');
    location.reload()
  });
