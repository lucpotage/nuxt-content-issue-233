<template>
  <div>Hello</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      articles: []
    }
  },
  computed: {
    ...mapGetters(['color'])
  },
  async fetch() {
    console.log(this.color)
    this.articles = await this.$content('articles').where({ color: this.color }).fetch()
  }
}
</script>