$(function() {

  var html = $('#page').html();
  // var data = {
  //   name: 'Жуков Артем Игоревич',
  //   about:'Снова студент',
  //   cause:'Хочу учить фронтенд, потому что:'
  // };
  var cause = [
    {item:'Познакомиться с интересными людьми'},
    {item:'Посмотреть мир'},
    {item:'Фронтенд это интересно!!!'}
  ];


  var content = tmpl(html, cause);
  $('body').append(content);


});
