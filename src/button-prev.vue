<template>
    <transition :name="transition">
        <div :style="styles" :class="buttonclass" v-if="possible" @click="action" @mouseover="hover" @mouseout="unhover"><slot></slot></div>
    </transition>
</template>

<script>
export default {
  name: "button-prev",
  inject: ["possiblePrevStep", "registerEventListener", "prevStep"],
  data() {
    return {
      possible: false,
      addClass: ""
    };
  },
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
      default: "button-prev"
    }    
  },
  methods: {
    onStep(params) {
      this.possible = this.possiblePrevStep();
    },
    action(i) {
        this.prevStep();        
    },
    hover() {
      this.addClass = "hover";
    },
    unhover() {
      this.addClass = "";
    }
  },
  computed: {
    buttonclass() {
      if (this.addClass && this.classes) {
        return this.classes+" "+this.addClass;
      }
      return this.addClass+this.classes;
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.possible = this.possiblePrevStep();      
    });
    this.registerEventListener("event-step-to", this.onStep);
  }
};
</script>
    

<style>
  
</style>