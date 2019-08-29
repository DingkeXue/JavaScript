<!--容器组件。负责获取store中参数来传递给展示组件，通过methods定义回到函数，回调函数内部调用dispatch方法-->
<template>
    <CommentList
        :comments="comments"
        :fetch="fetchComments"
    ></CommentList>
</template>

<script>
    import CommentList from './CommentListNew'
    export default {
        name:'CommentListContainer',
        components: {
            CommentList
        },
        computed: {
            comments() {
                return this.$store.state.comments;
            }
        },

        methods: {
            fetchComments() {
                return this.$store.dispatch('fetchComments')
            }
        }
    }
</script>
