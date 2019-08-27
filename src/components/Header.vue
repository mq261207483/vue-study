<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <text x="0" y="15" fill="red">I love SVG</text>
            </svg>
        </el-menu-item>
        <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
        <el-submenu index="2">
            <template slot="title"><router-link to="/menu">菜单</router-link></template>
            <el-menu-item index="2-1"><router-link to="/menu">hello1</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/menu/hello">hello2</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/login">登录</router-link></el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1"><router-link to="/addBlog">添加博客</router-link></el-menu-item>
                <el-menu-item index="2-4-2"><router-link to="/showBlog">博客总览</router-link></el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: 'app-header',
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }

</script>

<style>


</style>