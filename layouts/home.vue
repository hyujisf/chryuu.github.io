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
import Header from '~/components/home/AppHeader'
import Footer from '~/components/home/AppFooter'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
