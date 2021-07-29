var myLocalComponent = {
  template: '<div>지역 컴포넌트</div>'
}

Vue.component('my-global-component', {
  template: '<div>전역 컴포넌트</div>'
})

new Vue({
  el: '#app',
  components: {
    myLocalComponent
  }
})

new Vue({
  el: '#app2'
})
