"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_sales_customer_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "createSupplier",
  data: function data() {
    return {
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
        role: 'customer',
        status: 1
      },
      imgThumb: null,
      message: null
    };
  },
  created: function created() {},
  methods: {
    getImage: function getImage(e) {
      var file = e.target.files[0];
      this.user.img_path = file;
      this.uploadImg(file);
    },
    uploadImg: function uploadImg(file) {
      var _this = this;

      var reader = new FileReader();

      reader.onload = function (e) {
        _this.imgThumb = e.target.result;
      };

      reader.readAsDataURL(file);
    } // async showCategory(){
    //     await this.axios.get('/api/product/create')
    //     .then(response=>{
    //         console.log(response.data)
    //         this.categories = response.data
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // },
    // async create(){
    //     let formData = new FormData();
    //     formData.append('name', this.user.name) 
    //     formData.append('email', this.user.email)
    //     formData.append('password', this.user.password)
    //     formData.append('current_password', this.user.current_password)
    //     formData.append('document', this.user.document)
    //     formData.append('n_document', this.user.n_document)
    //     formData.append('location', this.user.location)
    //     formData.append('phone', this.user.phone)
    //     formData.append('status', this.user.status)
    //     formData.append('role', this.user.role)
    //     formData.append('img_path', this.user.img_path)
    //     if(this.user.password == this.user.current_password){
    //         await this.axios.post('/api/customer', formData)
    //         .then(response=>{
    //              required(response.data)
    //             this.$router.push({name:"indexCustomer"})
    //         })
    //         .catch(error=>{
    //             console.log(error)
    //         })
    //     }else{
    //         this.message = "Las contraseñas ingresadas no coinciden"
    //         this.user.password = '';
    //         this.user.current_password = '';
    //         return this.message;
    //     }
    // },

  },
  computed: {
    imagen: function imagen() {
      return this.imgThumb;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/sales/customer/Create.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/sales/customer/Create.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_2adbff2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=2adbff2f& */ "./resources/js/components/sales/customer/Create.vue?vue&type=template&id=2adbff2f&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/sales/customer/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_2adbff2f___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_2adbff2f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sales/customer/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/sales/customer/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/sales/customer/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sales/customer/Create.vue?vue&type=template&id=2adbff2f&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/sales/customer/Create.vue?vue&type=template&id=2adbff2f& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2adbff2f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2adbff2f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2adbff2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=2adbff2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Create.vue?vue&type=template&id=2adbff2f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Create.vue?vue&type=template&id=2adbff2f&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sales/customer/Create.vue?vue&type=template&id=2adbff2f& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
            _c(
              "form",
              {
                attrs: { enctype: "multipart/form-data" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.create.apply(null, arguments)
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
                      required: "",
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
                      required: "",
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
        _vm.imagen
          ? _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h4", [_vm._v(_vm._s(_vm.user.name))]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body d-flex justify-content-center" },
                [
                  _c(
                    "a",
                    {
                      staticClass: "profile-photo",
                      attrs: { href: _vm.imagen, "data-fancybox": "imagen" },
                    },
                    [
                      _c("img", {
                        attrs: { src: _vm.imagen, alt: "", width: "100%" },
                      }),
                    ]
                  ),
                ]
              ),
            ])
          : _vm._e(),
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
      _c("h4", [_vm._v("Registrar proveedor")]),
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
]
render._withStripped = true



/***/ })

}]);