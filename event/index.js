Vue.component('child-component', {
  template: '<button v-on:click="callParent">show</button>',
  methods: {
    callParent: function() {
      this.$emit('call-parent')
    }
  }
})

new Vue({
  el: '#app',
  data: {
    message: 'parent propsdata'
  },
  methods: {
    parentMethod: function() {
      alert('parentEventMethod called...')
    }
  }
})
