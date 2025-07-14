import { createElementBlock, openBlock, renderSlot } from 'vue';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {  };

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("button", null, [
    renderSlot(_ctx.$slots, "default")
  ]))
}
const Button = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { Button as B };
//# sourceMappingURL=Button.js.map
