<template>
  <div class="title-container" v-if="getActiveTodo">
    <div class="todo-date">{{ convertDate }}</div>
    <div class="todo-title">
      {{ getActiveTodo.todoName }}
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import dateformat from 'dateformat';

export default {
  name: 'ListTitle',
  computed: {
    ...mapGetters([
      'getActiveTodo'
    ]),
    convertDate() {
      //  THU, 28 FEB 2019
      return dateformat(this.getActiveTodo.createdAt, 'ddd, dd mmm yyyy');
    }
  },

};
</script>

<style lang="scss" scoped>
.title-container {
  position: relative;
  // display: flex;
  width: 80%;
  align-self: flex-start;
  text-align: left;
  padding: 15px 40px 15px 40px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border: 4px solid #22d38c;
  border-left-color: transparent;
  transform: translateX(-4px);
  margin-bottom: 30px;
  &:before {
    position: absolute;
    width: 20px;
    height: 4px;
    background-color: #fff;
    content: "";
    left: 40px;
    bottom: -4px;
  }
  .todo-date {
    color: #7faf9d;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .todo-title {
    color: #000;
    font-size: 24px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
