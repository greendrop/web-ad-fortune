<template>
  <span>
    <template v-for="i in max">
      <i 
        :key="i" 
        :class="{ far: (rate < i), fas: (rate >= i), 'fa-star': true }" />
    </template>
  </span>
</template>

<script>
export default {
  name: 'RateStar',
  props: {
    rate: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
.fa-star {
  color: #f2b01e;
}
</style>
