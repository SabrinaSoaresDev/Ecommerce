import { _ as __nuxt_component_0 } from './nuxt-link-DTW6NwUS.mjs';
import { ref, computed, withCtx, createTextVNode, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr } from 'vue/server-renderer';
import { ShoppingBagIcon } from '@heroicons/vue/24/outline';
import { u as useCartStore } from './cart-DISLLTsy.mjs';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';
import { useToast } from 'vue-toastification';
import { u as useHead } from './v3-CQqIGzt-.mjs';
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

const _sfc_main$3 = {
  __name: "CartSidebar",
  __ssrInlineRender: true,
  props: { visible: Boolean },
  setup(__props) {
    const cart = useCartStore();
    useRouter();
    const total = computed(
      () => cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-sidebar" }, _attrs))} data-v-127938af><div class="cart-header" data-v-127938af><h3 data-v-127938af>Seu Carrinho</h3><button data-v-127938af>\u2716</button></div>`);
        if (unref(cart).items.length === 0) {
          _push(`<div data-v-127938af><p data-v-127938af>O carrinho est\xE1 vazio.</p></div>`);
        } else {
          _push(`<div data-v-127938af><!--[-->`);
          ssrRenderList(unref(cart).items, (item) => {
            _push(`<div class="item" data-v-127938af><img${ssrRenderAttr("src", item.image)} alt="Produto" data-v-127938af><div class="details" data-v-127938af><p data-v-127938af>${ssrInterpolate(item.title)}</p><p data-v-127938af>R$ ${ssrInterpolate(item.price.toFixed(2))}</p><p data-v-127938af> Quantidade: <input type="number" min="1"${ssrRenderAttr("value", item.quantity)} data-v-127938af></p><button class="remove-btn" data-v-127938af>Remover</button></div></div>`);
          });
          _push(`<!--]--><p class="total" data-v-127938af>Total: R$ ${ssrInterpolate(total.value.toFixed(2))}</p></div>`);
        }
        _push(`<button class="finish-btn" data-v-127938af>Finalizar</button></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/CartSidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CartSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-127938af"]]);
function useProducts() {
  const products = ref([]);
  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      products.value = await res.json();
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }
  return {
    products,
    fetchProducts
  };
}
const _sfc_main$2 = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-11c0c71e><img${ssrRenderAttr("src", __props.product.image)} alt="Imagem do produto" class="product-image" data-v-11c0c71e><h3 class="product-title" data-v-11c0c71e>${ssrInterpolate(__props.product.title)}</h3><p class="product-price" data-v-11c0c71e>R$ ${ssrInterpolate(__props.product.price.toFixed(2))}</p><button class="add-to-cart" data-v-11c0c71e> Adicionar ao carrinho </button></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/ProductCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProductCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-11c0c71e"]]);
const _sfc_main$1 = {
  __name: "Filter",
  __ssrInlineRender: true,
  props: {
    categories: Array,
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const selected = ref(props.modelValue);
    watch(selected, (value) => {
      emit("update:modelValue", value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filter" }, _attrs))} data-v-2c67d68f><label for="category" data-v-2c67d68f>Filtrar por categoria:</label><select id="category" class="select" data-v-2c67d68f><option value="" data-v-2c67d68f${ssrIncludeBooleanAttr(Array.isArray(selected.value) ? ssrLooseContain(selected.value, "") : ssrLooseEqual(selected.value, "")) ? " selected" : ""}>Todas</option><!--[-->`);
      ssrRenderList(__props.categories, (cat) => {
        _push(`<option${ssrRenderAttr("value", cat)} data-v-2c67d68f${ssrIncludeBooleanAttr(Array.isArray(selected.value) ? ssrLooseContain(selected.value, cat) : ssrLooseEqual(selected.value, cat)) ? " selected" : ""}>${ssrInterpolate(cat)}</option>`);
      });
      _push(`<!--]--></select></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/Filter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Filter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2c67d68f"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showSidebar = ref(false);
    const cart = useCartStore();
    const { products } = useProducts();
    const selectedCategory = ref("");
    const toast = useToast();
    const cartCount = computed(
      () => cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );
    useHead({
      title: "Meu E-commerce"
    });
    function handleAddToCart(product) {
      cart.addToCart(product);
      showSidebar.value = true;
      try {
        toast.success(`${product.title} | Adicionado ao carrinho!`, {
          position: "top-left",
          timeout: 3e3,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: false
        });
      } catch (err) {
        toast.error("Erro ao adicionar o produto!", {
          position: "top-left",
          timeout: 2e3,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: false
        });
      }
    }
    const categories = computed(() => [
      ...new Set(products.value.map((p) => p.category))
    ]);
    const filteredProducts = computed(() => {
      if (!selectedCategory.value) return products.value;
      return products.value.filter((p) => p.category === selectedCategory.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><header data-v-b21612b0><div class="header" data-v-b21612b0><label data-v-b21612b0><a href="/" data-v-b21612b0>Meu E-commerce</a></label><nav class="nav" data-v-b21612b0>`);
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
              _push2(`<span class="cart-count" data-v-b21612b0${_scopeId}>${ssrInterpolate(cartCount.value)}</span>`);
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
      _push(`</nav></div></header><main class="content" data-v-b21612b0>`);
      _push(ssrRenderComponent(Filter, {
        categories: categories.value,
        modelValue: selectedCategory.value,
        "onUpdate:modelValue": ($event) => selectedCategory.value = $event
      }, null, _parent));
      _push(`<h1 class="title" data-v-b21612b0>Produtos</h1><hr class="divider" data-v-b21612b0><div class="grid" data-v-b21612b0><!--[-->`);
      ssrRenderList(filteredProducts.value, (product) => {
        _push(ssrRenderComponent(ProductCard, {
          key: product.id,
          product,
          onAddToCart: handleAddToCart
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(CartSidebar, {
        visible: showSidebar.value,
        onClose: ($event) => showSidebar.value = false
      }, null, _parent));
      _push(`</main><footer class="footer" data-v-b21612b0><p data-v-b21612b0>\xA9 2025 - Meu E-commerce</p></footer><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b21612b0"]]);

export { index as default };
//# sourceMappingURL=index-D9TfmSmc.mjs.map
