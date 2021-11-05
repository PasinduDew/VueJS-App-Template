<template>
  <v-dialog v-model="showDialog" width="500" persistent>
    <v-card>
      <v-toolbar dense flat :color="headerColor" :dark="headerDark">
        <v-toolbar-title class="ml-n1">{{ title }} </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          v-if="!$vuetify.breakpoint.xsOnly"
          class="mr-n5"
          icon
          dark
          @click="$emit('click-close')"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text class="px-3 py-4">
        <slot name="message">{{ message }}</slot>
      </v-card-text>
      <v-card-actions class="">
        <v-row no-gutters v-if="$vuetify.breakpoint.xsOnly" class="">
          <v-col cols="6">
            <v-btn class="mr-2 ml-n1" block small @click="$emit('click-close')"
              >Close</v-btn
            >
          </v-col>
          <v-col cols="6">
            <v-btn
              class="ml-2"
              block
              small
              :color="btnActionColor"
              @click="$emit('click-action')"
              :dark="btnActionDark"
              >{{ btnAction }}</v-btn
            >
          </v-col>
        </v-row>
        <v-row v-else no-gutters>
          <v-spacer></v-spacer>
          <v-btn class="mr-1" small @click="$emit('click-close')">Close</v-btn>
          <v-btn
            class="ml-1 mr-n2"
            small
            :color="btnActionColor"
            @click="$emit('click-action')"
            :dark="btnActionDark"
            >{{ btnAction }}</v-btn
          >
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/* Note: When Declaring Variables, always think about how Form Validation Rules are applied */
export default {
  // Props Received
  props: {
    showDialog: {
      type: Boolean,
      required: true,
      default: false,
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    message: {
      type: String,
      required: true,
      default: "",
    },
    headerColor: {
      type: String,
      required: false,
      default: "primary",
    },
    headerDark: {
      type: Boolean,
      required: false,
      default: true,
    },
    btnActionColor: {
      type: String,
      required: false,
      default: "primary",
    },
    btnActionDark: {
      type: Boolean,
      required: false,
      default: true,
    },
    btnAction: {
      type: String,
      required: false,
      default: "Okay",
    },
  },
};
</script>

// Custom CSS Rules and Classes
<style scoped></style>
