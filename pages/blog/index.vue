<template>
  <div>
    <div class="py-10">
      <h1 class="text-7xl font-black text-center">Article</h1>
    </div>
    <div class="">
      <PostContainer :items="posts" />
    </div>
  </div>
</template>

<script>
import PostContainer from '~/components/article/PostContainer.vue'
export default {
  name: 'BlogPage',
  layout: 'home',

  components: {
    PostContainer,
  },

  async asyncData({ $content }) {
    return {
      posts: await $content('blogs').fetch(),
    }
  },
  methods: {
    scrollToPosts() {
      if (!process.browser) return
      document.querySelector('.posts').scrollIntoView({ behavior: 'smooth' })
    },
  },

  transition: {
    name: 'slide-fade',
  },
}
</script>
