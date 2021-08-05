<template>
  <div>
    <span id="cls-btn" class="shadow" v-on:click="callClearAll">Clear</span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      callClearAll: "clearAll",
    }),
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
