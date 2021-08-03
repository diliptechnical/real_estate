(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Contact.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/Contact.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../nodevenv/public_html/realestate/10/lib/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../../nodevenv/public_html/realestate/10/lib/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


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
 // import counter from './components/counter'

__webpack_require__(/*! ../assets/css/style.dev.css */ "./resources/front/tcjstech/assets/css/style.dev.css");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// counter
  },
  data: function data() {
    return {
      linkname: this.$route.params.name,
      detail: [],
      name: '',
      email: '',
      mobile: '',
      subject: '',
      msg: ''
    };
  },
  //   metaInfo () {
  //   return {
  //     //detail: [],
  //     title: this.detail.meta_title,
  //     meta: [
  //       { name: 'description', content: this.detail.meta_description },
  //       { name: 'keywords', content: this.detail.meta_keywords }
  //     ]
  //   }
  // },
  mounted: function mounted() {
    // this.linkData()
    this.pageDatas();
  },
  methods: {
    pageDatas: function pageDatas() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var ev, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ev = _this;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_this.$root.URL_ROOT + 'api.php?type=pageDatas', {
                  linkname: 'contact'
                });

              case 3:
                response = _context.sent;
                // this.$store.commit('pageData', response.data)
                ev.detail = response.data.data; // console.log(response.data.data)

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    contact_submits: function contact_submits() {
      var vi = this;

      if (this.msg == '') {
        this.$toasted.global.error({
          message: 'Please Write Some massage'
        });
      } else if (this.name == '') {
        this.$toasted.global.error({
          message: 'Please enter name'
        });
      } else if (this.subject == '') {
        this.$toasted.global.error({
          message: 'Please write Subject'
        });
      } else if (this.email == "") {
        this.$toasted.global.error({
          message: 'Please enter email'
        });
      } else if (this.mobile == "") {
        this.$toasted.global.error({
          message: 'Please enter mobile number'
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.$root.URL_ROOT + "contactsubmit", {
          params: {
            name: vi.name,
            email: vi.email,
            mobile: vi.mobile,
            subject: vi.subject,
            msg: vi.msg
          }
        }).then(function (response) {
          var data = response.data;
          console.log(response);

          if (data.status == 'success') {
            vi.$toasted.global.success({
              message: data.msg
            });
            vi.name = "";
            vi.email = "";
            vi.mobile = '';
          } else {
            vi.$toasted.global.error({
              message: data.msg
            });
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Contact.vue?vue&type=template&id=25f569fc&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/Contact.vue?vue&type=template&id=25f569fc& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "contact-1 content-area-7" }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-7 col-md-7 col-sm-12 col-xs-12" }, [
            _c("div", { staticClass: "contact-form" }, [
              _c(
                "form",
                {
                  attrs: {
                    id: "contact_form",
                    action: "#",
                    method: "GET",
                    enctype: "multipart/form-data"
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-12" },
                      [
                        _c("div", { staticClass: "form-group fullname" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name"
                              }
                            ],
                            staticClass: "input-text",
                            attrs: {
                              type: "text",
                              name: "full-name",
                              placeholder: "Full Name"
                            },
                            domProps: { value: _vm.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-12" },
                      [
                        _c("div", { staticClass: "form-group enter-email" }, [
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
                              placeholder: "Enter email"
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
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-12" },
                      [
                        _c("div", { staticClass: "form-group subject" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.subject,
                                expression: "subject"
                              }
                            ],
                            staticClass: "input-text",
                            attrs: {
                              type: "text",
                              name: "subject",
                              placeholder: "Subject"
                            },
                            domProps: { value: _vm.subject },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.subject = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-6 col-md-6 col-sm-6 col-xs-12" },
                      [
                        _c("div", { staticClass: "form-group number" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.mobile,
                                expression: "mobile"
                              }
                            ],
                            staticClass: "input-text",
                            attrs: {
                              type: "text",
                              name: "phone",
                              placeholder: "Phone Number"
                            },
                            domProps: { value: _vm.mobile },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.mobile = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "col-lg-12 col-md-12 col-sm-12 col-xs-12 clearfix"
                      },
                      [
                        _c("div", { staticClass: "form-group message" }, [
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.msg,
                                expression: "msg"
                              }
                            ],
                            staticClass: "input-text",
                            attrs: {
                              name: "message",
                              placeholder: "Write message"
                            },
                            domProps: { value: _vm.msg },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.msg = $event.target.value
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-lg-12 col-md-6 col-sm-12 col-xs-12" },
                      [
                        _c("div", { staticClass: "form-group send-btn mb-0" }, [
                          _c(
                            "button",
                            {
                              staticClass: "button-md button-theme btn-3",
                              attrs: { type: "button" },
                              on: { click: _vm.contact_submits }
                            },
                            [_vm._v("Send Message")]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(2)
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
    return _c("div", { staticClass: "sub-banner overview-bgi" }, [
      _c("div", { staticClass: "overlay" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "breadcrumb-area" }, [
            _c("h1", [_vm._v("Contact Us")]),
            _vm._v(" "),
            _c("ul", { staticClass: "breadcrumbs" }, [
              _c("li", [_c("a", { attrs: { href: "/" } }, [_vm._v("Home")])]),
              _vm._v(" "),
              _c("li", { staticClass: "active" }, [_vm._v("Contact Us")])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-title" }, [
      _c("h1", [_vm._v("Contact Us")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-5 col-md-5 col-sm-12 col-xs-12" }, [
      _c("div", { staticClass: "contact-details" }, [
        _c("div", { staticClass: "main-title-2" }, [
          _c("h3", [_vm._v("Our Address")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "media" }, [
          _c("div", { staticClass: "media-left" }, [
            _c("i", { staticClass: "fa fa-map-marker" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media-body" }, [
            _c("h4", [_vm._v("Office Address")]),
            _vm._v(" "),
            _c("p", [_vm._v("20/F Green Road, Dhanmondi, Dhaka")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "media" }, [
          _c("div", { staticClass: "media-left" }, [
            _c("i", { staticClass: "fa fa-phone" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media-body" }, [
            _c("h4", [_vm._v("Phone Number")]),
            _vm._v(" "),
            _c("p", [
              _c("a", { attrs: { href: "tel:0477-0477-8556-552" } }, [
                _vm._v("Office: 0477 8556 552")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "media" }, [
          _c("div", { staticClass: "media-left" }, [
            _c("i", { staticClass: "fa fa-envelope" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "media-body" }, [
            _c("h4", [_vm._v("Email Address")]),
            _vm._v(" "),
            _c("p", [
              _c("a", { attrs: { href: "mailto:info@themevessel.com" } }, [
                _vm._v("info@themevessel.com")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/front/tcjstech/views/Contact.vue":
/*!****************************************************!*\
  !*** ./resources/front/tcjstech/views/Contact.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_25f569fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=25f569fc& */ "./resources/front/tcjstech/views/Contact.vue?vue&type=template&id=25f569fc&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/front/tcjstech/views/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_25f569fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_25f569fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/front/tcjstech/views/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/front/tcjstech/views/Contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/front/tcjstech/views/Contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/front/tcjstech/views/Contact.vue?vue&type=template&id=25f569fc&":
/*!***********************************************************************************!*\
  !*** ./resources/front/tcjstech/views/Contact.vue?vue&type=template&id=25f569fc& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_25f569fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=25f569fc& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/Contact.vue?vue&type=template&id=25f569fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_25f569fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_25f569fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);