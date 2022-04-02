import "./main.css";
import render from "./render";
import "./registerEventListeners";
import store from "./store/index.js";
const rootElement = document.getElementById("demo");

store.subscribe(() => render(rootElement, store.getState()));
render(rootElement, store.getState());
