<template>
  <div id="app">
    <TopNav/>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from './components/TopNav';

export default {
  name: 'EleJi',
  components: { TopNav },
};
</script>

<style>
@import "~@/assets/override.css";
</style>
