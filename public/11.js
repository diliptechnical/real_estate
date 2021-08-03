(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/login.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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


__webpack_require__(/*! ../assets/css/style.dev.css */ "./resources/front/tcjstech/assets/css/style.dev.css");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    counter: counter
  },
  data: function data() {
    return {
      email: '',
      password: ''
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
  mounted: function mounted() {
    window.scrollTop(0);
  },
  methods: {
    login: function login() {
      //  var accessToken = localStorage.getItem("csrftoken");
      var vi = this; //       const headers = {
      //   'Accept': 'application/json',
      //   'Authorization':  'Bearer '+accessToken,
      // }

      var axios = __webpack_require__(/*! axios */ "../../nodevenv/public_html/realestate/10/lib/node_modules/axios/index.js");

      axios.get(this.$root.URL_ROOT + 'userlogin', {
        params: {
          username: this.email,
          password: this.password
        }
      }).then(function (response) {
        var data = response.data.data;
        console.log(response);

        if (response.data.status === 'success') {
          vi.token = data.access_token;
          vi.role = data.isAdmin;
          localStorage.setItem('user', data.id);
          localStorage.setItem('token', data.access_token);
          localStorage.setItem('isAdmin', data.role);
          localStorage.setItem('subscription', response.data.subscription);
          vi.$router.go('/');
          vi.$toasted.global.success({
            message: 'Success Please wait...'
          });
          window.location.href = 'myaccount';
        } else {
          vi.$toasted.global.error({
            message: 'Invalid id or password'
          });
        }
      }); // return false
    }
  }
});

/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/login.vue?vue&type=template&id=929d6c36&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/login.vue?vue&type=template&id=929d6c36& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c("h3", [_vm._v("Sign into your account")]),
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
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.password,
                      expression: "password"
                    }
                  ],
                  staticClass: "input-text",
                  attrs: {
                    type: "password",
                    name: "Password",
                    placeholder: "Password"
                  },
                  domProps: { value: _vm.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.password = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "checkbox" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "link-not-important pull-right",
                      attrs: { to: { name: "forgot" } }
                    },
                    [_vm._v("Forgot Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "clearfix" })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "button-md button-theme btn-block btn-3",
                    attrs: { type: "button" },
                    on: { click: _vm.login }
                  },
                  [_vm._v("login")]
                )
              ])
            ]
          )
        ]),
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
    return _c("div", { staticClass: "ez-checkbox pull-left" }, [
      _c("label", [
        _c("input", { staticClass: "ez-hide", attrs: { type: "checkbox" } }),
        _vm._v(
          "\n                            Remember me\n                        "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/front/tcjstech/views/login.vue":
/*!**************************************************!*\
  !*** ./resources/front/tcjstech/views/login.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_929d6c36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=929d6c36& */ "./resources/front/tcjstech/views/login.vue?vue&type=template&id=929d6c36&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/front/tcjstech/views/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_929d6c36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_929d6c36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/front/tcjstech/views/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/front/tcjstech/views/login.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/front/tcjstech/views/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/front/tcjstech/views/login.vue?vue&type=template&id=929d6c36&":
/*!*********************************************************************************!*\
  !*** ./resources/front/tcjstech/views/login.vue?vue&type=template&id=929d6c36& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_929d6c36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=929d6c36& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/login.vue?vue&type=template&id=929d6c36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_929d6c36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_929d6c36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);