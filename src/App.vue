<template>
  <div class="flex flex-col items-center w-full min-h-screen max-h-screen">
    <TopBar />
    <MainBlock class="flex-auto w-full" @success="onSuccess" @fail="onFail"/>
    <ResultBlock
      class="flex-none w-full h-20 text-stone-700">{{ resultText }}</ResultBlock>
  </div>
</template>

<script>
import TopBar from './components/Bar'
import MainBlock from './components/Block'
import ResultBlock from './components/ResultBlock'

export default {
  name: 'App',
  components: { TopBar, MainBlock, ResultBlock },
  data () {
    return {
      resultText: ''
    }
  },
  methods: {
    // Displays time in results bar
    onSuccess (time) {
      this.resultText = time + ' ms'
    },
    // Displays fail
    onFail () {
      this.resultText = 'Failed'
    }
  }
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
