import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'
import VueResource from 'vue-resource'

// axios.defaults.headers.common['token']='1231231231231223'
// axios.defaults.headers.post['Content-type']='application/json'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.prototype.$axios = axios
Vue.use(VueResource)

//自定义指令
Vue.directive('hiqilai',{
    bind(el,binding,vnode){
        var coler = '#'+Math.random().toString(16).slice(2,8);
        el.style.color = coler;
        console.log(coler)
    }
})

Vue.directive('kuandu',{
    bind(el,binding,vnode){
        if(binding.value == 'henkuan'){
            el.style.maxWidth='1260px'
        }

        if(binding.arg == 'colomn'){
            el.style.background='#6677cc'
            el.style.padding='20px'
        }
    }
})

//自定义过滤器
// Vue.filter('to-uppercase',function(value){
//     return value.toUpperCase();
// })

const router = new VueRouter({
    routes,
    mode:'history'
})

//全局守卫
/*
router.beforeEach((to,from,next)=>{
    //TODO 判断登录状态
    if(to.path == '/login'){
        next();
    }else{
        alert('全局守卫: 还没有登录,请先登录!');
        next('/login');
    }

})*/

//后置钩子
/*router.afterEach((to,from)=>{
    alert('after each');
})*/

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
