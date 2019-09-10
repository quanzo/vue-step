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
    },
    beforeRequest: {
      type: Function,
      default: function(component, reqParams) {
        return true;
      }
    },
    successRequest: {
      type: Function,
      default: function(component) {}
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
        show: false,
        content: "",
        loadedContent: false
      }
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

        var reqParams = {
          method: this.reqmethod,
          url: url2req,
          body: params
        }
        var allowed = this.beforeRequest(this, reqParams);
        if (allowed) {          
          request.open(reqParams.method, reqParams.url, true);
          request.onprogress = function(event) {
            var out = "Loading ";
            if (event.lengthComputable) {
              let progressBarCount = 10;
              let progress = Math.ceil(event.loaded/(event.total/progressBarCount));              
              for (var i = 0; i<progressBarCount; i++) {
                if (i<progress) {
                  out += "■";
                } else {
                  out += "□";
                }
              }
              if (block.params.content != out) {
                block.params.content = out;
              }
            } else {
              out = "Loading...";
              if (block.params.content != out) {
                block.params.content = out;
              }
            }
          };
          request.onload = function() {
            if (request.status == 200) {
              block.params.loadedContent = true;
              block.successRequest(block);
              block.params.content = request.responseText;
            } else { // error
              console.log("Error request to "+reqParams.url+" "+request.status+" "+request.statusText);
              block.params.loadedContent = true;
              block.params.content = "";              
            }
          };          

          request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          request.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );

          if (reqParams.method.toLowerCase() == "get") {
            request.send();
          } else {
            request.send(reqParams.body);
          }
        }
      }
    }
  },
  reload() {
    this.params.loadedContent = false;
  }
};
</script>