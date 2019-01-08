<template>
  <v-app light>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
      height="auto"
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-flex
          py-3
          text-xs-center
        >
          <span>powerd by <a 
            href="http://jugemkey.jp/api/waf/api_free.php" 
            target="_blank">JugemKey</a></span>
          <span>【PR】<a 
            href="http://www.tarim.co.jp/" 
            target="_blank">原宿占い館 塔里木</a></span>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [{ icon: 'today', title: '本日の占い', to: '/' }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '星座占い'
    }
  }
}
</script>
