var testForm = {

  testBody: document.body,
  testForm: document.createElement('form'),
  testHead: document.createElement('header'),
  testName: document.createElement('h1'),
  testBtn:  document.createElement('button'),

  qCounter: 0,

  createTest: function(tName, btnName) {

    this.testForm.classList.add('test');
    this.testName.classList.add('test__name');
    this.testName.innerHTML = tName;
    this.testBtn.classList.add('test__submit');
    this.testBtn.setAttribute('type', 'submit');
    this.testBtn.innerHTML = btnName;

    this.testBody.appendChild(this.testForm);
    this.testForm.appendChild(this.testHead);
    this.testHead.appendChild(this.testName);
    this.testForm.appendChild(this.testBtn);
    this.testName.style.textAlign='center';

    console.log('added <h1> instanse', this.testForm);
  },

  createTestQuestion: function(qName, answersArray) {

    var questionBody = document.createElement('figure');
    var questionHead = document.createElement('header');
    var questionName = document.createElement('h2');
    var questionAnswerCheckbox;
    var questionAnswerLabel;
    questionBody.classList.add('question')
    questionName.classList.add('question__title')
    questionName.innerHTML = qName;

    questionBody.appendChild(questionHead);
    questionHead.appendChild(questionName);

    this.qCounter++;

    questionBody.style.marginLeft='100px';

    for (var i = 0; i < answersArray.length; i++) {

      var labelText = document.createTextNode(answersArray[i]);
      questionAnswerLabel =  document.createElement('label');
      questionAnswerCheckbox =  document.createElement('input');
      questionAnswerCheckbox.classList.add('answer__checkbox');
      questionAnswerLabel.classList.add('answer__title');
      questionAnswerCheckbox.setAttribute('type', 'checkbox');
      questionAnswerCheckbox.setAttribute('id', ('q-'+this.qCounter+'-answer-'+(i+1)) );

      questionBody.appendChild(questionAnswerLabel);
      questionAnswerLabel.appendChild(questionAnswerCheckbox);
      questionAnswerLabel.innerHTML=questionAnswerLabel.innerHTML+answersArray[i]+'<br>';
      questionAnswerLabel.style.marginLeft='20px';


    }
    this.testForm.insertBefore(questionBody, this.testBtn);
    this.testBtn.style.margin='0 575px';
    this.testBtn.style.height='50px';
    this.testBtn.style.width='250px';
  }
}


testForm.createTest('Тест по программированию', 'Проверить мои результаты');

testForm.createTestQuestion('1. Вопрос №1',  ['Вариант ответа №1',
                                              'Вариант ответа №2',
                                              'Вариант ответа №3'] );

testForm.createTestQuestion('2. Вопрос №2',  ['Вариант ответа №1',
                                              'Вариант ответа №2',
                                              'Вариант ответа №3'] );

testForm.createTestQuestion('3. Вопрос №3',  ['Вариант ответа №1',
                                              'Вариант ответа №2',
                                              'Вариант ответа №3'] );
