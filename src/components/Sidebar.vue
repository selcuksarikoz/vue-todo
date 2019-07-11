<template>
  <aside :class="{ open: drawer }">
    <div class="sidebar-header">
      <div class="back-btn" @click="toggleDrawer">
        <img src="../assets/left-arrow.svg" alt="back" />
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
  props: ['drawer'],
  methods: {
    toggleDrawer() {
      this.$parent.toggleDrawer();
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  overflow-y: scroll;
  width: 75%;
  background-color: whitesmoke;
  height: 100%;
  z-index: 2;
  left: 0px;
  top: 0px;
  transform: translateX(-100%);
  transition: all 0.6s ease-in;
  will-change: transition;
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.07);
  border-top-right-radius: 40px;
  opacity: 0;
  &.open {
    opacity: 1;
    transform: translateX(0%);
    transition: all 0.6s ease-in;
    will-change: transition;
  }
  .sidebar-header {
    padding: 30px 30px;
    text-align: right;
    .back-btn {
      display: inline-block;
      cursor: pointer;
      img {
        width: 20px;
      }
    }
  }
}
</style>


