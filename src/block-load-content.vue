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
    },
    reqmethod: {
      type: String,
      default: "GET"
    },
    reqparams: {
      type: Object,
      default: {}
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
        var params = "";
        if (this.reqparams) {
          for (var key in this.reqparams) {
            if (params) {
              params += "&";              
            }
            params += key + "=" + encodeURIComponent(this.reqparams[key]);
          }
        }
        var url2req = this.url;
        if (params && this.reqmethod.toLowerCase() == "get") {
          if (url2req.indexOf("?") != -1) {
            url2req += "&";
          } else {
            url2req += "?";
          }
          url2req += params;
        }
        
        request.open(this.reqmethod, url2req, true);
        request.addEventListener("readystatechange", function() {
          block.params.loadedContent = true;
          if (request.readyState == 4 && request.status == 200) {
            block.params.content = request.responseText;
          }
        });
        
        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        
        if (this.reqmethod.toLowerCase() == "get") {
          request.send();
        } else {
          request.send(params);
        }
        
      }
    }
  },
  reload() {
    this.params.loadedContent = false;
  }
};
</script>