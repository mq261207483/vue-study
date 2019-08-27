<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <app-header></app-header>
       <!-- <el-button @click="visible = true">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>Try Element</p>
        </el-dialog>-->
        <div >
            <router-view></router-view>
        </div>
        <div >
           <!-- 路由复用-->
            <router-view name="menu"></router-view>
        </div>

    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import Header from "./components/Header.vue";

    export default {
        name: 'app',
        components: {
            'app-header': Header
        },
        data: function () {
            return {visible: false}
        }
    }
</script>

<style>
    /*#app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }*/
</style>
