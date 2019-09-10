<template>
    <div class="step">
      <slot></slot>
    </div>
</template>

<script>
export default {
//var VueStep  = {
//module.exports.Step = function(block_name = "Step") {
//  return {
    //module.exports.default = {  
    name: "Step",
    inject: ["nextStep", "prevStep", "toStep", "toStepAttr", "countSteps", "possiblePrevStep", "possibleNextStep", "stopAutoStep"],
    props: {
      autoStart: {
        type: Boolean,
        default: false
      },
      timeout: {
        type: Number,
        default: 15000
      },
      round: {
        type: Boolean,
        default: true
      },
      inc: {
        type: Number,
        default: 1
      },
      indexStart: {
        type: Number,
        default: 0
      },
      beforeTo: {
        type: Function,
        default: function(to, from, obj) {
          return true;
        }
      },
      afterTo: {
        type: Function,
        default: function(to, from, obj) {}
      }
    },
    data() {
      return {
        current: 0,
        timer: false,
        timermsec: 0,
        accepted: []
      };
    },
    methods: {
      next() {
        if (this.timer !== false) {
          clearTimeout(this.timer);
        }
        this.to(this.current + this.inc);
        if (this.timer !== false) {
          this.timer = false;
          if (this.autoStart) {
            this.intervalNext(this.timermsec);
          }
        }
      },
      prev() {
        if (this.timer !== false) {
          clearTimeout(this.timer);
        }
        this.to(this.current - this.inc);
        if (this.timer !== false) {
          this.timer = false;
          if (this.autoStart) {
            this.intervalPrev(this.timermsec);
          }
        }
      },
      to(i) {
        if (this.current != i) {
          let from = this.current;
          let to = i;
          if (this.beforeTo(to, from, this)) {
            let size = this.count();
            if (this.round) {
              i = i < 0 ? size - 1 : i > size - 1 ? 0 : i;
            } else {
              i = i < 0 ? 0 : i > size - 1 ? size - 1 : i;
            }
            if (this.current != i) {
              this.$children[this.accepted[this.current]].displayed = false;
              this.$children[this.accepted[i]].displayed = true;
              this.current = i;
              this.$emit("event-step-to", {"to": i, "from": from, "component": this});
              this.afterTo(i, from, this);
            }
          }
        }
      },
      toAttr(attributeName, attributeValue) {
        var stepper = this;
        var i = this.accepted.findIndex(function (element, index, array) {          
          let e = stepper.$children[element];
          if (typeof e.$attrs[attributeName] == "string") {
            return e.$attrs[attributeName] == attributeValue;
          }
          return false;
        });
        if (i != -1) {
          this.to(i);
        }
      },
      possiblePrev() {
        return this.round || this.current > 0;
      },
      possibleNext() {
        return (
          this.round || this.current == 0 || this.current < this.count() - 1
        );
      },
      count() {
        return this.accepted.length;
      },
      stop() {
        if (this.timer !== false) {
          clearTimeout(this.timer);
          this.timer = false;
        }
      },
      intervalNext: function(msec) {
        this.stop();
        var stepper = this;
        stepper.timermsec = msec;
        stepper.timer = setTimeout(function tick() {          
          //stepper.timermsec = 0;
          //stepper.timer = false;
          stepper.next();
          /*if (stepper.autoStart) {
                        stepper.timermsec = msec;
                        stepper.timer = setTimeout(tick, msec);
                    }*/
        }, msec);
      },
      intervalPrev: function(msec) {
        this.stop();
        var stepper = this;
        stepper.timermsec = msec;
        stepper.timer = setTimeout(function tick() {
          stepper.prev();
        }, msec);
      }
    },
    mounted() {
      var counter = 0;      
      this.current = this.indexStart;
      for (let i in this.$children) {
        let e = this.$children[i];
        if (typeof e.displayed != "undefined") {
          let status = counter == this.current;
          this.accepted[counter++] = i;
          if (status != e.displayed) {
            e.displayed = status;
          }
        }
      }
      if (this.autoStart) {
        this.intervalPrev(this.timeout);
      }

    },
    provide() {
      return {
        nextStep: this.next,
        prevStep: this.prev,
        toStep: this.to,
        toStepAttr: this.toAttr,
        countSteps: this.count,
        possiblePrevStep: this.possiblePrev,
        possibleNextStep: this.possibleNext,
        stopAutoStep: this.stop
      };
    }
    //render() {}
  };
//};
//export default Step;
//module.exports = VueStep;
//export default Step;
</script>
 
<style>
</style>