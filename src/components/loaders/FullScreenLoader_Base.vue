<template>
  <v-overlay
    :value="showLoader"
    :color="overlayColor"
    :opacity="overlayOpacity"
    :z-index="zIndex"
  >
    <v-container fluid>
      <v-row class="mb-10 justify-center" v-show="loaderText.length > 0">
        <v-card-title>{{ loaderText }}</v-card-title>
      </v-row>
      <v-row class="justify-center">
        <v-progress-circular
          indeterminate
          :size="size"
          :color="color"
          :width="width"
        >
          <span v-show="progressValue.length > 0">{{ progressValue }}</span>
        </v-progress-circular>
      </v-row>
    </v-container>
  </v-overlay>
</template>

<script>
/* Note: When Declaring Variables, always think about how Form Validation Rules are applied */
export default {
  // Props Received
  props: {
    showLoader: {
      type: Boolean,
      required: true,
      default: false,
    },
    color: {
      type: String,
      required: false,
      default: "primary",
    },
    overlayColor: {
      type: String,
      required: false,
      default: "#000000",
    },
    overlayOpacity: {
      type: Number,
      required: false,
      default: 0.46,
    },
    size: {
      type: Number,
      required: false,
      default: 50,
    },
    zIndex: {
      type: Number,
      required: false,
      default: 5,
    },
    width: {
      type: Number,
      required: false,
      default: 5,
    },
    progressValue: {
      type: String,
      required: false,
      default: "",
    },
    loaderText: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

// Custom CSS Rules and Classes
<style scoped></style>
