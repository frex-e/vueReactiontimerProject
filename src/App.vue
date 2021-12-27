<template>
  <div class="w-full min-h-screen flex flex-col items-center">
    <Bar />
    <Block class="h-4/6 w-full flex-auto bg-stone-100"/>
  </div>
</template>

<script>
import Bar from './components/Bar'
import Block from './components/Block'

export default {
  name: 'App',
  components: { Bar, Block }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @apply text-white text-2xl;
}
</style>
