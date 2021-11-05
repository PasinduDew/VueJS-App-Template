<template>
  <v-navigation-drawer v-model="drawer" hide-overlay app dark>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>sdfsdfsdf</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { bus } from "../../main";

export default {
  // Props Received
  props: [],

  // Imported Components
  components: {},

  // Data Variables and Values
  data: () => ({
    drawer: false,
  }),

  // Life-Cycle Hook
  async created() {
    bus.$on("__EVENT-NAVIGATION-DRAWER__", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
