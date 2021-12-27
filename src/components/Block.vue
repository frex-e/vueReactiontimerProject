<template>
  <div class="w-full h-full flex items-center justify-center"
       :class="{
         'bg-blue-400': state === 'start',
         'bg-red-400': state === 'wait',
         'bg-green-400': state === 'go' }"
       @click="onClick">
    <div class="flex-none">
      <div :class="{ 'hidden': state !== 'start' }">
        <h1 class="text-8xl font-semibold">Click</h1>
        <p>To begin</p>
      </div>
      <div :class="{ 'hidden': state !== 'wait' }">
        <h1 class="text-8xl font-semibold">Wait</h1>
        <p>For Green</p>
      </div>
      <div :class="{ 'hidden': state !== 'go' }">
        <h1 class="text-8xl font-semibold">Go!!</h1>
        <p>Hurry up. Click</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBlock',
  data () {
    return {
      state: 'start',
      time: 0,
      timer: null,
      clicked: false
    }
  },
  emits: ['fail', 'success'],

  methods: {
    onClick () {
      if (this.state === 'start') {
        this.state = 'wait'

        // Checks of failed before
        this.time = 0

        // Begins timeout timer
        setTimeout(() => {
          if (!this.clicked) {
            this.state = 'go'
            this.startTimer()
          } else {
            this.clicked = false
          }
        }, 1000 + Math.random() * 2000)
      } else if (this.state === 'wait') {
        this.clicked = true
        this.state = 'start'
        this.$emit('fail')
      } else {
        this.stopTimer()

        this.state = 'start'
        this.$emit('success', this.time)
        console.log(this.time)
      }
    },

    startTimer () {
      // Begins counting reaction time
      this.timer = setInterval(() => { this.time += 10 }, 10)
    },

    stopTimer () {
      // Stops timer object
      clearInterval(this.timer)
    }
  }
}
</script>
