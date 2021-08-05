<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.$store.state.todoItems"
        v-bind:key="todoItem.item"
      >
        <span class="icon-wrapper left" v-on:click="callCompleteTodo(index)">
          <font-awesome-icon
            icon="check"
            class="icon"
            v-bind:class="{ completed: todoItem.completed }"
          ></font-awesome-icon>
        </span>
        <span v-bind:class="{ deleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>
        <span class="icon-wrapper right" v-on:click="callDeleteTodo(index)">
          <font-awesome-icon class="icon" icon="times"></font-awesome-icon>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    callDeleteTodo(index) {
      this.$store.commit("deleteTodo", index);
    },
    callCompleteTodo(todoItem) {
      this.$store.commit("completeTodo", todoItem);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 1px 5px;
}
li {
  background-color: #fff;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  position: relative;
}
.icon-wrapper {
  cursor: pointer;
  position: absolute;
  padding: 0 9px;
  margin-top: -10px;
  width: 20px;
  height: 20px;
  top: 50%;
  color: #2f3b52;
}
.right {
  right: 0;
}
.left {
  left: 0;
}
.deleted {
  text-decoration: line-through;
  color: #cccccc;
}
.completed {
  color: #cccccc;
}
.icon {
  font-size: 20px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
