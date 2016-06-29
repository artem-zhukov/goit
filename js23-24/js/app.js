requirejs.config({
paths:{
  'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery',
  'tmpl':'tmpl',
  'Model': 'Model',
  'View':'View',
  'Controller':'Controller'
},
shim:{
  'tmpl':{

  },
  'jquery':{
    exports: 'jQuery'
  },
  'Model':{

  },
  'View':{

  },
  'Controller':{
    deps:[],
    exports: 'Controller'
  }
}
});


require(
  ['jquery','tmpl','Model', 'View', 'Controller'],
  function ($,tmpl, Model, View, Controller) {
    $(function () {
      var firstToDoList = ['test1', 'test2', 'test3'];
      var model = new Model(firstToDoList);
      var view = new View(model);
      var controller = new Controller(model, view);
    });

  }
);
