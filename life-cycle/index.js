new Vue({
  el: '#app',
  data: {
    message: 'testing vue life cycle...'
  },
  beforeCreate: function() { console.log('beforeCreate: first step') },
  // 인스턴스 생성 후 첫 번째 라이프 사이클 data, methods, dom 접근 불가능
  created: function() { console.log('created: init data, methods, cannot access template') },
  // data, methods 프로퍼티 접근 가능, 인스턴스가 el에 부착전이라, template 프로퍼티는 접근 불가능
  beforeMount: function() { console.log('before mount') },
  mounted: function() {
    console.log('mounted')
    this.message = 'update vue instance data'
  },
  // 지정한 el에 화면 요소가 부착되고 난 후 호출, template제어 로직을 수행하기 좋은 단계
  beforeUpdate: function() { console.log('beforeUpdate') },
  // 데이터 변경으로 update 되기전 호출
  updated: function() { console.log('updated: watch out infinity loop') },
  // 데이터 값 갱신 로직은 beforeUpdate 에서, 무한루프에 빠질 수 있음... computed, watch 속성 사용
  beforeDestroy: function() { console.log('beforeDestroy') },
  // 인스턴스 삭제 전, 인스턴스 데이터를 삭제하기 좋은 시점
  destroyed: function() { console.log('destroyed') }
  // 뷰 인스턴스 파괴.. 뷰 인스턴스에서 정의한 모든 속성 제거
})
