import Vue from 'vue';
import getData from './until'
import './style/common.scss';

const img = require('./img/test.png')
console.log(img)

Vue.component('my-component', {
    template: '<img :src="img" />',
    data() {
      return {
        img: require('./img/test.png').default,
        // url:'https://tse1-mm.cn.bing.net/th/id/OET.f647cb8ece064593a7e0378e011a1369?w=272&h=135&c=7&rs=1&o=5&pid=1.9'
      }
    }
  })
var app = new Vue({
  el: '#app',
  data: {
    msg: 'Hello Vue!'
  },
  methods:{
      async fetcbData(){
          const data = await getData()
          this.msg = data
      }
  },
  created(){
      this.fetcbData()
  }
});