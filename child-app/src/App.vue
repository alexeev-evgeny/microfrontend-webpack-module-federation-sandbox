<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <pre>megaSecurityToken: {{ megaSecurityToken }}</pre>
    <button @click="emitEvent">EMIT EVENT</button>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  props: {
    megaSecurityToken: {
      type: String,
      default: ''
    }
  },
  methods: {
    emitEvent() {
      this.$emit('my-event', { data: 'MEGA SECURITY DATA'});
    }
  }
}
</script>

<style scoped>
#app {
  background-color: pink;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
