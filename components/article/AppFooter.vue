<template>
  <footer class="fixed bottom-0 bg-white p-4 w-full">
    <div class="flex flex-row gap-4 justify-center">
      <span
        @click="goBack"
        class="w-9/12 py-2 text-center rounded-full bg-yellow-500 hover:bg-gray-500 transition-all duration-300 ease-in-out cursor-pointer"
      >
        Return
      </span>
    </div>
  </footer>
</template>
<script>
export default {
  setup() {},
  methods: {
    goBack() {
      // return this.$router.go(-1)
      return this.$router.back()
    },
  },
}
</script>
