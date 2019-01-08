<template>
  <v-card class="mx-2 my-2">
    <v-img 
      :src="getImageSrc(horoscope.sign)" 
      class="mx-5" />
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{ horoscope.sign }}</h3>
      <div>{{ horoscope.content }}</div>
      <div>
        <ul>
          <li>金運: {{ horoscope.money }}</li>
          <li>仕事運: {{ horoscope.job }}</li>
          <li>恋愛運: {{ horoscope.love }}</li>
          <li>総合運: {{ horoscope.total }}</li>
          <li>ラッキーアイテム: {{ horoscope.item }}</li>
          <li>ラッキーカラー: {{ horoscope.color }}</li>
          <li>ランキング: {{ horoscope.rank }}</li>
        </ul>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'Horoscope',
  props: {
    horoscope: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImageSrc(sign) {
      switch (sign) {
        case '牡羊座':
          return require('~/assets/images/aries.png')
        case '牡牛座':
          return require('~/assets/images/taurus.png')
        case '双子座':
          return require('~/assets/images/gemini.png')
        case '蟹座':
          return require('~/assets/images/cancer.png')
        case '獅子座':
          return require('~/assets/images/leo.png')
        case '乙女座':
          return require('~/assets/images/virgo.png')
        case '天秤座':
          return require('~/assets/images/libra.png')
        case '蠍座':
          return require('~/assets/images/scorpio.png')
        case '射手座':
          return require('~/assets/images/sagittarius.png')
        case '山羊座':
          return require('~/assets/images/capricorn.png')
        case '水瓶座':
          return require('~/assets/images/aquarius.png')
        case '魚座':
          return require('~/assets/images/pisces.png')
        default:
          return null
      }
    }
  }
}
</script>
