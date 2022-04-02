import todoReducer from "./todos";

const { createStore } = require("redux");
const store = createStore(todoReducer);

export default store;
