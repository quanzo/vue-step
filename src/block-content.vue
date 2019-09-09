<template>
    <transition :name="transition">
        <div :style="styles" :class="classes" v-if="displayed"><slot></slot></div>
    </transition>
</template>

<script>
export default {
  name: "block-content",
  inject: ["nextStep", "prevStep", "possiblePrevStep", "possibleNextStep"],
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
  data() {
    return {
      params: {
        show: false        
      }
    };
  },
  computed: {
    displayed: {
      get() {
        return this.params.show;
      },
      set(v) {
        this.params.show = v;
      }
    }    
  }
};
</script>