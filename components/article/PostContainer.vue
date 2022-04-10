<template>
  <div :class="container">
    <!-- <PostItem v-for="post in posts" :key="post.slug" :post="post" /> -->
    <PostItem
      :post="post"
      :key="post.id || post.slug"
      v-for="post in sortedItems"
    />
  </div>
</template>

<script>
import PostItem from './PostItem.vue'
// export default {
//   async asyncData({ $content }) {
//     const posts = await $content('blog')
//       // .only(['title', 'image', 'tags', 'slug'])

//       .sortBy('createdAt', 'desc')
//       .limit(2)
//       .fetch()

//     // console.log('posts', posts)

//     return {
//       posts,
//     }
//   },
// }

export default {
  name: 'PostContainer',
  components: {
    PostItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    container: {
      type: String,
      // default: 'flex flex-row gap-2 md:gap-6',
      default: 'grid md:grid-cols-3 gap-2 md:gap-6',
    },
  },
  computed: {
    sortedItems() {
      var sorted = this.items
        .sort((a, b) => {
          var s = new Date(a.createdAt)
          var e = new Date(b.createdAt)
          return s.getTime() - e.getTime()
        })
        .reverse()
      console.log({ sorted: sorted.map((i) => [i.title, i.createdAt]) })
      return sorted
    },
  },
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
