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
    clip-path: ellipse(50% 50% at 50% 50%);
    background-color: #21d08a;
  }
}
</style>
