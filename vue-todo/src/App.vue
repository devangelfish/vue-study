<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:call-add-todo="addTodo"></TodoInput>
    <TodoList
      v-bind:todoItems="todoItems"
      v-on:delete-todo="deleteTodo"
      v-on:complete-todo="completeTodo"
    ></TodoList>
    <TodoFooter v-on:clear-all="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data: () => ({
    todoItems: [],
  }),
  methods: {
    created: function() {
      if (sessionStorage.length > 0) {
        for (let index = 0; index < sessionStorage.length; index++) {
          const todo = JSON.parse(
            sessionStorage.getItem(sessionStorage.key(index))
          );
          this.todoItems.push(todo);
        }
      }
    },
    addTodo(newTodoItem) {
      let obj = {
        completed: false,
        item: newTodoItem,
      };
      if (newTodoItem === "") {
        return;
      }
      sessionStorage.setItem(newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    clearAll() {
      this.todoItems = [];
      sessionStorage.clear();
    },
    deleteTodo(index) {
      this.todoItems.splice(index, 1);
      sessionStorage.removeItem(sessionStorage.key(index));
    },
    completeTodo(index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      sessionStorage.setItem(
        this.todoItems[index],
        JSON.stringify(this.todoItems[index])
      );
    },
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}
</style>
