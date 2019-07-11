<template>
  <div class="list-container">
    <div class="list-item">
      <div class="item-check">
        <input
          v-if="edit"
          type="text"
          :name="Item.id"
          :id="Item.id"
          v-model="Item.text"
          ref="inputbox"
          @keypress.prevent.enter="save"
        />
        <input
          v-else
          type="checkbox"
          :name="Item.id"
          :id="Item.id"
          :checked="Item.done"
          v-model="Item.done"
        />

        <label v-if="!edit" @click.prevent="toggleEdit($event)">{{
          Item.text
        }}</label>
      </div>

      <div class="todo-options" v-if="!edit">
        <img src="../assets/menu.svg" :alt="Item.text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['Item'],
  data() {
    return {
      edit: false
    };
  },
  methods: {
    toggleEdit(event) {
      event.preventDefault();
      if (!this.edit) {
        this.edit = true;
        setTimeout(() => {
          this.$refs.inputbox.focus();
        }, 0);
      }
    },
    save() {
      // TODO post method
      console.log(this.Item);
      this.edit = false;
      // console.log(this.$refs.inputbox.value)
    }
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
.list-container {
  align-self: stretch;
  cursor: pointer;

  .list-item {
    padding: 10px 40px 10px 40px;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    justify-content: space-between;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover .todo-options {
      opacity: 1;
      transition: opacity 0.5s ease-in;
      will-change: opacity;
    }
    .todo-options {
      opacity: 0;
      transition: opacity 0.5s ease-in;
      will-change: opacity;
      img {
        display: block;
        width: 20px;
      }
    }
    .item-check {
      display: flex;
      align-items: center;
      position: relative;
      flex: 1;
    }
    input {
      &[type="checkbox"] {
        margin-right: 20px;
        opacity: 0;
        z-index: 1;
        width: 20px;
        height: 20px;
      }
      &[type="text"] {
        width: 100%;
        padding: 10px;
        border: 1px solid whitesmoke;
        border-radius: 5px;
        font-size: 14px;
        color: #ccc;
        &:focus {
          outline: none;
        }
      }
      & + label:before {
        border-radius: 50%;
        content: "";
        position: absolute;
        display: block;
        top: 0px;
        left: 0px;
        width: 20px;
        height: 20px;
        border: 1px solid #a7e6cf;
        transition: background-color 0.2s ease-in-out;
        will-change: transition;
      }
      &:checked + label {
        color: #a7e6cf;
        transition: color 0.2s ease-in-out;
      }
      &:checked + label:before {
        content: "";
        background-color: #a7e6cf;
        transition: background-color 0.2s ease-in-out;
        will-change: transition;
        background-image: url("../assets/checked.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50%;
      }
    }
  }
}
</style>
