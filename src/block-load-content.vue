<template>
  <transition :name="transition">
    <div :style="styles" :class="classes" v-if="displayed" v-html="content"></div>
  </transition>
</template>

<script>
export default {
  name: "block-load-content",
  props: {
    url: {
      type: String,
      required: true
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
    return {
      params: {
        show: false,
        content: "",
        loadedContent: false
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
    },
    content() {
      var block = this;
      if (this.params.loadedContent) {
        return this.params.content;
      } else {
        // load content from url
        var request = new XMLHttpRequest();
        request.open("POST", this.url, true);
        request.addEventListener("readystatechange", function() {
          block.params.loadedContent = true;
          if (request.readyState == 4 && request.status == 200) {
            block.params.content = request.responseText;
          }
        });
        request.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        request.send();
      }
    }
  },
  reload() {
    this.params.loadedContent = false;
  }
};
</script>