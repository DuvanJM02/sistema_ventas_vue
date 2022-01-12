"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shopping_supplier_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/supplier/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/supplier/Edit.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "editarSupplier",
  data: function data() {
    return {
      file: '',
      imgThumb: null,
      user: {
        name: null,
        email: null,
        password: null,
        current_password: null,
        document: null,
        n_document: null,
        location: null,
        phone: null,
        img_path: null,
        img_path2: null,
        role: 'supplier',
        status: 1
      },
      errors: []
    };
  },
  created: function created() {
    this.showData();
  },
  methods: {
    getImage: function getImage(e) {
      this.file = e.target.files[0];
      this.user.img_path2 = this.file;
      this.uploadImg(this.file);
    },
    uploadImg: function uploadImg(file) {
      var _this = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this.imgThumb = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    showData: function showData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.axios.get("/api/supplier/".concat(_this2.$route.params.id, "/edit")).then(function (response) {
                  _this2.user = response.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    edit: function edit() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append('name', _this3.user.name);
                formData.append('email', _this3.user.email);
                formData.append('password', _this3.user.password);
                formData.append('current_password', _this3.user.current_password);
                formData.append('document', _this3.user.document);
                formData.append('n_document', _this3.user.n_document);
                formData.append('location', _this3.user.location);
                formData.append('phone', _this3.user.phone);
                formData.append('status', _this3.user.status);
                formData.append('role', _this3.user.role);
                formData.append('img_path', _this3.user.img_path2);

                if (!(_this3.user.password == _this3.user.current_password)) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 15;
                return _this3.axios.post('/api/supplier/' + _this3.$route.params.id, formData).then(function (response) {
                  _this3.$router.push({
                    name: "indexSupplier"
                  });
                })["catch"](function (error) {
                  console.log(error);
                });

              case 15:
                _context2.next = 21;
                break;

              case 17:
                _this3.message = "Las contraseñas ingresadas no coinciden";
                _this3.user.password = '';
                _this3.user.current_password = '';
                return _context2.abrupt("return", _this3.message);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  computed: {
    imagen: function imagen() {
      return this.imgThumb;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/shopping/supplier/Edit.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/shopping/supplier/Edit.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_7896e131___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=7896e131& */ "./resources/js/components/shopping/supplier/Edit.vue?vue&type=template&id=7896e131&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/shopping/supplier/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_7896e131___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_7896e131___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shopping/supplier/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shopping/supplier/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shopping/supplier/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/supplier/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shopping/supplier/Edit.vue?vue&type=template&id=7896e131&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/shopping/supplier/Edit.vue?vue&type=template&id=7896e131& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7896e131___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7896e131___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_7896e131___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=7896e131& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/supplier/Edit.vue?vue&type=template&id=7896e131&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/supplier/Edit.vue?vue&type=template&id=7896e131&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shopping/supplier/Edit.vue?vue&type=template&id=7896e131& ***!
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-8" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                attrs: { enctype: "multipart/formdata" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.edit.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Nombre")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.name,
                        expression: "user.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", required: "", autofocus: "" },
                    domProps: { value: _vm.user.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "name", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "email" } }, [
                    _vm._v("Correo electrónico"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.email,
                        expression: "user.email",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "email", required: "" },
                    domProps: { value: _vm.user.email },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "email", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "password" } }, [
                    _vm._v("Contraseña"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.password,
                        expression: "user.password",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      name: "password",
                      id: "password",
                    },
                    domProps: { value: _vm.user.password },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "password", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "current-password" } }, [
                    _vm._v("Confirmar contraseña"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.current_password,
                        expression: "user.current_password",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      name: "current-password",
                      id: "current-password",
                    },
                    domProps: { value: _vm.user.current_password },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.user,
                          "current_password",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "document" } }, [
                    _vm._v("Tipo de documento"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.document,
                          expression: "user.document",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "document", id: "document", required: "" },
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
                          _vm.$set(
                            _vm.user,
                            "document",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "CC" } }, [
                        _vm._v("Cédula de ciudadanía"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "TI" } }, [
                        _vm._v("Tarjeta de identidad"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "CE" } }, [
                        _vm._v("Cédula de extranjería"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "NIT" } }, [
                        _vm._v("NIT"),
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "Pasaporte" } }, [
                        _vm._v("Pasaporte"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "n_document" } }, [
                    _vm._v("Número de documento"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.n_document,
                        expression: "user.n_document",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", required: "" },
                    domProps: { value: _vm.user.n_document },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "n_document", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "location" } }, [
                    _vm._v("Ubicación"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.location,
                        expression: "user.location",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { required: "" },
                    domProps: { value: _vm.user.location },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "location", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "phone" } }, [
                    _vm._v("Teléfono"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.phone,
                        expression: "user.phone",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "tel", required: "" },
                    domProps: { value: _vm.user.phone },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "phone", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mt-3" }, [
                  _c("label", { attrs: { for: "img_path" } }, [
                    _vm._v("Imágen"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "file", accept: "image/*" },
                    on: { change: _vm.getImage },
                  }),
                ]),
                _vm._v(" "),
                _vm._m(1),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", [
            _c("div", { staticClass: "card-header" }, [
              _c("h4", [_vm._v("Imágen anterior: " + _vm._s(_vm.user.name))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "a",
                {
                  attrs: {
                    href: "/img/users/" + _vm.user.img_path,
                    "data-fancybox": "image-1",
                    "data-caption": "Imágen anterior",
                  },
                },
                [
                  _c("img", {
                    attrs: {
                      src: "/img/users/" + _vm.user.img_path,
                      alt: _vm.user.name,
                      width: "100%",
                    },
                  }),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _vm.imagen
            ? _c("div", [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: _vm.imagen,
                        "data-fancybox": "image-1",
                        "data-caption": "Imágen nueva",
                      },
                    },
                    [
                      _c("img", {
                        attrs: { src: _vm.imagen, alt: "", width: "100%" },
                      }),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Actualizar usuario")]),
    ])
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
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Imágen nueva")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);