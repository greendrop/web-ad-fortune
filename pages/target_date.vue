<template>
  <div>
    <v-layout 
      row 
      wrap>
      <v-flex 
        md12
        sm12
        xs12>
        <h1>指定日の占い</h1>
      </v-flex>
    </v-layout>
    <v-layout 
      row 
      wrap>
      <v-flex 
        md12
        sm12
        xs12>
        <v-menu
          :close-on-content-click="false"
          v-model="menu"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px">
          <v-text-field
            slot="activator"
            v-model="date"
            prepend-icon="event"
            readonly />
          <v-date-picker 
            v-model="date" 
            locale="ja-jp"
            @input="menu = false" />
        </v-menu>
      </v-flex>
    </v-layout>
    <Horoscopes 
      :horoscopes="horoscopes" 
      :loaded="loaded" />
  </div>
</template>

<script>
import moment from 'moment'
import Horoscopes from '~/components/Horoscopes.vue'

export default {
  components: {
    Horoscopes
  },
  data() {
    return {
      date: moment(new Date()).format('YYYY-MM-DD'),
      menu: false
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
  watch: {
    date() {
      this.$store.dispatch('horoscopes/getHoroscopes', new Date(this.date))
    }
  },
  mounted() {
    this.$store.dispatch('horoscopes/getHoroscopes', new Date(this.date))
  }
}
</script>
