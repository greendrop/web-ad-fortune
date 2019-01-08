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
    <v-layout 
      v-if="!loaded"
      row
      wrap>
      <v-flex
        md12
        sm12
        xs12>
        <p class="text-xs-center display-1"><i class="fas fa-spinner fa-spin"/></p>
      </v-flex>
    </v-layout>
    <v-layout
      v-if="loaded && horoscopes.length === 0"
      row
      wrap>
      <v-flex
        md12
        sm12
        xs12>
        <p class="text-xs-center headline">データがありません</p>
      </v-flex>
    </v-layout>
    <v-layout
      v-if="loaded && horoscopes.length > 0"
      row
      wrap>
      <v-flex
        v-for="(horoscope, i) in horoscopes" 
        :key="i" 
        md3
        sm12
        xs12>
        <Horoscope :horoscope="horoscope" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Horoscope from '~/components/Horoscope.vue'

export default {
  components: {
    Horoscope
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
