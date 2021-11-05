<template>
  <div></div>
</template>

<script>
import { log } from "../helpers/Logger";

// Componenets

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
  props: [],

  // Imported Components
  components: {},

  // Data Variables and Values
  data: () => ({}),

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
