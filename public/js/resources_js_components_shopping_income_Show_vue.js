"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shopping_income_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "showIncome",
  data: function data() {
    return {
      income: [],
      details: [],
      total: 0,
      income_print: null,
      errors: []
    };
  },
  created: function created() {
    this.showData();
    this.getIncomeStore();
  },
  methods: {
    showData: function showData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axios.get("/api/income/".concat(_this.$route.params.id)).then(function (response) {
                  _this.details = response.data.details;
                  _this.income = response.data.income;

                  for (var i = 0; i < _this.details.length; i++) {
                    _this.total += _this.details[i].quantity * _this.details[i].purchase_price;
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getIncomeStore: function getIncomeStore() {
      this.income_print = document.getElementsByTagName('meta').incomeprint.content;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/shopping/income/Show.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/shopping/income/Show.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_cea79f32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=cea79f32& */ "./resources/js/components/shopping/income/Show.vue?vue&type=template&id=cea79f32&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/shopping/income/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_cea79f32___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_cea79f32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shopping/income/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shopping/income/Show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/shopping/income/Show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shopping/income/Show.vue?vue&type=template&id=cea79f32&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/shopping/income/Show.vue?vue&type=template&id=cea79f32& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_cea79f32___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_cea79f32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_cea79f32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=cea79f32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Show.vue?vue&type=template&id=cea79f32&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Show.vue?vue&type=template&id=cea79f32&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Show.vue?vue&type=template&id=cea79f32& ***!
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
  return _c("div", { staticClass: "container mt-5" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("h4", [
              _c(
                "a",
                {
                  on: {
                    click: function ($event) {
                      return _vm.$router.go(-1)
                    },
                  },
                },
                [_c("i", { staticClass: "fas fa-arrow-left" })]
              ),
              _vm._v(
                "  \n                        Comprobante de ingreso N° " +
                  _vm._s(_vm.income.n_comprobante) +
                  "\n                        "
              ),
              _c("span", { staticClass: "float-end mr-3" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-warning",
                    attrs: {
                      href: _vm.income_print + "/" + _vm.income.id,
                      target: "_blank",
                    },
                  },
                  [_c("i", { staticClass: "fas fa-print" })]
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-3" }, [
                _c("strong", [_vm._v("Id:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.income.id))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3" }, [
                _c("strong", [_vm._v("Fecha:")]),
                _vm._v(" "),
                _c("p", [
                  _c("time", { attrs: { datetime: _vm.income.date } }, [
                    _vm._v(_vm._s(_vm.income.date)),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3" }, [
                _c("strong", [_vm._v("Nombre del proveedor:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.income.name))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3" }, [
                _c("strong", [_vm._v("Impuesto:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.income.tax) + "%")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4" }, [
                _c("strong", [_vm._v("Tipo de comprobante:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.income.t_comprobante))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4" }, [
                _c("strong", [_vm._v("Serie:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.income.s_comprobante))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4" }, [
                _c("strong", [_vm._v("Número de comprobante:")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.income.n_comprobante))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mt-3" }),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-striped table-bordered table-condensed table-hover",
                    attrs: { id: "details" },
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.details, function (detail) {
                        return _c("tr", { key: detail.id }, [
                          _c("td", [_vm._v(_vm._s(detail.product))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(detail.quantity))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v("$" + _vm._s(detail.purchase_price)),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$" + _vm._s(detail.sale_price))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "$" +
                                _vm._s(detail.quantity * detail.purchase_price)
                            ),
                          ]),
                        ])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "tfoot",
                      { staticStyle: { border: "1px solid cadetblue" } },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("th"),
                        _vm._v(" "),
                        _c("th"),
                        _vm._v(" "),
                        _c("th"),
                        _vm._v(" "),
                        _c("th", [
                          _c("h4", [
                            _vm._v(
                              "$\n                                            "
                            ),
                            _c("span", [_vm._v(_vm._s(_vm.total))]),
                            _vm._v(" "),
                            _c(
                              "abbr",
                              { attrs: { title: "Peso Colombiano" } },
                              [_vm._v("COP")]
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 text-center" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-warning",
                    attrs: {
                      href: _vm.income_print + "/" + _vm.income.id,
                      target: "_blank",
                    },
                  },
                  [
                    _c("i", { staticClass: "fas fa-print" }),
                    _vm._v(" Imprimir"),
                  ]
                ),
              ]),
            ]),
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
    return _c("thead", { staticStyle: { background: "cadetblue" } }, [
      _c("th", [_vm._v("Producto")]),
      _vm._v(" "),
      _c("th", [
        _vm._v("Cantidad "),
        _c("abbr", { attrs: { title: "Unidades" } }, [_vm._v("(Unds)")]),
      ]),
      _vm._v(" "),
      _c("th", [
        _vm._v("Precio compra "),
        _c("abbr", { attrs: { title: "Peso Colombiano" } }, [_vm._v("(COP)")]),
      ]),
      _vm._v(" "),
      _c("th", [
        _vm._v("Precio venta "),
        _c("abbr", { attrs: { title: "Peso Colombiano" } }, [_vm._v("(COP)")]),
      ]),
      _vm._v(" "),
      _c("th", [
        _vm._v("Subtotal "),
        _c("abbr", { attrs: { title: "Peso Colombiano" } }, [_vm._v("(COP)")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("strong", [_vm._v("TOTAL")])])
  },
]
render._withStripped = true



/***/ })

}]);