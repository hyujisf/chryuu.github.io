<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <section class="flex-grow p-5">
      <Nuxt />
    </section>
    <Footer class="md:hidden" />
  </div>
</template>
<script>
import Header from '~/components/article/AppHeader'
import Footer from '~/components/article/AppFooter'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
