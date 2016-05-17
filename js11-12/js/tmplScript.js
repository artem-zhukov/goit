$(function() {

  var html = $('#page').html();
  var data = {
    name: 'Жуков Артем Игоревич',
    photo: 'img/photo.jpeg',
    about:'Снова студент',
    mainCause:'Хочу учить фронтенд, потому что:',
    causes : [
    {item:'Познакомиться с интересными людьми'},
    {item:'Посмотреть мир'},
    {item:'Фронтенд это интересно!!!'}],
    contacts : [
      {item:'Мой контактный телефон'},
      {item:'+380957414258'},
      {item:'Мой профиль в контакте'},
      {item:'http://goo.gl/rjrFhx'}],
    motto :[
      {item:'Мой фидбек:'},
      {item: 'Не ленитесь! Да прибудет с Вами сила'}]
}

  var content = tmpl(html, {data:data});
  $('body').append(content);

});
