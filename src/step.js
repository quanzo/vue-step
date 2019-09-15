
module.exports = {
    Step: function (name = "Step") {
        const BS = require('./step.vue');
        return Object.assign(BS.default, { "name": name });
    },
    LoadContent: function (name = "block-load-content") {
        const BLC = require('./block-load-content.vue');
        return Object.assign(BLC.default, { "name": name });
    },
    Content: function (name = "block-content") {
        const BC = require('./block-content.vue');
        return Object.assign(BC.default, { "name": name });
    },
    Test: function (name = "block-test") {
        const BT = require('./block-test.vue');
        return Object.assign(BT.default, { "name": name });
    },    
    Image: function (name = "block-image") {
        const Img = require('./block-image.vue');
        return Object.assign(Img.default, { "name": name });
    },
    Indicate: function (name = "step-indicate") {
        const Indicate = require('./step-indicate.vue');
        return Object.assign(Indicate.default, { "name": name });
    },
    ButtonPrev: function (name = "button-prev") {
        const BtnPrev = require('./button-prev.vue');
        return Object.assign(BtnPrev.default, { "name": name });
    },
    ButtonNext: function (name = "button-next") {
        const BtnNext = require('./button-next.vue');
        return Object.assign(BtnNext.default, { "name": name });
    },
};
