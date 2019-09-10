<template>
    <transition :name="transition">
      <div :style="styles" :class="classes" v-show="displayed">
        <img v-show="displayed && !url" :src="src" :title="title" :alt="alt" key="img">
        <a :href="url" :target="target" v-show="displayed && url" :title="title" key="link">
          <img :src="src" :title="title" :alt="alt">
        </a>
      </div>
    </transition>
</template>

<script>
export default {
  name: "block-image",
  props: {
    src: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: ""
    },
    target: {
      type: String,
      default: "_self"
    },
    title: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
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