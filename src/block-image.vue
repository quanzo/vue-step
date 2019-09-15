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
const mixDisplayed = require('./displayed.mix.js');
export default {
  name: "block-image",
  mixins: [mixDisplayed.default],
  inject: ["nextStep", "prevStep", "possiblePrevStep", "possibleNextStep"],
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
    }
  },  
  data() {
    return {};
  }
};
</script>