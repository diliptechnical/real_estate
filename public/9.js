(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Forgot.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/Forgot.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//


__webpack_require__(/*! ../assets/css/style.dev.css */ "./resources/front/tcjstech/assets/css/style.dev.css");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    counter: counter
  },
  data: function data() {
    return {
      email: '',
      password: '',
      isNotOtp: true,
      isOtp: false,
      otp: ''
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
    resetpass: function resetpass() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.$root.URL_ROOT + 'checkotp', {
        params: {
          vcode: this.otp
        }
      }).then(function (response) {
        console.log(response.data);
        localStorage.setItem('forgetuser', response.data.id); //   self.$router.go('/ResetPassword')

        window.location.href = 'Resetpassword';
      });
    },
    forgot: function forgot() {
      var vi = this;

      var axios = __webpack_require__(/*! axios */ "../../nodevenv/public_html/realestate/10/lib/node_modules/axios/index.js");

      axios.get(this.$root.URL_ROOT + 'forgotpassword', {
        params: {
          email: this.email
        }
      }).then(function (response) {
        var data = response.data;
        console.log(response);

        if (response.status === 200) {
          vi.$toasted.global.success({
            message: 'OTP Sent to your email id please wait...'
          });
          vi.isNotOtp = false;
          vi.isOtp = true;
        } else {
          vi.$toasted.global.error({
            message: 'Invalid Email'
          });
        }
      });
      return false;
    }
  }
});

/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Forgot.vue?vue&type=template&id=223f9f12&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/Forgot.vue?vue&type=template&id=223f9f12& ***!
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
        _vm.isNotOtp
          ? _c("div", { staticClass: "details" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "clearfix" }),
              _vm._v(" "),
              _c("h3", [_vm._v("Reset Password")]),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: {
                    action:
                      "https://storage.googleapis.com/theme-vessel-items/checking-sites/nest-html/HTML/main/index.html",
                    method: "GET"
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email"
                        }
                      ],
                      staticClass: "input-text",
                      attrs: {
                        type: "email",
                        name: "email",
                        placeholder: "Email Address"
                      },
                      domProps: { value: _vm.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
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
                        on: { click: _vm.forgot }
                      },
                      [_vm._v("Send Mail")]
                    )
                  ])
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.isOtp
          ? _c("div", { staticClass: "details" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "clearfix" }),
              _vm._v(" "),
              _c("h3", [_vm._v("Reset Password")]),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: {
                    action:
                      "https://storage.googleapis.com/theme-vessel-items/checking-sites/nest-html/HTML/main/index.html",
                    method: "GET"
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.otp,
                          expression: "otp"
                        }
                      ],
                      staticClass: "input-text",
                      attrs: {
                        type: "text",
                        name: "otp",
                        placeholder: "Enter your OTP"
                      },
                      domProps: { value: _vm.otp },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.otp = $event.target.value
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
                        on: { click: _vm.resetpass }
                      },
                      [_vm._v("Send")]
                    )
                  ])
                ]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "footer" }, [
          _c(
            "span",
            [
              _vm._v("\n                Don't have an account? "),
              _c("router-link", { attrs: { to: { name: "signup" } } }, [
                _vm._v("Register here")
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
      _c("a", { attrs: { href: "index.html" } }, [
        _c("img", {
          attrs: { src: __webpack_require__(/*! ../assets/img/logos/logo.png */ "./resources/front/tcjstech/assets/img/logos/logo.png"), alt: "logo" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo" }, [
      _c("a", { attrs: { href: "index.html" } }, [
        _c("img", {
          attrs: { src: __webpack_require__(/*! ../assets/img/logos/logo.png */ "./resources/front/tcjstech/assets/img/logos/logo.png"), alt: "logo" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/front/tcjstech/views/Forgot.vue":
/*!***************************************************!*\
  !*** ./resources/front/tcjstech/views/Forgot.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Forgot_vue_vue_type_template_id_223f9f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forgot.vue?vue&type=template&id=223f9f12& */ "./resources/front/tcjstech/views/Forgot.vue?vue&type=template&id=223f9f12&");
/* harmony import */ var _Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forgot.vue?vue&type=script&lang=js& */ "./resources/front/tcjstech/views/Forgot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Forgot_vue_vue_type_template_id_223f9f12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Forgot_vue_vue_type_template_id_223f9f12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/front/tcjstech/views/Forgot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/front/tcjstech/views/Forgot.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/front/tcjstech/views/Forgot.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./Forgot.vue?vue&type=script&lang=js& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Forgot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/front/tcjstech/views/Forgot.vue?vue&type=template&id=223f9f12&":
/*!**********************************************************************************!*\
  !*** ./resources/front/tcjstech/views/Forgot.vue?vue&type=template&id=223f9f12& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_template_id_223f9f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./Forgot.vue?vue&type=template&id=223f9f12& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Forgot.vue?vue&type=template&id=223f9f12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_template_id_223f9f12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Forgot_vue_vue_type_template_id_223f9f12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);