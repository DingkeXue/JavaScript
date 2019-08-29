<!--不使用容器组件来展示评论,该组件和vuex产生了耦合，不利于复用-->
<template>
    <ul>
        <li v-for="comment in comments" :key="comment.id">
            {{comment.body}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'CommentList',
        computed: {
            comments() {
                return this.$store.state.comments;
            }
        },
        mounted() {
            this.$store.dispatch('fetchComments')
        }
    }
</script>
