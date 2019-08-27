<template >
    <div  id="show-blog">
        <div >
            <h2 >{{blog.title}}</h2>
            <article>{{blog.body}}</article>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'single-blog',
        data(){
            return {
                id:this.$route.params.id,
                blog:{}
            }
        },
        created() {
            console.log('1111111singleblog')
            this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
                .then(function (data) {
                    this.blog = data.body;
                    console.log(this.blog)
                })
        }
    }

</script>

<style>
</style>