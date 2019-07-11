<template>
  <div class="list-container">
    <div class="list-item">
      <div class="item-check">
        <input
          type="checkbox"
          :name="Item.id"
          :id="Item.id"
          :checked="Item.done"
          v-model="Item.done"
        />
        <label>{{ Item.text }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['Item'],
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
    .item-check {
      display: flex;
      align-items: center;
      position: relative;
    }
    input[type="checkbox"] {
      margin-right: 20px;
      opacity: 0;
      z-index: 1;
      width: 20px;
      height: 20px;
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
