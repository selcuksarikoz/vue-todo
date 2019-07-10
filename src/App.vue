<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*,
*:after,
*before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100vw;
  height: 100vh;
  -ms-overflow-style: scrollbar;
  -webkit-app-region: drag;
  background-color: transparent;
}
input[type="submit"],
input[type="reset"],
input[type="button"],
input[type="text"],
button,
textarea {
  -webkit-app-region: no-drag;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  -webkit-user-select: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  width: 100%;
  height: 100%;
}
</style>
