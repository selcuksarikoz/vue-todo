<template>
  <footer>
    <div class="add-btn" @click="addTodo">
      +
    </div>
    <div class="new-todo" v-if="todoModal">
      <input
        type="text"
        name="newtodo"
        id="newtodo"
        v-model="todoText"
        ref="newtodo"
        placeholder="add something.."
        @keypress.prevent.enter="saveTodo"
      />
    </div>
  </footer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Footer',
  data() {
    return {
      todoModal: false,
      todoText: '',
    };
  },
  methods: {
    ...mapActions([
      'saveTodoItem'
    ]),
    addTodo() {
      this.todoModal = !this.todoModal;
      setTimeout(() => {
        if (this.$refs.newtodo) {
          this.$refs.newtodo.focus();
        }
      }, 100);
    },
    saveTodo() {
      this.$refs.newtodo.blur();
      this.todoModal = false;
      this.saveTodoItem(this.todoText);
      this.todoText = '';
      // this.$store.dispatch('saveTodoItem', this.todoText);
      // this.$store.commit('saveTodoItem', this.todoText);
    },
  }
};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  align-self: center;
  display: flex;
  justify-content: center;
  align-self: stretch;
  .add-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #21d08a;
    margin: 20px auto;
    &:focus {
      outline: none;
    }
  }
  .new-todo {
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 90%;
    top: -40px;
    input {
      box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.3);
      width: 100%;
      border: 1px solid #21d08a;
      padding: 15px 10px;
      border-radius: 5px;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
