<template>
  <Container>
    <Header />
    <ListTitle />
    <Lists />
    <Footer />
  </Container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Container from '@/components/Container.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Lists from '@/components/Lists.vue';
import ListTitle from '@/components/ListTitle.vue';

export default {
  name: 'home',
  components: {
    Container,
    Header,
    Footer,
    Lists,
    ListTitle,
  }
};
</script>

<style lang="scss" scoped>
</style>
