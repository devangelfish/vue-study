<template>
  <div>
    <span id="cls-btn" class="shadow" v-on:click="clearAll">Clear</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll() {
      this.$emit("clear-all");
    },
  },
};
</script>

<style>
#cls-btn {
  font-size: 1.2rem;
  display: inline-block;
  padding: 3px 15px;
  border-radius: 5px;
  color: #fff;
  background-color: brown;
  cursor: pointer;
}
</style>
