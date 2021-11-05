<template>
  <v-snackbar
    v-model="snackbarState"
    top
    right
    :color="color"
    :timeout="timeout"
  >
    {{ message }}
    <template v-slot:action>
      <v-btn text @click="snackbarState = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
/* Note: When Declaring Variables, always think about how Form Validation Rules are applied */
export default {
  // Props Received
  props: {
    showSnackbar: {
      type: Boolean,
      required: true,
      default: false,
    },
    message: {
      type: String,
      required: true,
      default: "",
    },
    timeout: {
      type: Number,
      required: false,
      default: 4000,
    },
    color: {
      type: String,
      required: false,
      default: "",
    },
  },
  data: () => ({
    snackbarState: false,
  }),
  created() {
    this.snackbarState = this.showSnackbar;
  },
};
</script>

// Custom CSS Rules and Classes
<style scoped></style>
