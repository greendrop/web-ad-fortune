<template>
  <div>
    <v-layout 
      row 
      wrap>
      <v-flex 
        md12
        sm12
        xs12>
        <h1>本日の占い</h1>
      </v-flex>
    </v-layout>
    <Horoscopes 
      :horoscopes="horoscopes" 
      :loaded="loaded" />
  </div>
</template>

<script>
import Horoscopes from '~/components/Horoscopes.vue'

export default {
  components: {
    Horoscopes
  },
  data() {
    return {
      date: new Date()
    }
  },
  computed: {
    horoscopes() {
      return this.$store.getters['horoscopes/horoscopes']
    },
    loaded() {
      return this.$store.getters['horoscopes/loaded']
    }
  },
  mounted() {
    this.$store.dispatch('horoscopes/getHoroscopes', this.date)
  }
}
</script>
