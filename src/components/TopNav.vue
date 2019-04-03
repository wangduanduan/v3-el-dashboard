<template>
  <div>
    <el-tag class="v3-tag" v-for="(tag, index) in tags" :key="tag.index" closable 
    @close="closeTag(index)" :type="tag.tabType"
    @click="activeTag(tag.index)">
      {{tag.title}}
    </el-tag>
  </div>
</template>

<script>
  import debug from 'debug'
  import { mapState } from 'vuex'

  const log = debug('v3:TopNav')

  export default {
    name: 'TopNav',
    data() {
      return {
        // tags: []
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(to, from)
        log('to', to)
        log('from', from)

        this.addCachedView(to)
      }
    },
    computed: {
      tags () {
        return this.$store.state.navTags.map((item) => {
          return {
            index: item.index,
            title: item.title,
            tabType: item.active ? 'success' : 'info',
            active: item.active
          }
        })
      }
    },
    methods: {
      addCachedView (view) {
        if (view.meta.type === 'menu') {
          this.$store.dispatch('addNavTags', view)
        }
      },
      closeTag (index) {
        let tagId = this.tags[index].index
        // 关闭处于激活状态的tag, 此时要切换路由
        if (this.tags[index].active) {
          if (this.tags[index + 1]) {
            this.activeTag(this.tags[index + 1].index)
          } else if (this.tags[index - 1]) {
            this.activeTag(this.tags[index - 1].index)
          } else {
            this.$router.push(`/Home`)
          }
        } 
        
        this.$store.dispatch('removeOneNavTag', {
          index: tagId
        })
        // }
        // log('dispatch removeOneNavTag done')
        // let nextTag = this.navTags.length === 0 ? '/' : this.navTags[this.navTags.length - 1]
        // this.activeTag(nextTag)
      },
      activeTag (tag) {
        this.$router.push(tag)
      }
    },
    mounted () {
      this.addCachedView(this.$route)
    }
  }
</script>

<style>
.v3-tag {
  cursor: pointer;
}
</style>
