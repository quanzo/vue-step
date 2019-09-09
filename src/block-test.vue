<template>
    <transition :name="transition">
        <div :style="styles" :class="classes" v-show="displayed">
            <button @click="nextStep" v-if="possibleNextStep">Next</button>
            <button @click="prevStep" v-if="possiblePrevStep">Previous</button>
        </div>
    </transition>
</template>

<script>
export default {
  name: "block-test",
  props: {
    transition: {
      type: String,
      default: "fade"
    },
    styles: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: "content"
    }
  },
  inject: ["nextStep", "prevStep", "possiblePrevStep", "possibleNextStep"],
  data() {
    return {
      displayed: false
    };
  }
};
</script>