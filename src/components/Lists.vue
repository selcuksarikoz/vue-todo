<template>
  <section v-if="getTodos.todos">
    <ListItem
      v-for="todo in getTodos.todos"
      :key="todo.id"
      v-bind:Item="todo"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import ListItem from './ListItem.vue';

export default {
  name: 'Lists',
  components: {
    ListItem
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'getTodos'
    ])
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex: 1;
  overflow-y: auto;
  flex-direction: column;
}
</style>
