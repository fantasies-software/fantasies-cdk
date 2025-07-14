'use strict';

const vue = require('vue');

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {  };

function _sfc_render(_ctx, _cache) {
  return (vue.openBlock(), vue.createElementBlock("button", null, [
    vue.renderSlot(_ctx.$slots, "default")
  ]))
}
const Button = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

exports.Button = Button;
//# sourceMappingURL=Button.cjs.map
