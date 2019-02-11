<template>
  <div>
    <el-tag v-for="tag in navTags" :key="tag" closable 
    @close="closeTag(tag)"
    @click="activeTag(tag)">
      {{tag}}
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
        tags: [{
            name: '标签一',
            type: ''
          },
          {
            name: '标签二',
            type: 'success'
          },
          {
            name: '标签三',
            type: 'info'
          },
          {
            name: '标签四',
            type: 'warning'
          },
          {
            name: '标签五',
            type: 'danger'
          }
        ]
      }
    },
    watch: {
      '$route' (to, from) {
        // log('to', to)
        // log('from', from)
        this.addCachedView(to)
      }
    },
    computed: {
      ...mapState(['navTags'])
    },
    methods: {
      addCachedView (view) {
        this.$store.dispatch('addNavTags', view)
      },
      closeTag (tag) {
        this.$store.dispatch('removeOneNavTag', {
          name: tag
        })
        log('dispatch removeOneNavTag done')
        let nextTag = this.navTags.length === 0 ? '/' : this.navTags[this.navTags.length - 1]
        this.activeTag(nextTag)
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