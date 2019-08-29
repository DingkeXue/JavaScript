<!--使用容器组件。该组件为展示评论列表，但是，只显示容器组件通过props传过来的值，不涉及到数据的操作-->
<template>
    <ul>
        <li v-for="comment in comments" :key="comment.id">
            {{comment.body}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'CommentListNew',

        // 接收容器组件传过来的参数
        props: {
            comments: {
                type: Array,
                default () {
                    return []
                }
            },
            fetch: {
                type: Function,
                default: () => {}
            }
        },

        // 定义回调函数来触发容器组件内的获取store中方法
        mounted() {
            this.fetch();
        }
    }
</script>
