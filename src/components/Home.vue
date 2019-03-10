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
      <v-btn flat href="#" target="_blank">
        <span class="mr-2">Log Out</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-navigation-drawer v-model="drawer" permanent absolute>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" class="item">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content class="item-name">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      right: null
    };
  }
};
</script>

<style scoped>
.v-navigation-drawer {
  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.item {
  height: 55px;
}
.item-name {
  font-size: 15px;
}
</style>