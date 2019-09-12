<template>
    <transition :name="transition">
        <div :style="styles" :class="classes">
          <ul class="step-indicate">
              <li v-for="cs in varCountSteps" :key = "cs">
                <span class="active" v-if="(cs-1) == varStep"></span>
                <span v-else @click="onToStep(cs-1)"></span>
              </li>
          </ul>
        </div>
    </transition>
</template>

<script>
export default {
  name: "step-indicate",
  inject: ["toStep", "countSteps", "currentStep", "registerEventListener", "nextStep", "prevStep"],
  data() {
    return {
      varStep: this.currentStep(),
      varCountSteps: this.countSteps()
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
      default: ""
    },
    sequential: {
        type: Boolean,
        default: true
    }
  },
  methods: {
    onStep(params) {
      this.varStep = params.to;
      this.varCountSteps = params.count;
    },
    onToStep(i) {
        if (this.sequential) {
            let cs = this.currentStep();
            let s = i - cs;
            if (s < 0) {
                for (var idx = 0; idx > s; idx--) {
                    this.prevStep();
                }
            } else {
                for (var idx = 0; idx < s; idx++) {
                    this.nextStep();
                }
            }
        } else {
            this.toStep(i);
        }        
    }
  },

  mounted() {
    this.$nextTick(function() {
      this.varStep = this.currentStep();
      this.varCountSteps = this.countSteps();
    });
    this.registerEventListener("event-step-to", this.onStep);
  }
};
</script>

<style>
ul.step-indicate {
  display: flex;
  justify-content: center;
  padding:0;
  margin: 1em 0;
}
ul.step-indicate:after {
  content: "";
  display: block;
  float: none;
  clear: both;
  height: 0;
}
ul.step-indicate li {
  list-style: none;
  float: left;
  font-size: 1.5em;
  margin: 0.3em;
  padding:0;
}
ul.step-indicate li span{
    cursor: pointer;
    display: block;
    width: 1em;
    height: 1em;
    line-height: 0;
    border: 0.1em solid #777;
    background-color: #eee;
}
ul.step-indicate li span.active{
    border: 0.1em solid #000;
    background-color: #fff;
}
</style>