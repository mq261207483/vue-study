<template xmlns:v-kuandu="http://www.w3.org/1999/xhtml">
    <div v-kuandu:colomn="'henkuan'" id="show-blog">
        <h1>博客总览</h1>
        <input type="text" placeholder="搜索" v-model="search" />
       <!-- <div  id="sigleBlog" v-for="blog in blogs">-->
        <div  id="sigleBlog" v-for="blog in filterBlogs">
            <router-link v-bind:to="'/singleBlog/'+ blog.id"><h2 v-hiqilai>{{blog.title | to-uppercase}}</h2></router-link>
            <article>{{blog.body}}</article>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'shou-blog',
        data(){
            return {
                blogs: [],
                search:''
            }
        },
        created() {
            this.$http.get('http://jsonplaceholder.typicode.com/posts')
//            this.$http.get('./../static/posts.json')
                .then(function (data) {
                    this.blogs = data.body.slice(0, 10);
                    console.log(this.blogs)
                })
        },
        computed:{
            filterBlogs:function(){
                return this.blogs.filter((blog)=>{
                    return blog.title.match(this.search)
                })
            }
        },
        filters:{
            /*'to-uppercase':function(value){
                return value.toUpperCase()
            }*/
            toUppercase(value){
                return value.toUpperCase()
            }
        },
        directives:{
            'abc':{
                bind(el,binding,vnode){
                    //.....
                }
            }
        }
    }

</script>

<style>
    #shou-blog {
        max-width: 800px;
        margin: 0 auto;
    }

    #sigleBlog {
        padding:20px;
        margin:20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>