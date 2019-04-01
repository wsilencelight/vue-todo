//import和export是ES6标准
import Vue from 'vue'
import app from './app.vue'
import './assets/styles/global.styl'

const root = document.createElement('div')

document.body.appendChild(root)

new Vue({
    render: (h) => h(app)
}).$mount(root)
