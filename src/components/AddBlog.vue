<template>
    <div id="add-blog">
        <h1>添加博客</h1>
        <form v-if="!submited">
            <label>博客标题:</label>
            <input input="text" v-model="blog.title" required></input>

            <label>博客内容:</label>
            <textarea v-model="blog.content"></textarea>
            <button @click.prevent="post">提交</button>
        </form>
        <hr>
        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题:{{blog.title}}</p>
            <p>博客内容:</p>
            <p>{{blog.content}}</p>
        </div>
    </div>
</template>

<script>
export default{
    name:'add-blog',
    data(){
        return {
            blog:{title:'',
            content:''},
            submited:false
        }
    },
    methods:{
        post:function(){
            this.$http.post('https://my-json-server.typicode.com/mq261207483/db/posts',{
                title:this.blog.title,
                body:this.blog.content,
                userId:1
            }).then(function(data){
                console.log(data)
                this.submited=true;
            })
        }
    }
}

</script>

<style>
#add-blog *{
    box-sizing: border-box;
}

    label {
        display: block;
        margin: 20px 0 10px;
    }
</style>