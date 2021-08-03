(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/signup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/signup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../nodevenv/public_html/realestate/10/lib/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import counter from '@/components/counter'

__webpack_require__(/*! ../assets/css/style.dev.css */ "./resources/front/tcjstech/assets/css/style.dev.css");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    counter: counter
  },
  data: function data() {
    return {
      fields: {
        fullname: '',
        email: '',
        mobile: '',
        password: '',
        cpassword: ''
      }
    };
  },
  //     metaInfo () {
  //     return {
  //       //detail: [],
  //       title: this.detail.meta_title,
  //       meta: [
  //         { name: 'description', content: this.detail.meta_description },
  //         { name: 'keywords', content: this.detail.meta_keywords }
  //       ]
  //     }
  //   },
  mounted: function mounted() {},
  methods: {
    saveMe: function saveMe() {
      var _this = this;

      if (this.fields.fullname === '') {
        this.$toasted.global.error({
          message: 'Please enter FullName'
        });
      } else if (this.fields.email === '') {
        this.$toasted.global.error({
          message: 'Please enter Email'
        });
      } else if (this.fields.mobile === '') {
        this.$toasted.global.error({
          message: 'Please enter Valid Mobile'
        });
      } else if (this.fields.password === '') {
        this.$toasted.global.error({
          message: 'Please Select User Type'
        });
      } else if (this.fields.cpassword != this.fields.password) {
        this.$toasted.global.error({
          message: 'Password and Comfirm Password should be same'
        });
      } else {
        $.ajax({
          type: 'GET',
          url: this.$root.URL_ROOT + 'userregistration',
          data: this.fields,
          success: function success(data) {
            console.log(data.data);

            if (data.status === 'success') {
              localStorage.setItem('user', data.data.id);
              localStorage.setItem('token', data.data.api_token);

              _this.$router.go('/myaccount');

              _this.$toasted.global.success({
                message: 'Success Please wait...'
              });

              window.location.href = 'myaccount';
            } else {
              _this.$toasted.global.error({
                message: data
              });
            }
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/signup.vue?vue&type=template&id=6bd1dfcc&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/signup.vue?vue&type=template&id=6bd1dfcc& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "login-section" }, [
      _c("div", { staticClass: "form-content-box" }, [
        _c("div", { staticClass: "details" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix" }),
          _vm._v(" "),
          _c("h3", [_vm._v("Create an account")]),
          _vm._v(" "),
          _c("form", { attrs: { action: "#", method: "GET" } }, [
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.fullname,
                    expression: "fields.fullname"
                  }
                ],
                staticClass: "input-text",
                attrs: {
                  type: "text",
                  name: "fullname",
                  placeholder: "Full Name"
                },
                domProps: { value: _vm.fields.fullname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "fullname", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.mobile,
                    expression: "fields.mobile"
                  }
                ],
                staticClass: "input-text",
                attrs: {
                  type: "number",
                  name: "mobile",
                  placeholder: "Mobile Number"
                },
                domProps: { value: _vm.fields.mobile },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "mobile", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.email,
                    expression: "fields.email"
                  }
                ],
                staticClass: "input-text",
                attrs: {
                  type: "email",
                  name: "email",
                  placeholder: "Email Address"
                },
                domProps: { value: _vm.fields.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "email", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.password,
                    expression: "fields.password"
                  }
                ],
                staticClass: "input-text",
                attrs: {
                  type: "password",
                  name: "password",
                  placeholder: "Password"
                },
                domProps: { value: _vm.fields.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "password", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fields.cpassword,
                    expression: "fields.cpassword"
                  }
                ],
                staticClass: "input-text",
                attrs: {
                  type: "password",
                  name: "confirm_Password",
                  placeholder: "Confirm Password"
                },
                domProps: { value: _vm.fields.cpassword },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.fields, "cpassword", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "button-md button-theme btn-block btn-3",
                  attrs: { type: "button" },
                  on: { click: _vm.saveMe }
                },
                [_vm._v("Signup")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "footer" }, [
          _c(
            "span",
            [
              _vm._v("\n                Already a member? "),
              _c("router-link", { attrs: { to: { name: "login" } } }, [
                _vm._v("Login here")
              ])
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo" }, [
      _c("a", { attrs: { href: "/" } }, [
        _c("img", {
          attrs: { src: __webpack_require__(/*! ../assets/img/logos/logo.png */ "./resources/front/tcjstech/assets/img/logos/logo.png"), alt: "logo" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/front/tcjstech/views/signup.vue":
/*!***************************************************!*\
  !*** ./resources/front/tcjstech/views/signup.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signup_vue_vue_type_template_id_6bd1dfcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.vue?vue&type=template&id=6bd1dfcc& */ "./resources/front/tcjstech/views/signup.vue?vue&type=template&id=6bd1dfcc&");
/* harmony import */ var _signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.vue?vue&type=script&lang=js& */ "./resources/front/tcjstech/views/signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _signup_vue_vue_type_template_id_6bd1dfcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _signup_vue_vue_type_template_id_6bd1dfcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/front/tcjstech/views/signup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/front/tcjstech/views/signup.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/front/tcjstech/views/signup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./signup.vue?vue&type=script&lang=js& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/front/tcjstech/views/signup.vue?vue&type=template&id=6bd1dfcc&":
/*!**********************************************************************************!*\
  !*** ./resources/front/tcjstech/views/signup.vue?vue&type=template&id=6bd1dfcc& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_6bd1dfcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./signup.vue?vue&type=template&id=6bd1dfcc& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/signup.vue?vue&type=template&id=6bd1dfcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_6bd1dfcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_6bd1dfcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);