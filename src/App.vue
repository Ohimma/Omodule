<template>
  
  <router-view class="router-view" v-slot="{ Component }">
    <transition  mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
