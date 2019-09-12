<template>
    <transition :name="transition">
        <div :style="styles" :class="classes" v-if="possible" @click="action">
          
        </div>
    </transition>
</template>

<script>
export default {
  name: "button-prev",
  inject: ["possiblePrevStep", "registerEventListener", "prevStep"],
  data() {
    return {
      possible: false
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
.button-prev{  
    }
    .button-prev:before{
        content: "Prev"
    }
</style>