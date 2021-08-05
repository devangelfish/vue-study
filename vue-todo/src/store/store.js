import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // 뷰 플러그인 사용

const storage = {
  fetch() {
    const arr = [];
    if (sessionStorage.length > 0) {
      for (let index = 0; index < sessionStorage.length; index++) {
        const todo = JSON.parse(
          sessionStorage.getItem(sessionStorage.key(index))
        );
        arr.push(todo);
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    addTodo(state, newTodoItem) {
      sessionStorage.setItem(newTodoItem.item, JSON.stringify(newTodoItem));
      state.todoItems.push(newTodoItem);
    },
    clearAll(state) {
      state.todoItems = [];
      sessionStorage.clear();
    },
    deleteTodo(state, index) {
      state.todoItems.splice(index, 1);
      sessionStorage.removeItem(sessionStorage.key(index));
    },
    completeTodo(state, index) {
      state.todoItems[index].completed = !state.todoItems[index].completed;
      sessionStorage.setItem(
        state.todoItems[index],
        JSON.stringify(state.todoItems[index])
      );
    },
  },
});
