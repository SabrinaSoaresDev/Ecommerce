import { _ as __nuxt_component_0 } from './nuxt-link-DTW6NwUS.mjs';
import { computed, withCtx, createTextVNode, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { ShoppingBagIcon } from '@heroicons/vue/24/outline';
import { u as useCartStore } from './cart-DISLLTsy.mjs';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const cart2 = useCartStore();
    const goToCart = () => {
      router.push("/checkout");
    };
    const cartCount = computed(
      () => cart2.items.reduce((sum, item) => sum + item.quantity, 0)
    );
    const total = computed(
      () => cart2.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><header class="header" data-v-535568d5><label data-v-535568d5><a href="/" data-v-535568d5>Meu E-commerce</a></label><nav class="nav" data-v-535568d5>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ShoppingBagIcon), { class: "icon" }, null, _parent2, _scopeId));
            if (cartCount.value > 0) {
              _push2(`<span class="cart-count" data-v-535568d5${_scopeId}>${ssrInterpolate(cartCount.value)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(ShoppingBagIcon), { class: "icon" }),
              cartCount.value > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "cart-count"
              }, toDisplayString(cartCount.value), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></header><div class="cart-page" data-v-535568d5><h1 data-v-535568d5>Seu Carrinho</h1>`);
      if (unref(cart2).items.length === 0) {
        _push(`<div class="empty" data-v-535568d5><p data-v-535568d5>Seu carrinho est\xE1 vazio.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Voltar \xE0 loja`);
            } else {
              return [
                createTextVNode("Voltar \xE0 loja")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-535568d5><!--[-->`);
        ssrRenderList(unref(cart2).items, (item) => {
          _push(`<div class="cart-item" data-v-535568d5><img${ssrRenderAttr("src", item.image)} alt="imagem" data-v-535568d5><div class="info" data-v-535568d5><h3 data-v-535568d5>${ssrInterpolate(item.title)}</h3><p data-v-535568d5>Pre\xE7o: R$ ${ssrInterpolate(item.price.toFixed(2))}</p> Quantidade: <input type="number"${ssrRenderAttr("value", item.quantity)} min="1" data-v-535568d5><button data-v-535568d5>Remover</button></div></div>`);
        });
        _push(`<!--]--><div class="total" data-v-535568d5>Total: R$ ${ssrInterpolate(total.value.toFixed(2))}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/checkout",
          onClick: goToCart,
          class: "checkout-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Finalizar Compra`);
            } else {
              return [
                createTextVNode("Finalizar Compra")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div><footer class="footer" data-v-535568d5><p data-v-535568d5>\xA9 2025 - Meu E-commerce</p></footer><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-535568d5"]]);

export { cart as default };
//# sourceMappingURL=cart-CLJ4MzlU.mjs.map
