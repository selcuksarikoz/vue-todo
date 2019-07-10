<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 10px 5px rgba(235, 235, 235, 0.5) inset;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
