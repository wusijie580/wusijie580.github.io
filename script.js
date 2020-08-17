var button = document.getElementById("create");
var input = document.getElementById("input");
var list = document.getElementById("list");

var todolist = [];

function addData () {
  if (input.value !="") {
    todolist.push(input.value);
    input.value = "";
    render();
  }
}

function delData (i) {
  todolist.splice(i, 1);
  
  render();
}

function render() {
  localStorage.setItem("listItems", JSON.stringify(todolist));
  var content = "";
  for(var i = 0; i < todolist.length; i++) {
    content = content + `<div><button class='delete' onclick='delData(${i})'>刪除</button>` + todolist[i] + "</div>";
  }
  
  list.innerHTML = content;
}