"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_store_product_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/store/product/Show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/store/product/Show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { defineComponent } from '@vue/composition-api'
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "products",
  data: function data() {
    return {
      products: [],
      search: "",
      setTimeoutSearch: ''
    };
  },
  created: function created() {
    this.showProducts();
  },
  methods: {
    showProducts: function showProducts() {
      var _this = this;

      this.axios.get('/api/product', {
        params: {
          search: this.search
        }
      }).then(function (response) {
        _this.products = response.data;
      })["catch"](function (error) {
        _this.products = [];
      });
    },
    searchItem: function searchItem() {
      clearTimeout(this.setTimeoutSearch);
      this.setTimeoutSearch = setTimeout(this.showProduct, 360);
    },
    deleteCategory: function deleteCategory(id) {
      var _this2 = this;

      if (confirm('¿Desea borrar el registro?')) {
        this.axios["delete"]("/api/product/".concat(id)).then(function (response) {
          _this2.showProduct();
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/store/product/Show.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/store/product/Show.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_b6002294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=b6002294& */ "./resources/js/components/store/product/Show.vue?vue&type=template&id=b6002294&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/store/product/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_b6002294___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_b6002294___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/store/product/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/store/product/Show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/store/product/Show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/store/product/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/store/product/Show.vue?vue&type=template&id=b6002294&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/store/product/Show.vue?vue&type=template&id=b6002294& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_b6002294___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_b6002294___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_b6002294___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=b6002294& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/store/product/Show.vue?vue&type=template&id=b6002294&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/store/product/Show.vue?vue&type=template&id=b6002294&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/store/product/Show.vue?vue&type=template&id=b6002294& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-6 mb-4" }, [
        _c(
          "h3",
          { staticClass: "mt-5" },
          [
            _vm._v("Productos  \n                "),
            _c(
              "router-link",
              { staticClass: "btn btn-info", attrs: { to: "/product/create" } },
              [_c("i", { staticClass: "fas fa-plus" })]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "d-flex",
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.searchItem.apply(null, arguments)
              },
            },
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.search,
                  expression: "search",
                },
              ],
              staticClass: "form-control me-2",
              attrs: {
                type: "search",
                placeholder: "Search",
                "aria-label": "Search",
              },
              domProps: { value: _vm.search },
              on: {
                keyup: _vm.searchItem,
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                },
              },
            }),
            _vm._v(" "),
            _vm._m(0),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c("table", { staticClass: "table table-success table-striped" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.products, function (product) {
                return _c("tr", { key: product.id }, [
                  _c("td", [_vm._v(_vm._s(product.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(product.code))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(product.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(product.description))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(product.stock))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(product.status))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(product.category_id))]),
                  _vm._v(" "),
                  _vm._m(2, true),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-warning",
                          attrs: {
                            to: {
                              name: "editProduct",
                              params: { id: product.id },
                            },
                          },
                        },
                        [_c("i", { staticClass: "fas fa-edit" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-danger",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.deleteProduct(product.id)
                            },
                          },
                        },
                        [_c("i", { staticClass: "fas fa-trash-alt" })]
                      ),
                    ],
                    1
                  ),
                ])
              }),
              0
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-success", attrs: { type: "submit" } },
      [_c("i", { staticClass: "fa fa-search" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "table-bordered" }, [
      _c("tr", [
        _c("th", [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", [_vm._v("Id. Categoría")]),
        _vm._v(" "),
        _c("th", [_vm._v("Imágen")]),
        _vm._v(" "),
        _c("th", [_vm._v("Opciones")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("img", { attrs: { src: "", alt: "" } })])
  },
]
render._withStripped = true



/***/ })

}]);