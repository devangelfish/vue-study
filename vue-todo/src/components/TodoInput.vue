<template>
  <div class="inputBox shadow" v-on:keyup.enter="callAddTodo">
    <Modal v-if="isActive">
      <h3 slot="title">
        경고
      </h3>
      <p slot="message">
        내용이 없습니다.
      </p>
    </Modal>
    <input type="text" v-model="newTodoItem" />
    <span class="add" v-on:click="callAddTodo">
      <font-awesome-icon icon="check" id="add-btn"></font-awesome-icon>
    </span>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data: () => ({
    newTodoItem: "",
    isActive: false,
  }),
  methods: {
    callAddTodo() {
      if (this.checkEmpty(this.newTodoItem)) {
        return;
      }
      this.$store.commit("addTodo", {
        completed: false,
        item: this.newTodoItem,
      });
      this.clearInput();
    },
    checkEmpty(item) {
      if (item === "") {
        this.toggleModal();
        return true;
      }
      return false;
    },
    toggleModal() {
      this.isActive = !this.isActive;
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input {
  width: calc(100% - 41px);
  float: left;
  border: 0;
  outline: 0;
  padding: 13px;
  box-sizing: border-box;
}
.add {
  background-color: #2f3b52;
  color: #dddddd;
  width: 41px;
  height: 41px;
  float: left;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -20.5px;
  cursor: pointer;
}
#add-btn {
  position: absolute;
  font-size: 32px;
  right: 50%;
  top: 50%;
  margin-top: -16px;
  margin-right: -16px;
}
.inputBox {
  position: relative;
}
.inputBox::after {
  content: "";
  display: block;
  clear: both;
}
</style>
