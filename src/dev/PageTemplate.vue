<template>
  <v-container fluid class="px-0 py-0">
    <v-row no-gutters>
      <v-col cols="12">
        <v-card flat>
          <v-container>
            <!-- Page Title -->
            <v-row no-gutters>
              <h5 class="headline">Page Title</h5>
            </v-row>
            <v-divider class="mt-1"></v-divider>

            <!-- ------------------------------------------------------- Page Content ---------------------------------------------------------------- -->
            <v-row> </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <!-- Snackbar -->
    <v-row>
      <v-snackbar
        v-model="snackbar.show"
        top
        right
        :color="snackbar.color"
        :timeout="snackbar.timeout"
      >
        {{ snackbar.text }}
        <v-btn text @click="snackbar.show = false"> Close </v-btn>
      </v-snackbar>
    </v-row>

    <!-- Overlay Loader - Fullscreen -->
    <v-overlay :value="loaderFullscreen" z-index="200001">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-container>
</template>

<script>
import { log } from "../helpers/Logger";
// import FullscreenLoader from "../components/loaders/FullScreenLoader_Base.vue";
import Popup from "../components/popups/Popup_Base.vue";
import Snackbar from "../components/snackbars/Snackbar_Base.vue";

/*
// Validation Library - Vuelidate
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
*/

/* Note: When Declaring Variables, always think about how Form Validation Rules are applied */
export default {
  // Mixins
  // mixins: [validationMixin],

  // Form Validations
  // validations: {},

  // Props Received
  props: {},

  // Imported Components
  components: {
    // loader: FullscreenLoader,
    // popup: Popup,
    // snackbar: Snackbar,
  },

  // Data Variables and Values
  data: () => ({
    // Snackbar
    snackbar: {
      show: false,
      text: "",
      color: "",
      timeout: 4000,
    },
    // Loader Overlay
    loaderFullscreen: false,
  }),

  // Custom Methods and Functions
  methods: {
    // #########################################################################################
    //                                       Utililty
    // #########################################################################################
    showSnackbar(message = "", type = "", timeout = 4000) {
      // Snackbar
      this.snackbar.text = message;
      this.snackbar.color = type;
      this.snackbar.timeout = timeout;
      this.snackbar.show = true;
    },
    // #########################################################################################
    //
    // #########################################################################################
  },

  // Life Cycle Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},

  // Computed Properties
  computed: {},

  //   Watchers
  watch: {},
};
</script>

// Custom CSS Rules and Classes
<style scoped></style>
