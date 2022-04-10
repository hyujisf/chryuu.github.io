<template>
  <div
    class="transition-all duration-500 ease-in-out bg-slate-200 rounded shadow p-2"
  >
    <nuxt-link :to="`/blog/${post.slug}`">
      <nuxt-img
        class="rounded-lg"
        :src="post.image"
        preset="preview"
        width="400"
        height="300"
      />

      <h2 class="md:mt-2 text-3xl font-semibold">{{ post.title }}</h2>

      <div v-if="post.tags" class="flex space-x-3 mt-2">
        <span
          class="text-gray-400 font-bold text-xs"
          v-for="tag in post.tags"
          :key="tag"
        >
          {{ tag }}
        </span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
}
</script>
