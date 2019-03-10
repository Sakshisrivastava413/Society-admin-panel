<template>
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
</template>

<script>
export default {
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

.item {
  height: 55px;
}
.item-name {
  font-size: 15px;
}
</style>
