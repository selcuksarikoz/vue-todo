<template>
  <footer>
    <div class="add-btn">
      +
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
footer {
  align-self: center;
  .add-btn {
    position: relative;
    padding: 10px 50px;
    width: 190px;
    cursor: pointer;
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    height: 50px;
    position: relative;
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
    background-color: #21d08a;
  }
}
</style>
