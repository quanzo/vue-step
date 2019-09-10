<template>
    <transition :name="transition">
        <div :style="styles" :class="classes" v-if="displayed">
          <slot :nextStep="stepNext" :prevStep="stepPrev" possiblePrevStep:="" :possibleNextStep="stepPrevPossible" :toStep="stepTo" :toStepAttr="stepAttrTo" :stopAutoStep="autoStepStop" :countSteps="stepsCount">              
          </slot>
        </div>
    </transition>
</template>

<script>
export default {
  name: "block-content",
  inject: ["nextStep", "prevStep", "possiblePrevStep", "possibleNextStep", "toStep", "toStepAttr", "stopAutoStep", "countSteps"],
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
  data() {
    return {
      params: {
        show: false        
      }
    };
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
    }
  },  
  computed: {
    displayed: {
      get() {
        return this.params.show;
      },
      set(v) {
        this.params.show = v;
      }
    },
    component() {
      return this;
    }
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