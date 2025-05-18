import { _ as __nuxt_component_0 } from './nuxt-link-DTW6NwUS.mjs';
import { ref, computed, withCtx, createTextVNode, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from 'vue/server-renderer';
import { ShoppingBagIcon } from '@heroicons/vue/24/outline';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import { u as useCartStore } from './cart-DISLLTsy.mjs';
import { useRouter } from 'vue-router';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';

const _sfc_main$3 = {
  __name: "EnderecoForm",
  __ssrInlineRender: true,
  props: ["modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-section" }, _attrs))} data-v-9312cb43><h2 data-v-9312cb43>Endere\xE7o de Entrega</h2><input${ssrRenderAttr("value", __props.modelValue.nome)} placeholder="Nome completo" data-v-9312cb43><input${ssrRenderAttr("value", __props.modelValue.rua)} placeholder="Rua" data-v-9312cb43><input${ssrRenderAttr("value", __props.modelValue.bairro)} placeholder="bairro" data-v-9312cb43><input${ssrRenderAttr("value", __props.modelValue.complemento)} placeholder="complemento" data-v-9312cb43><input${ssrRenderAttr("value", __props.modelValue.cidade)} placeholder="Cidade" data-v-9312cb43><input${ssrRenderAttr("value", __props.modelValue.estado)} placeholder="Estado" data-v-9312cb43><input${ssrRenderAttr("value", __props.modelValue.cep)} placeholder="CEP" data-v-9312cb43></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/EnderecoForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const EnderecoForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9312cb43"]]);
const _sfc_main$2 = {
  __name: "PagamentoForm",
  __ssrInlineRender: true,
  props: ["modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-section" }, _attrs))} data-v-e53dbcb8><h2 data-v-e53dbcb8>Pagamento</h2><select data-v-e53dbcb8><option value="" data-v-e53dbcb8${ssrIncludeBooleanAttr(Array.isArray(__props.modelValue.metodo) ? ssrLooseContain(__props.modelValue.metodo, "") : ssrLooseEqual(__props.modelValue.metodo, "")) ? " selected" : ""}>Escolha uma forma de pagamento</option><option value="credito" data-v-e53dbcb8${ssrIncludeBooleanAttr(Array.isArray(__props.modelValue.metodo) ? ssrLooseContain(__props.modelValue.metodo, "credito") : ssrLooseEqual(__props.modelValue.metodo, "credito")) ? " selected" : ""}>Cart\xE3o de Cr\xE9dito</option><option value="debito" data-v-e53dbcb8${ssrIncludeBooleanAttr(Array.isArray(__props.modelValue.metodo) ? ssrLooseContain(__props.modelValue.metodo, "debito") : ssrLooseEqual(__props.modelValue.metodo, "debito")) ? " selected" : ""}>Cart\xE3o de D\xE9bito</option><option value="pix" data-v-e53dbcb8${ssrIncludeBooleanAttr(Array.isArray(__props.modelValue.metodo) ? ssrLooseContain(__props.modelValue.metodo, "pix") : ssrLooseEqual(__props.modelValue.metodo, "pix")) ? " selected" : ""}>PIX</option></select>`);
      if (__props.modelValue.metodo === "credito" || __props.modelValue.metodo === "debito") {
        _push(`<input${ssrRenderAttr("value", __props.modelValue.nomeCartao)} placeholder="Nome do Cart\xE3o" data-v-e53dbcb8>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.modelValue.metodo === "credito" || __props.modelValue.metodo === "debito") {
        _push(`<input${ssrRenderAttr("value", __props.modelValue.numeroCartao)} placeholder="N\xFAmero do Cart\xE3o" data-v-e53dbcb8>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.modelValue.metodo === "credito" || __props.modelValue.metodo === "debito") {
        _push(`<input${ssrRenderAttr("value", __props.modelValue.validade)} placeholder="Validade (MM/AA)" data-v-e53dbcb8>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.modelValue.metodo === "credito" || __props.modelValue.metodo === "debito") {
        _push(`<input${ssrRenderAttr("value", __props.modelValue.cvv)} placeholder="CVV" data-v-e53dbcb8>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/PagamentoForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PagamentoForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e53dbcb8"]]);
const _sfc_main$1 = {
  __name: "ResumoPedido",
  __ssrInlineRender: true,
  props: {
    endereco: {
      type: Object,
      required: true
    },
    pagamento: {
      type: Object,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["confirmar"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-section" }, _attrs))} data-v-00f680d0><h2 data-v-00f680d0>Resumo do Pedido</h2><div class="resumo-content" data-v-00f680d0><div class="resumo-item" data-v-00f680d0><h3 data-v-00f680d0>Endere\xE7o de Entrega:</h3>`);
      if (__props.endereco.rua) {
        _push(`<!--[--><p data-v-00f680d0>${ssrInterpolate(__props.endereco.nome)}</p><p data-v-00f680d0>${ssrInterpolate(__props.endereco.rua)}, ${ssrInterpolate(__props.endereco.numero)} ${ssrInterpolate(__props.endereco.complemento ? "- " + __props.endereco.complemento : "")}</p><p data-v-00f680d0>${ssrInterpolate(__props.endereco.bairro)}, ${ssrInterpolate(__props.endereco.cidade)} - ${ssrInterpolate(__props.endereco.estado)}</p><p data-v-00f680d0>CEP: ${ssrInterpolate(__props.endereco.cep)}</p><!--]-->`);
      } else {
        _push(`<p class="empty-info" data-v-00f680d0>Nenhum endere\xE7o informado</p>`);
      }
      _push(`</div><div class="resumo-item" data-v-00f680d0><h3 data-v-00f680d0>M\xE9todo de Pagamento:</h3>`);
      if (__props.pagamento.metodo) {
        _push(`<!--[--><p data-v-00f680d0>${ssrInterpolate(__props.pagamento.metodo)}</p>`);
        if (__props.pagamento.metodo === "cartao") {
          _push(`<!--[--><p data-v-00f680d0>Cart\xE3o: **** **** **** ${ssrInterpolate(__props.pagamento.numeroCartao.slice(-4))}</p><p data-v-00f680d0>Validade: ${ssrInterpolate(__props.pagamento.validade)}</p><p data-v-00f680d0>Titular: ${ssrInterpolate(__props.pagamento.nomeCartao)}</p><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<p class="empty-info" data-v-00f680d0>Nenhum m\xE9todo selecionado</p>`);
      }
      _push(`</div><div class="resumo-item total-section" data-v-00f680d0><h3 data-v-00f680d0>Total do Pedido:</h3><p class="total-value" data-v-00f680d0>R$ ${ssrInterpolate(__props.total.toFixed(2))}</p></div></div><button${ssrIncludeBooleanAttr(__props.loading) ? " disabled" : ""} class="${ssrRenderClass({ "loading-button": __props.loading })}" data-v-00f680d0>`);
      if (!__props.loading) {
        _push(`<span data-v-00f680d0>Confirmar Compra</span>`);
      } else {
        _push(`<span data-v-00f680d0>Processando...</span>`);
      }
      _push(`</button>`);
      if (__props.loading) {
        _push(`<div class="loading-overlay" data-v-00f680d0><div class="loading-spinner" data-v-00f680d0></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/ResumoPedido.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ResumoPedido = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-00f680d0"]]);
const _sfc_main = {
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCartStore();
    const router = useRouter();
    const loading = ref(false);
    const { $toast } = useNuxtApp();
    const cartCount = computed(
      () => cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );
    const endereco = ref({
      nome: "",
      rua: "",
      cidade: "",
      cep: "",
      estado: "",
      bairro: "",
      complemento: ""
    });
    const pagamento = ref({
      metodo: "",
      nomeCartao: "",
      numeroCartao: "",
      validade: "",
      cvv: ""
    });
    const enderecoErrors = ref({});
    const pagamentoErrors = ref({});
    const total = computed(
      () => cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    function validarCEP(cep) {
      const cepRegex = /^\d{5}-?\d{3}$/;
      return cepRegex.test(cep);
    }
    function validarNumeroCartao(numero) {
      const cleaned = numero.replace(/\s+/g, "");
      return /^\d{13,16}$/.test(cleaned);
    }
    function validarCVV(cvv) {
      return /^\d{3,4}$/.test(cvv);
    }
    function validarValidade(validade) {
      if (!/^\d{2}\/\d{2}$/.test(validade)) return false;
      const [mes, ano] = validade.split("/");
      const now = /* @__PURE__ */ new Date();
      const currentYear = now.getFullYear() % 100;
      const currentMonth = now.getMonth() + 1;
      return ano > currentYear || ano == currentYear && mes >= currentMonth;
    }
    function validarCampos() {
      let valido = true;
      enderecoErrors.value = {};
      pagamentoErrors.value = {};
      if (!endereco.value.nome) {
        enderecoErrors.value.nome = "Nome \xE9 obrigat\xF3rio";
        valido = false;
      }
      if (!endereco.value.rua) {
        enderecoErrors.value.rua = "Rua \xE9 obrigat\xF3ria";
        valido = false;
      }
      if (!endereco.value.cidade) {
        enderecoErrors.value.cidade = "Cidade \xE9 obrigat\xF3ria";
        valido = false;
      }
      if (!endereco.value.cep) {
        enderecoErrors.value.cep = "CEP \xE9 obrigat\xF3rio";
        valido = false;
      } else if (!validarCEP(endereco.value.cep)) {
        enderecoErrors.value.cep = "CEP inv\xE1lido (formato: 00000-000 ou 00000000)";
        valido = false;
      }
      if (!endereco.value.estado) {
        enderecoErrors.value.estado = "Estado \xE9 obrigat\xF3rio";
        valido = false;
      }
      if (!pagamento.value.metodo) {
        pagamentoErrors.value.metodo = "M\xE9todo de pagamento \xE9 obrigat\xF3rio";
        valido = false;
      }
      if (pagamento.value.metodo === "cartao") {
        if (!pagamento.value.nomeCartao) {
          pagamentoErrors.value.nomeCartao = "Nome no cart\xE3o \xE9 obrigat\xF3rio";
          valido = false;
        }
        if (!pagamento.value.numeroCartao) {
          pagamentoErrors.value.numeroCartao = "N\xFAmero do cart\xE3o \xE9 obrigat\xF3rio";
          valido = false;
        } else if (!validarNumeroCartao(pagamento.value.numeroCartao)) {
          pagamentoErrors.value.numeroCartao = "N\xFAmero do cart\xE3o inv\xE1lido";
          valido = false;
        }
        if (!pagamento.value.validade) {
          pagamentoErrors.value.validade = "Validade \xE9 obrigat\xF3ria";
          valido = false;
        } else if (!validarValidade(pagamento.value.validade)) {
          pagamentoErrors.value.validade = "Validade inv\xE1lida (formato: MM/AA) ou cart\xE3o expirado";
          valido = false;
        }
        if (!pagamento.value.cvv) {
          pagamentoErrors.value.cvv = "CVV \xE9 obrigat\xF3rio";
          valido = false;
        } else if (!validarCVV(pagamento.value.cvv)) {
          pagamentoErrors.value.cvv = "CVV inv\xE1lido (3 ou 4 d\xEDgitos)";
          valido = false;
        }
      }
      return valido;
    }
    async function confirmarCompra() {
      if (cart.items.length === 0) {
        $toast.error("Seu carrinho est\xE1 vazio. Adicione itens antes de finalizar a compra.");
        return;
      }
      if (!validarCampos()) {
        $toast.error("Por favor, corrija os erros no formul\xE1rio.");
        return;
      }
      loading.value = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        $toast.success("Compra finalizada com sucesso!");
        cart.clearCart();
        router.push("/success");
      } catch (error) {
        $toast.error("Ocorreu um erro ao processar sua compra. Tente novamente.");
        console.error(error);
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><header class="header" data-v-305bd1e4><label data-v-305bd1e4><a href="/" data-v-305bd1e4>Meu E-commerce</a></label><nav class="nav" data-v-305bd1e4>`);
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
              _push2(`<span class="cart-count" data-v-305bd1e4${_scopeId}>${ssrInterpolate(cartCount.value)}</span>`);
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
      _push(`</nav></header><div class="checkout-container" data-v-305bd1e4><h1 data-v-305bd1e4>Finalizar Compra</h1>`);
      _push(ssrRenderComponent(EnderecoForm, {
        modelValue: endereco.value,
        "onUpdate:modelValue": ($event) => endereco.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(PagamentoForm, {
        modelValue: pagamento.value,
        "onUpdate:modelValue": ($event) => pagamento.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(ResumoPedido, {
        endereco: endereco.value,
        pagamento: pagamento.value,
        total: total.value,
        onConfirmar: confirmarCompra
      }, null, _parent));
      _push(`<ul data-v-305bd1e4><h3 data-v-305bd1e4>Itens no Carrinho:</h3>`);
      if (unref(cart).items.length === 0) {
        _push(`<li data-v-305bd1e4>Seu carrinho est\xE1 vazio.</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(cart).items, (item) => {
        _push(`<li data-v-305bd1e4>${ssrInterpolate(item.title)} | Qtd: ${ssrInterpolate(item.quantity)} | R$ ${ssrInterpolate(item.price.toFixed(2))}</li>`);
      });
      _push(`<!--]--></ul></div><footer class="footer" data-v-305bd1e4><p data-v-305bd1e4>\xA9 2025 - Meu E-commerce</p></footer><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-305bd1e4"]]);

export { checkout as default };
//# sourceMappingURL=checkout-DWGxxrSO.mjs.map
