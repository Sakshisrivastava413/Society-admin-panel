<template>
  <v-app>
    <v-toolbar app>
          <v-list class="user-info">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
              </v-list-tile-avatar>
  
              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Admin Panel</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="#"
        target="_blank"
      >
        <span class="mr-2">Log Out</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <SideMenu/>
    </v-content>
  </v-app>
</template>

<script>
import SideMenu from './components/SideMenu'

export default {
  name: 'App',
  components: {
    SideMenu
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.theme--light.v-list {
  background: #f5f5f5
}
</style>

