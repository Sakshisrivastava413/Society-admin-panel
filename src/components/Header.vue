<template>
  <v-toolbar flat>
    <v-list class="heading">
      <v-list-tile>
        <v-list-tile-title class="title">{{ title }}</v-list-tile-title>
        <v-btn color="primary" dark @click="openModal()">Add Society</v-btn>
      </v-list-tile>
    </v-list>
  </v-toolbar>
</template>

<script>
import AddSociety from './AddSociety';
export default {
  name: "Header",
  props: ["title"],
  method: {
    openModal() {
      this.$router.push({ component: "AddSociety" });
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 25px !important;
  font-weight: 400;
}
.v-toolbar {
  width: 79vw;
}
.heading {
  background: rgb(203, 204, 204);
}
.v-list__tile__title {
  text-align: center;
}
</style>


