<template>
  <div id="app">
    <TitleBar/>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import TitleBar from './components/MainFrameElements/TitleBar';

export default {
  name: 'App',
  components: {
    TitleBar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
