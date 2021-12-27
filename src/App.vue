<template>
  <div class="w-full min-h-screen flex flex-col items-center">
    <Bar />
  </div>
</template>

<script>
import Bar from './components/Bar'

export default {
  name: 'App',
  components: { Bar }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @apply text-white;
}
</style>
