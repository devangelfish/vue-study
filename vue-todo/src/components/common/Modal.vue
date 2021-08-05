<template>
  <div id="modal" class="shadow">
    <slot name="title">
      default title
    </slot>
    <slot name="message">
      default message
    </slot>
    <div id="btn" @click="callHandler">
      <slot name="btn-name">
        default name
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    callHandler() {
      this.$emit("closemodal");
    },
  },
};
</script>

<style scoped>
#modal {
  position: fixed;
  right: 50%;
  top: 300px;
  z-index: 2;
  width: 450px;
  margin-right: -225px;
  background-color: #fff;
}
#btn {
  display: inline-block;
  margin: 10px auto;
  border-radius: 5px;
  padding: 10px 30px;
  background-color: #2f3b52;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
}
</style>
