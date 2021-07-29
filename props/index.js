Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
})

new Vue({
  el: '#app',
  data: {
    message: 'parent propsdata'
  }
})
