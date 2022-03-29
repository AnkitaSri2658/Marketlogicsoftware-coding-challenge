import store from "./store";
import * as todoActions from "./store/todoActions";

function addListener(eventName, selector, callback) {
  document.body.addEventListener(eventName, (e) => {
    if (e.target.matches(selector)) {
      return callback(e);
    }
  });
}

addListener("click", '[data-element="addTodoButton"]', () => {
  const todoInput = document.querySelector('[data-element="addTodoInput"]');
  store.dispatch(todoActions.add(todoInput.value));
});

addListener("keyup", '[data-element="addTodoInput"]', (e) => {
  //If enter is pressed then Add item
  if (e.keyCode === 13) {
    const todoInput = document.querySelector('[data-element="addTodoInput"]');
    store.dispatch(todoActions.add(todoInput.value));
  }
});
addListener("click", '[data-element="filterTodo"]', (e) => {
  const id = e.target.id;
  const ul = document.querySelector(".todos");
  const todos = ul.childNodes;
  todos.forEach(function (todo) {
    if (todo.nodeName === "LI") {
      switch (id) {
        case "showAll":
          todo.style.display = "list-item";
          break;

        case "showOpen":
          if (todo.classList.contains("todos__item_checked")) {
            todo.style.display = "list-item";
          } else {
            todo.style.display = "none";
          }
          break;

        case "showClosed":
          if (todo.classList.contains("todos__item_checked")) {
            todo.style.display = "none";
          } else {
            todo.style.display = "list-item";
          }
          break;
      }
    }
  });
  //todoActions.filter(id);
  //store.dispatch();
});
addListener("click", '[data-element="toggleTodo"]', (e) => {
  const id = Number(e.target.dataset.id);
  store.dispatch(todoActions.toggle(id));
});
