<template>
  <v-app>
    <app-bar></app-bar>
    <app-drawer></app-drawer>
    <v-main>
      <router-view />
    </v-main>

    <!-- <loader :showLoader="true" /> -->
    <popup
      :showDialog="popup"
      title="Delete Confirmation"
      message="Do you want tp DELETE this item?"
      @click-close="popup = !popup"
    >
    </popup>
    <snackbar :showSnackbar="true" message="Blah Blah" />
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Appbar from "./components/app/TheAppbar.vue";
import Footer from "./components/app/TheFooter.vue";
import Drawer from "./components/app/TheDrawer.vue";

export default {
  name: "App",

  // Components
  components: {
    "app-bar": Appbar,
    "app-footer": Footer,
    "app-drawer": Drawer,
  },

  data: () => ({
    //
    popup: false,
  }),
  methods: {
    test() {
      console.log("Click Close");
    },
  },
  async created() {},
};
</script>
