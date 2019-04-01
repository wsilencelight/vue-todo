<template>
    <div class="helper">
        <span class="left">
            {{unFinishedTodoLength}} items left
        </span>
        <span class="tabs">
            <span v-for="state in states"
                  :key="state"
                  :class="[state, filter === state ? 'actived' : '']"
                  @click="toggleFilter(state)">

                {{state}}
            </span>
        </span>

        <span class="clear" @click="clearAllCompleted">
            clear completed
        </span>
    </div>
</template>

<script>
export default {
    //父组件传进来的参数
    props: {
        filter: {
            type: String,
            required: true
        },
        todos: {
            type: Array,
            required: true
        }
    },
    computed: {
        unFinishedTodoLength() {
            //Array.filter,根据参数内容筛选出一个新的数组
            return this.todos.filter(todo => !todo.completed).length
        }
    },
    data() {
        return {
            states: ['all', 'active', 'completed']
        }
    },
    methods: {
        clearAllCompleted() {
            this.$emit('clearAllCompleted')
        },
        //这里state就会被父级监听到
        toggleFilter(state) {
            this.$emit('toggle', state)
        }
    }
}
</script>

<style lang="stylus" scoped>
.helper{
  font-weight 100
  display flex
  justify-content space-between
  padding 5px 0
  line-height 30px
  background-color #fff
  font-size 14px
  font-smoothing: antialiased
}
.left, .clear, .tabs{
  padding 0 10px
  box-sizing border-box
}
.left, .clear{
  width 150px
}
.left{
  text-align left
}
.clear{
  text-align right
  cursor pointer
}
.tabs{
  width 200px
  display flex
  justify-content space-around
  * {
    display inline-block
    padding 0 10px
    cursor pointer
    border 1px solid rgba(175,47,47,0)
    &.actived{
      border-color rgba(175,47,47,0.4)
      border-radius 5px
    }
  }
}
</style>
