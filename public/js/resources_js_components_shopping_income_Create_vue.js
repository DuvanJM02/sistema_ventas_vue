"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shopping_income_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  name: "createIncome",
  data: function data() {
    return {
      csrf: null,
      income_store: null,
      user_id: '',
      t_comprobante: '',
      s_comprobante: '',
      n_comprobante: '',
      pproduct_id: '',
      pquantity: '',
      ppurchase_price: '',
      psale_price: '',
      producto: '',
      cont: 0,
      total: 0,
      subt: [],
      subtotal: [],
      users: [],
      i: '',
      products: [],
      product_id: null,
      quantity: null,
      purchase_price: null,
      sale_price: null,
      iproduct_id: [],
      iproduct: [],
      iquantity: [],
      ipurchase_price: [],
      isale_price: [],
      imgThumb: null,
      message: null,
      errors: ''
    };
  },
  created: function created() {
    this.showData();
    this.limpiar();
    this.getCsrf();
    this.getIncomeStore();
  },
  methods: {
    validar: function validar(e) {
      if (this.n_comprobante != "") {
        return true;
      }

      required;
      e.preventDefault();
    },
    getCsrf: function getCsrf() {
      this.csrf = document.getElementsByTagName('meta').csrf.content;
    },
    getIncomeStore: function getIncomeStore() {
      this.income_store = document.getElementsByTagName('meta').incomestore.content;
    },
    agregar: function agregar() {
      this.product_id = this.pproduct_id;

      if (!this.products[this.product_id - 1].product) {
        this.errors = "¡Debe rellenar todos los campos!";
        alert(this.errors);
      }

      this.producto = this.products[this.product_id - 1].product; // this.producto = this.$refs.producto.value

      this.quantity = this.pquantity;
      this.purchase_price = this.ppurchase_price;
      this.sale_price = this.psale_price;

      if (this.product_id != '' && this.quantity != '' && this.quantity > 0 && this.purchase_price != '' && this.sale_price != '') {
        if (this.purchase_price > this.sale_price) {
          alert("El precio de compra no puede ser mayor al precio de venta");
        } else {
          this.subt[this.cont] = this.quantity * this.purchase_price;
          this.total = this.total + this.subt[this.cont];
          this.iproduct_id.push(this.product_id);
          this.iproduct.push(this.producto);
          this.iquantity.push(this.quantity);
          this.ipurchase_price.push(this.purchase_price);
          this.isale_price.push(this.sale_price);
          this.subtotal.push(this.subt[this.cont]);
          this.cont++;
          this.limpiar();
        }
      } else {
        this.errors = "¡Debe rellenar todos los campos!";
      }
    },
    eliminar: function eliminar(index) {
      this.total = this.total - this.subtotal[index - 1];
      this.iproduct_id.splice(index - 1, 1);
      this.iproduct.splice(index - 1, 1);
      this.iquantity.splice(index - 1, 1);
      this.ipurchase_price.splice(index - 1, 1);
      this.isale_price.splice(index - 1, 1);
      this.subtotal.splice(index - 1, 1);
      $('#fila' + index).remove();
    },
    limpiar: function limpiar() {
      this.pquantity = '';
      this.ppurchase_price = '';
      this.psale_price = '';
    },
    showData: function showData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axios.get('/api/income/create').then(function (response) {
                  _this.users = response.data[0];
                  _this.products = response.data[1];
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    } // async create(){
    //     for (let i = 0; i < this.cont; i++) {
    //         this.iproduct_id.push(document.getElementsByName("iproduct_id")[i].value);
    //         this.iquantity.push(document.getElementsByName("iquantity")[i].value);
    //         this.ipurchase_price.push(document.getElementsByName("ipurchase_price")[i].value);
    //         this.isale_price.push(document.getElementsByName("isale_price")[i].value);
    //     }
    //     let formData = new FormData();
    //     formData.append('user_id', this.user_id)
    //     formData.append('t_comprobante', this.t_comprobante)
    //     formData.append('s_comprobante', this.s_comprobante)
    //     formData.append('n_comprobante', this.n_comprobante)
    //     formData.append('producto_id', this.iproduct_id)
    //     formData.append('quantity', this.iquantity)
    //     formData.append('purchase_price', this.ipurchase_price)
    //     formData.append('sale_price', this.isale_price)
    //     console.log(formData)
    //     await this.axios.post('/api/income', formData)
    //     .then(response=>{
    //         console.log(response.data)
    //         this.$router.push({name:"indexIncome"})
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // },

  },
  computed: {}
});

/***/ }),

/***/ "./resources/js/components/shopping/income/Create.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/shopping/income/Create.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_ff745b34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=ff745b34& */ "./resources/js/components/shopping/income/Create.vue?vue&type=template&id=ff745b34&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/shopping/income/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_ff745b34___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_ff745b34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shopping/income/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shopping/income/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shopping/income/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shopping/income/Create.vue?vue&type=template&id=ff745b34&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/shopping/income/Create.vue?vue&type=template&id=ff745b34& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_ff745b34___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_ff745b34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_ff745b34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=ff745b34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Create.vue?vue&type=template&id=ff745b34&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Create.vue?vue&type=template&id=ff745b34&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/income/Create.vue?vue&type=template&id=ff745b34& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c(
      "form",
      {
        attrs: { action: _vm.income_store, method: "POST" },
        on: { submit: _vm.validar },
      },
      [
        _c("input", {
          attrs: { type: "hidden", name: "_token" },
          domProps: { value: _vm.csrf },
        }),
        _vm._v(" "),
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
                    "  \n                            Crear ingreso\n                        "
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm.message
                  ? _c(
                      "div",
                      {
                        staticClass: "alert alert-danger",
                        attrs: { role: "alert" },
                      },
                      [_c("strong", [_vm._v(_vm._s(_vm.message))])]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "user_id" } }, [
                    _vm._v("Proveedor"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user_id,
                          expression: "user_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "user_id", id: "user_id", required: "" },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.user_id = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Seleccione un proveedor"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.users, function (user) {
                        return _c(
                          "option",
                          { key: user.id, domProps: { value: user.id } },
                          [_vm._v(_vm._s(user.id + ": " + user.name))]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "t_comprobante" } }, [
                    _vm._v("Tipo de comprobante"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.t_comprobante,
                          expression: "t_comprobante",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        name: "t_comprobante",
                        id: "t_comprobante",
                        required: "",
                      },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.t_comprobante = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Seleccione un tipo de comprobante"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "Boleta" } }, [
                        _vm._v("Boleta"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "Factura" } }, [
                        _vm._v("Factura"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "Tiquete" } }, [
                        _vm._v("Tiquete"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "s_comprobante" } }, [
                    _vm._v("Serie de comprobante"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.s_comprobante,
                        expression: "s_comprobante",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      name: "s_comprobante",
                      id: "s_comprobante",
                      required: "",
                    },
                    domProps: { value: _vm.s_comprobante },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.s_comprobante = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "n_comprobante" } }, [
                    _vm._v("N° de comprobante"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.n_comprobante,
                        expression: "n_comprobante",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      name: "n_comprobante",
                      id: "n_comprobante",
                      required: "",
                    },
                    domProps: { value: _vm.n_comprobante },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.n_comprobante = $event.target.value
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group mt-3 col-lg-3 col-md-6 col-sm-6 col-xs-12",
                    },
                    [
                      _c("label", { attrs: { for: "pproduct_id" } }, [
                        _vm._v("Producto"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.pproduct_id,
                              expression: "pproduct_id",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { id: "pproduct_id", name: "pproduct_id" },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.pproduct_id = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Seleccione un producto"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.products, function (product) {
                            return _c(
                              "option",
                              {
                                key: product.id,
                                domProps: { value: product.id },
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(
                                      product.id + " - " + product.product
                                    ) +
                                    "\n                                    "
                                ),
                              ]
                            )
                          }),
                        ],
                        2
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group mt-3 col-lg-3 col-md-6 col-sm-6 col-xs-12",
                    },
                    [
                      _c("label", { attrs: { for: "pquantity" } }, [
                        _vm._v("Cantidad"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pquantity,
                            expression: "pquantity",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number", min: "0" },
                        domProps: { value: _vm.pquantity },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.pquantity = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group mt-3 col-lg-3 col-md-6 col-sm-6 col-xs-12",
                    },
                    [
                      _c("label", { attrs: { for: "ppurchase_price" } }, [
                        _vm._v("Precio de compra"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ppurchase_price,
                            expression: "ppurchase_price",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number", min: "0" },
                        domProps: { value: _vm.ppurchase_price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.ppurchase_price = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group mt-3 col-lg-3 col-md-6 col-sm-6 col-xs-12",
                    },
                    [
                      _c("label", { attrs: { for: "psale_price" } }, [
                        _vm._v("Precio de venta"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.psale_price,
                            expression: "psale_price",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number", min: "0" },
                        domProps: { value: _vm.psale_price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.psale_price = $event.target.value
                          },
                        },
                      }),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "form-group my-3 col-lg-3 col-md-6 col-sm-6 col-xs-12",
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-warning",
                        attrs: { type: "button", id: "btn_Add" },
                        on: {
                          click: function ($event) {
                            return _vm.agregar()
                          },
                        },
                      },
                      [_vm._v("Agregar")]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-12" }, [
                  _vm.errors
                    ? _c("div", { staticClass: "my-3" }, [
                        _c("div", [
                          _c(
                            "div",
                            {
                              attrs: { id: "liveAlertPlaceholder slide-fade" },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "alert alert-danger alert-alert-dismissible",
                                  attrs: { role: "alert" },
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-exclamation-circle",
                                  }),
                                  _vm._v(
                                    "\n                                            " +
                                      _vm._s(_vm.errors) +
                                      "\n                                            "
                                  ),
                                  _vm._m(0),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ])
                    : _vm._e(),
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
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tfoot",
                          { staticStyle: { border: "1px solid cadetblue" } },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c("th"),
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
                                  "\n                                                $ "
                                ),
                                _vm.total == 0
                                  ? _c("span", { attrs: { id: "total" } }, [
                                      _vm._v(". 0"),
                                    ])
                                  : _c("span", { attrs: { id: "total" } }, [
                                      _vm._v(_vm._s(_vm.total)),
                                    ]),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.total,
                                    expression: "total",
                                  },
                                ],
                                attrs: { type: "hidden", name: "total" },
                                domProps: { value: _vm.total },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.total = $event.target.value
                                  },
                                },
                              }),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.cont, function (c) {
                            return _c(
                              "tr",
                              {
                                key: c,
                                staticClass: "selected",
                                attrs: { id: "fila" + c },
                              },
                              [
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.eliminar(c)
                                        },
                                      },
                                    },
                                    [_c("i", { staticClass: "fas fa-trash" })]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.iproduct_id[c - 1],
                                        expression: "iproduct_id[c-1]",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "hidden",
                                      name: "iproduct_id[]",
                                      required: "",
                                    },
                                    domProps: { value: _vm.iproduct_id[c - 1] },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.iproduct_id,
                                          c - 1,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(
                                    "\n                                                " +
                                      _vm._s(_vm.iproduct[c - 1]) +
                                      "\n                                            "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.iquantity[c - 1],
                                        expression: "iquantity[c-1]",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      name: "iquantity[]",
                                      required: "",
                                    },
                                    domProps: { value: _vm.iquantity[c - 1] },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.iquantity,
                                          c - 1,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.ipurchase_price[c - 1],
                                        expression: "ipurchase_price[c-1]",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      name: "ipurchase_price[]",
                                      required: "",
                                    },
                                    domProps: {
                                      value: _vm.ipurchase_price[c - 1],
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.ipurchase_price,
                                          c - 1,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.isale_price[c - 1],
                                        expression: "isale_price[c-1]",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      name: "isale_price[]",
                                      required: "",
                                    },
                                    domProps: { value: _vm.isale_price[c - 1] },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.isale_price,
                                          c - 1,
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                                $ " +
                                      _vm._s(_vm.subtotal[c - 1]) +
                                      "\n                                            "
                                  ),
                                ]),
                              ]
                            )
                          }),
                          0
                        ),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(3),
              ]),
            ]),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "end" }, [
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "alert",
          "aria-label": "Close",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticStyle: { background: "cadetblue" } }, [
      _c("th", [_vm._v("Opciones")]),
      _vm._v(" "),
      _c("th", [_vm._v("Producto")]),
      _vm._v(" "),
      _c("th", [_vm._v("Cantidad")]),
      _vm._v(" "),
      _c("th", [_vm._v("Precio compra")]),
      _vm._v(" "),
      _c("th", [_vm._v("Precio venta")]),
      _vm._v(" "),
      _c("th", [_vm._v("Subtotal")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("strong", [_vm._v("TOTAL")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group mt-3" }, [
      _c(
        "button",
        { staticClass: "btn btn-success", attrs: { type: "submit" } },
        [_vm._v("Guardar")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);