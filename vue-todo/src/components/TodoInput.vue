<template>
  <div class="inputBox shadow" @keyup.enter="addTodo(newTodoItem)">
    <Modal v-if="showModal" @closemodal="closeModal">
      <h3 slot="title">
        경고
      </h3>
      <p slot="message">
        내용이 없습니다.
      </p>
      <span slot="btn-name">
        확인
      </span>
    </Modal>
    <input type="text" :value="newTodoItem" @input="updateInput" />
    <span class="add" @click="addTodo(newTodoItem)">
      <font-awesome-icon icon="check" id="add-btn"></font-awesome-icon>
    </span>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["showModal"]),
    ...mapGetters(["newTodoItem"]),
  },
  methods: {
    ...mapMutations(["addTodo", "updateInput", "closeModal"]),
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
