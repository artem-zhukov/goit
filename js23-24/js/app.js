requirejs.config({
paths:{
  'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery',
  'tmpl':'tmpl',
  'modelScript': 'modelScript',
  'veiwScript':'viewScript',
  'controllerScript':'controllerScript'
},
shim:{
  'tmpl':{

  },
  'jquery':{
    exports: 'jQuery'
  },
  'modelScript':{

  },
  'veiwScript':{

  },
  'controllerScript':{
    deps:[],
    exports: 'controllerScript'
  }
}
});


require(
  ['jquery','tmpl','modelScript', 'viewScript', 'controllerScript'],
  function ($,tmpl, modelScript, viewScript, controllerScript) {
    $(function () {
      var firstToDoList = ['test1', 'test2', 'test3'];
      var model = new Model(firstToDoList);
      var view = new View(model);
      var controller = new Controller(model, view);
    })
  }
);
