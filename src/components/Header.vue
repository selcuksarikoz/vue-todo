<template>
  <header>
    <div class="drawer" @click="toggleDrawer">
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <div class="profile-icon">
      <a href="#">
        <img src="../assets/user.png" />
      </a>
    </div>
    <SideBar :drawer="drawer" />
  </header>
</template>

<script>
import SideBar from './Sidebar.vue';

export default {
  name: 'Header',
  data() {
    return {
      drawer: false
    };
  },
  components: {
    SideBar
  },
  computed: {

  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
header {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 30px 40px 20px 40px;
}
.drawer {
  cursor: pointer;
  .line {
    &:nth-child(1) {
      margin-bottom: 5px;
    }
    border-radius: 4px;
    display: block;
    width: 30px;
    height: 4px;
    background-color: #ccc;
  }
}
</style>


