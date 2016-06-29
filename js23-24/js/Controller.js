function Controller(model, view) {
  var self = this;
  view.elements.addBtn.on('click', addItem);
  view.elements.listContainer.on('click','.item-delete', removeItem);
  view.elements.listContainer.on('click','.item-edit', editItem);

  function addItem() {
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
  }

  function removeItem() {
    var item = $(this).attr('data-value');
    model.remove(item);
    view.renderList(model.data);
  }

  function editItem() {
    var item = $(this).attr('data-value');
    var idItem = document.getElementById(item);
    idItem.setAttribute('contenteditable', 'true');
    idItem.onblur = function () {
    idItem.setAttribute('contenteditable', 'false');
    model.data.splice(item, 1, document.getElementById("list-wrapper").getElementsByTagName("li")[item].textContent);
    }
  }
}
