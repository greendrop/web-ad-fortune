<template>
  <div>
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
  name: 'Horoscopes',
  components: {
    Horoscope
  },
  props: {
    horoscopes: {
      type: Array,
      required: true
    },
    loaded: {
      type: Boolean,
      required: true
    }
  }
}
</script>
