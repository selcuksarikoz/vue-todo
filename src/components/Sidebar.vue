<template>
  <aside :class="{ open: !drawer }">
    <div class="sidebar-header">
      <div class="back-btn" @click="toggleDrawer">
        <img src="../assets/left-arrow.svg" alt="back" />
      </div>
    </div>
    <div class="aside-menu">
      <ul>
        <li class="active">
          <router-link to="/">List</router-link>
        </li>
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
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
  .aside-menu {
    li {
      display: block;
      padding: 10px 20px;
      &.active {
        background-color: rgba(#22d38c, 1);
        a {
          color: #fff;
        }
      }
      a {
        display: block;
        text-decoration: none;
        color: #22d38c;
      }
    }
  }
}
</style>


