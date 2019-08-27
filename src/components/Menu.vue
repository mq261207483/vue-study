<template>
    <div class="hello">
        <h1>MENU1</h1>
        <el-button style="background: cyan" @click="goto">跳转</el-button>
        <el-button style="background: cyan" @click="goto2">跨域</el-button>
        <router-view ></router-view>
    </div>
</template>

<script>
    import ElButton from "../../node_modules/element-ui/packages/button/src/button";
    export default {
        components: {ElButton},
        name: 'Menu',
        methods:{
            goto:function(){
//                this.$router.go(-1);
//                this.$router.replace('/');
//                this.$router.push({name:'homeLink'});
                this.$router.push('/helloLink');
            },
            goto2:function(){

                //fetch
//                fetch("http://home.51.com/x4954061/diary/wxitem/505169.html",{
                /*fetch("/api/x4954061/diary/wxitem/505169.html",{
                    method:'post',
                    headers:{token:'123123123123'}
                    body:'hello'
                }).then(result=>{
                    console.log(result);
//                    return result.json();
                    return result.text();
                }).then(data=>{
                    console.log(data);
                })
*/
                //axios
                this.$axios.post('/api/x4954061/diary/wxitem/505169.html',{
                    username:'123',password:'abc'
                }).then(data=>{
                    console.log(data);
                })
            }
        },
        data(){
            return {name:"herry"}
        },
        //路由守卫-组件内守卫
        beforeRouterEnter:(to,from,next)=>{
//            alert('hello' + this.name);//name undefined
//            next();

            next(vm => {
                //异步
                alert('hello' + vm.name);
            })
        }
//        ,beforeRouteLeave
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
