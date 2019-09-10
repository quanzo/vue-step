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
    },
    onShow: {
      type: Function,
      default: function(component) {}
    },
    onHide: {
      type: Function,
      default: function(component) {}
    }
  },
  inject: ["nextStep", "prevStep", "possiblePrevStep", "possibleNextStep"],
  data() {
    return {
      displayed: false
    };
  },
  watch: {
    displayed(newVal, oldVal) {
      if (newVal != oldVal) {
        if (newVal) {
          this.onShow(this);
        } else {
          this.onHide(this);
        }
      }
    }
  }
};
</script>