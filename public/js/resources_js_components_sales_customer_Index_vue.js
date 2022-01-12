"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_sales_customer_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  name: "customers",
  data: function data() {
    return {
      customers: [],
      search: "",
      setTimeoutSearch: '',
      errors: ''
    };
  },
  created: function created() {
    this.showCustomers();
  },
  methods: {
    showCustomers: function showCustomers() {
      var _this = this;

      this.axios.get('/api/customer', {
        params: {
          search: this.search
        }
      }).then(function (response) {
        _this.customers = response.data;
      })["catch"](function (error) {
        _this.errors = error;
        console.log(_this.errors);
      });
    },
    searchItem: function searchItem() {
      clearTimeout(this.setTimeoutSearch);
      this.setTimeoutSearch = setTimeout(this.showCustomers, 360);
    },
    deleteCustomer: function deleteCustomer(id) {
      var _this2 = this;

      if (confirm('¿Desea borrar el registro?')) {
        this.axios["delete"]("/api/customer/".concat(id)).then(function (response) {
          _this2.showCustomers();
        })["catch"](function (error) {
          _this2.errors = error;
          console.log(_this2.errors);
        });
      }
    },
    activateCustomer: function activateCustomer(id) {
      var _this3 = this;

      if (confirm('¿Desea activar el registro?')) {
        this.axios.post("/api/customer/activate/".concat(id)).then(function (response) {
          _this3.showCustomers();
        })["catch"](function (error) {
          _this3.errors = error;
          console.log(_this3.errors);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/sales/customer/Index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/sales/customer/Index.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_94710d22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=94710d22& */ "./resources/js/components/sales/customer/Index.vue?vue&type=template&id=94710d22&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/sales/customer/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_94710d22___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_94710d22___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sales/customer/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/sales/customer/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/sales/customer/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sales/customer/Index.vue?vue&type=template&id=94710d22&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/sales/customer/Index.vue?vue&type=template&id=94710d22& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_94710d22___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_94710d22___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_94710d22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=94710d22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Index.vue?vue&type=template&id=94710d22&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Index.vue?vue&type=template&id=94710d22&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Index.vue?vue&type=template&id=94710d22& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Clientes  \n                "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-info",
                attrs: { to: "/customer/create" },
              },
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
        _vm.customers == "" && !_vm.errors ? _c("div", [_vm._m(1)]) : _vm._e(),
        _vm._v(" "),
        _vm.errors ? _c("div", [_vm._m(2)]) : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            { staticClass: "table table-light table-striped align-middle" },
            [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.customers, function (customer) {
                  return _c("tr", { key: customer.id }, [
                    _c("td", [_vm._v(_vm._s(customer.id))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "inline",
                          attrs: {
                            href: "img/users/" + customer.img_path,
                            "data-fancybox": customer.name,
                            "data-caption": customer.name,
                          },
                        },
                        [
                          _c("img", {
                            staticClass: "rounded-circle",
                            attrs: {
                              src: "img/users/" + customer.img_path,
                              alt: customer.name,
                              width: "40rem",
                              height: "40rem",
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("strong", [_vm._v(_vm._s(customer.name))]),
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(customer.email))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(customer.document))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(customer.n_document))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(customer.location))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(customer.phone))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(customer.status))]),
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
                                name: "editCustomer",
                                params: { id: customer.id },
                              },
                            },
                          },
                          [_c("i", { staticClass: "fas fa-edit" })]
                        ),
                        _vm._v(" "),
                        customer.status
                          ? _c("div", { staticClass: "d-inline" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-danger",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.deleteCustomer(customer.id)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fas fa-eye-slash" })]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !customer.status
                          ? _c("div", { staticClass: "d-inline" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-success",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.activateCustomer(customer.id)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fas fa-eye" })]
                              ),
                            ])
                          : _vm._e(),
                      ],
                      1
                    ),
                  ])
                }),
                0
              ),
            ]
          ),
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
    return _c("div", [
      _c("div", { attrs: { id: "liveAlertPlaceholder" } }, [
        _c(
          "div",
          {
            staticClass: "alert alert-primary alert-alert-dismissible",
            attrs: { role: "alert" },
          },
          [
            _c("span", {
              staticClass: "spinner-border spinner-border-sm",
              attrs: { role: "status", "aria-hidden": "true" },
            }),
            _vm._v(
              "\n                            Cargando base de datos...\n                            "
            ),
            _c("span", { staticClass: "end" }, [
              _c("button", {
                staticClass: "btn-close",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "alert",
                  "aria-label": "Close",
                },
              }),
            ]),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { attrs: { id: "liveAlertPlaceholder slide-fade" } }, [
        _c(
          "div",
          {
            staticClass: "alert alert-danger alert-alert-dismissible",
            attrs: { role: "alert" },
          },
          [
            _c("i", { staticClass: "fas fa-exclamation-circle" }),
            _vm._v(
              "\n                            Error de conexión con la base de datos...\n                            "
            ),
            _c("span", { staticClass: "end" }, [
              _c("button", {
                staticClass: "btn-close",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "alert",
                  "aria-label": "Close",
                },
              }),
            ]),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "table-bordered" }, [
      _c("tr", [
        _c("th", [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Usuario")]),
        _vm._v(" "),
        _c("th", [_vm._v("Correo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Documento")]),
        _vm._v(" "),
        _c("th", [_vm._v("N° Documento")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ubicación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Teléfono")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", [_vm._v("Opciones")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);