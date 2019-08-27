<template>
    <div>
        <h1>HOME 首页</h1>
        <div>环境变量:{{url}}</div>
    </div>

</template>

<script>

    export default {
        name: 'Home',
        data(){
            console.log(process.env.VUE_APP_URL)
            return {url: process.env.VUE_APP_URL}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
