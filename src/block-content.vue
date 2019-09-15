<template>
    <transition :name="transition">
        <div :style="styles" :class="classes" v-if="displayed">
          <slot :nextStep="stepNext" :prevStep="stepPrev" :possiblePrevStep="stepPrevPossible" :possibleNextStep="stepNextPossible" :toStep="stepTo" :toStepAttr="stepAttrTo" :stopAutoStep="autoStepStop" :countSteps="stepsCount" :currentStep="stepCurrent">
          </slot>
        </div>
    </transition>
</template>

<script>
const mixDisplayed = require('./displayed.mix.js');

export default {
  name: "block-content",
  mixins: [mixDisplayed.default],
  inject: ["nextStep", "prevStep", "possiblePrevStep", "possibleNextStep", "toStep", "toStepAttr", "stopAutoStep", "countSteps", "currentStep"],
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
    return {};
  },
  methods: {
    stepNext() {      
      this.nextStep();
    },
    stepPrev() {
      this.prevStep();
    },
    stepPrevPossible() {
      return this.possiblePrevStep();
    },
    stepNextPossible() {
      return this.possibleNextStep();
    },
    stepTo(i) {
      this.toStep(i);
    },
    stepAttrTo(atrName, atrVal) {
      this.toStepAttr(atrName, atrVal);
    },
    autoStepStop() {
      this.stopAutoStep(); 
    },
    stepsCount() {
      return this.countSteps();
    },
    stepCurrent() {
      return this.currentStep();
    }
  }
};
</script>