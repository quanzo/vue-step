export default {
    data() {
        return {
            displayed: this.display
        };
    },
    props: {
        display: {
            type: Boolean,
            default: false
        },
        onShow: {
            type: Function,
            default: function (component) { }
        },
        onHide: {
            type: Function,
            default: function (component) { }
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