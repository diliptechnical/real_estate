(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Resetpassword.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/Resetpassword.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
 // import counter from '@/components/counter'

__webpack_require__(/*! ../assets/css/style.dev.css */ "./resources/front/tcjstech/assets/css/style.dev.css");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    counter: counter
  },
  data: function data() {
    return {
      email: '',
      password: '',
      newPass: '',
      cPass: ''
    };
  },
  mounted: function mounted() {},
  methods: {
    changepassword: function changepassword() {
      var ev = this;
      var forgetuser = localStorage.getItem('forgetuser');

      if (this.newPass != this.cPass) {
        this.$toasted.global.error({
          message: 'Password and Comfirm Password should be same'
        });
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.$root.URL_ROOT + "resetpassword", {
        params: {
          uid: forgetuser,
          newPass: ev.newPass,
          cPass: ev.cPass
        }
      }).then(function (response) {
        console.log(response);

        if (response.status == 200) {
          ev.$toasted.global.success({
            message: "Your Password Updated successfully"
          });
        } else {
          ev.$toasted.global.error({
            message: 'Password and Comfirm Password should be same'
          });
        }
      });
    },
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
        var data = response.data;
        console.log(response);

        if (response.status === 200) {
          vi.token = data[0].access_token;
          vi.role = data[0].isAdmin;
          localStorage.setItem('user', data[0].id);
          localStorage.setItem('token', data[0].access_token);
          localStorage.setItem('isAdmin', data[0].role);
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
      });
      return false;
    }
  }
});

/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Resetpassword.vue?vue&type=template&id=4d553274&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/Resetpassword.vue?vue&type=template&id=4d553274& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "my-address" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("form", { attrs: { action: "", method: "GET" } }, [
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newPass,
                      expression: "newPass"
                    }
                  ],
                  staticClass: "input-text",
                  attrs: {
                    type: "password",
                    name: "new-password",
                    placeholder: "New Password"
                  },
                  domProps: { value: _vm.newPass },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.newPass = $event.target.value
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
                      value: _vm.cPass,
                      expression: "cPass"
                    }
                  ],
                  staticClass: "input-text",
                  attrs: {
                    type: "password",
                    name: "confirm-new-password",
                    placeholder: "Confirm New Password"
                  },
                  domProps: { value: _vm.cPass },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.cPass = $event.target.value
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn-2 btn-defaults",
                  attrs: { type: "button" },
                  on: { click: _vm.changepassword }
                },
                [
                  _c("span", [_vm._v("Save Changes")]),
                  _vm._v(" "),
                  _c("i", { staticClass: "arrow" })
                ]
              )
            ])
          ])
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
    return _c("div", { staticClass: "main-title-2" }, [
      _c("h1", [_c("span", [_vm._v("Reset")]), _vm._v(" Password")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/front/tcjstech/views/Resetpassword.vue":
/*!**********************************************************!*\
  !*** ./resources/front/tcjstech/views/Resetpassword.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resetpassword_vue_vue_type_template_id_4d553274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resetpassword.vue?vue&type=template&id=4d553274& */ "./resources/front/tcjstech/views/Resetpassword.vue?vue&type=template&id=4d553274&");
/* harmony import */ var _Resetpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resetpassword.vue?vue&type=script&lang=js& */ "./resources/front/tcjstech/views/Resetpassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Resetpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Resetpassword_vue_vue_type_template_id_4d553274___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Resetpassword_vue_vue_type_template_id_4d553274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/front/tcjstech/views/Resetpassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/front/tcjstech/views/Resetpassword.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/front/tcjstech/views/Resetpassword.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Resetpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./Resetpassword.vue?vue&type=script&lang=js& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Resetpassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Resetpassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/front/tcjstech/views/Resetpassword.vue?vue&type=template&id=4d553274&":
/*!*****************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/Resetpassword.vue?vue&type=template&id=4d553274& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Resetpassword_vue_vue_type_template_id_4d553274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./Resetpassword.vue?vue&type=template&id=4d553274& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Resetpassword.vue?vue&type=template&id=4d553274&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Resetpassword_vue_vue_type_template_id_4d553274___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Resetpassword_vue_vue_type_template_id_4d553274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);