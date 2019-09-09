//const Vue = require('vue');
const BS = require('./step.vue');
const BLC = require('./block-load-content.vue');
const BT = require('./block-test.vue');
const Img = require('./block-image.vue');
const BC = require('./block-content.vue');
module.exports = {
    Step: function (name = "Step") {
        return Object.assign(BS.default, { "name": name });
    },
    LoadContent: function (name = "block-load-content") {
        return Object.assign(BLC.default, { "name": name });
    },
    Content: function (name = "block-content") {
        return Object.assign(BC.default, { "name": name });
    },
    Test: function (name = "block-test") {
        return Object.assign(BT.default, { "name": name });
    },    
    Image: function (name = "block-image") {
        return Object.assign(Img.default, { "name": name });
    }
};
