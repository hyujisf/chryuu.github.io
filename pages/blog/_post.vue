<template>
  <div class="">
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-black text-3xl">{{ post.title }}</h1>
      <div v-if="post.tags" class="flex space-x-3 mt-2 mx-auto">
        <span
          class="bg-gray-400 rounded text-white font-bold text-xs px-1.5 py-0.5"
          v-for="tag in post.tags"
          :key="tag"
        >
          {{ tag }}
        </span>
      </div>
      <div class="py-6">
        <nuxt-content
          class="prose dark:prose-light prose-sm sm:prose lg:prose-lg w-full"
          :document="post"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'article',
  async asyncData({ $content, params }) {
    const post = await $content('blogs', params.post).fetch()
    return { post }
  },
  transition: {
    name: 'slide-fade',
  },
}
</script>
