<template>
  <div class="w-full h-full flex items-center justify-center"
       :class="{
         'bg-blue-400': state === 'start',
         'bg-red-400': state === 'wait' }"
       @click="onClick">
    <div class="flex-none">
      <div :class="{ 'hidden': state !== 'start' }">
        <h1 class="text-6xl font-semibold">Click</h1>
        <p>To begin</p>
      </div>
      <div :class="{ 'hidden': state !== 'wait' }">
        <h1 class="text-6xl font-semibold">Wait</h1>
        <p>For Green</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Block',
  data () {
    return {
      state: 'start',
      delay: null
    }
  },
  methods: {
    onClick () {
      console.log('Ahh')
      if (this.state === 'start') {
        this.state = 'wait'
        console.log(this.state)
      }
    }
  }
}
</script>
