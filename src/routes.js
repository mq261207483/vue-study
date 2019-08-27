/**
 * Created by mq on 2019/8/9.
 */
import Home from './components/Home'
import Menu from './components/Menu'
import HelloWorld from './components/HelloWorld'
import Login from './components/Login'
import AddBlog from './components/AddBlog.vue'
import ShowBlog from './components/ShowBlog.vue'
import SingleBlog from './components/SingleBlog.vue'

export const routes = [
    {path:'/',name:'homeLink',components:{
    default:Home,
    'menu':Menu
    }},
    {path:'/menu',name:'menuLink',beforeEnter:(to,from,next)=>{
        // alert('路由-独享守卫');
        next();
    },component:Menu, children:[
        //二级目录
        {path:'/menu/hello' , name:'helloLink',component:HelloWorld}
    ]},
    {path:'/addBlog',name:'addBlogLink',component:AddBlog},
    {path:'/showBlog',name:'showBlogLink',component:ShowBlog},
    {path:'/singleBlog/:id',name:'singleBlogLink',component:SingleBlog},
    {path:'/login',name:'loginLink',component:Login},
    // {path:'*',redirect:'/'}

]