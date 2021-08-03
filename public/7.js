(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/myaccount.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/myaccount.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../nodevenv/public_html/realestate/10/lib/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../../nodevenv/public_html/realestate/10/lib/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Partner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Partner */ "./resources/front/tcjstech/components/Partner.vue");


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
//
//
//
//
//
//
//
//
//

 // import counter from '../components/counter'

__webpack_require__(/*! ../assets/css/style.dev.css */ "./resources/front/tcjstech/assets/css/style.dev.css");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    counter: counter,
    Partner: _components_Partner__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      Allproducts: [],
      uid: localStorage.getItem("user"),
      detail: [],
      dashboard_box: "step-1",
      fields: {
        fullname: '',
        email: '',
        mobile: '',
        password: '',
        cpassword: ''
      },
      oldPass: '',
      newPass: '',
      cPass: '',
      ourPartners: []
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
    this.userDetail();
    this.getWishlist();
  },
  methods: {
    open_dashboard: function open_dashboard(vl) {
      this.dashboard_box = vl;
    },
    getWishlist: function getWishlist() {
      var axios = __webpack_require__(/*! axios */ "../../nodevenv/public_html/realestate/10/lib/node_modules/axios/index.js");

      var self = this;
      var ip_address = JSON.parse(localStorage.getItem('ip_address'));
      var user_session = JSON.parse(localStorage.getItem('user'));
      var uid = '';

      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }

      axios.get(this.$root.URL_ROOT + "getWhishlistProduct", {
        params: {
          uid: uid,
          ip_address: ip_address
        }
      }).then(function (response) {
        console.log(response);
        var data = response.data;
        self.Allproducts = data;
      });
    },
    userDetail: function userDetail() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var ev, uid, response, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ev = _this;
                uid = localStorage.getItem("user");
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_this.$root.URL_ROOT + "userDetails", {
                  params: {
                    uid: uid
                  }
                });

              case 4:
                response = _context.sent;
                console.log(response);
                data = response.data;

                if (response.status == 200) {
                  ev.detail = data;
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveMe: function saveMe() {
      var ev = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.$root.URL_ROOT + "savemydetail", {
        params: {
          id: ev.detail.id,
          name: ev.detail.name,
          mobile: ev.detail.mobile,
          email: ev.detail.email,
          aboutme: ev.detail.aboutme
        }
      }).then(function (response) {
        console.log(response);

        if (response.status == 200) {
          ev.$toasted.global.success({
            message: "Your Details Updated successfully"
          });
        }
      });
    },
    logout: function logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("latitude");
      localStorage.removeItem("longitude");
      this.$router.go("/");
      localStorage.removeItem("isAdmin");
    },
    changepassword: function changepassword() {
      var ev = this;

      if (this.newPass != this.cPass) {
        this.$toasted.global.error({
          message: 'Password and Comfirm Password should be same'
        });
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.$root.URL_ROOT + "changeuserpass", {
        params: {
          uid: ev.uid,
          oldPass: ev.oldPass,
          newPass: ev.newPass,
          cPass: ev.cPass
        }
      }).then(function (response) {
        console.log(response);

        if (response.data.status == 'success') {
          ev.$toasted.global.success({
            message: "Your Details Updated successfully"
          });
        } else {
          ev.$toasted.global.error({
            message: 'Password and Comfirm Password should be same'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/myaccount.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/myaccount.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/lib/css-base.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.side-bg{\r\n    background: #fff;\r\n    padding: 20px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader/index.js!../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/myaccount.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/style-loader!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/myaccount.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./myaccount.vue?vue&type=style&index=0&lang=css& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/myaccount.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader/lib/addStyles.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/myaccount.vue?vue&type=template&id=65a80106&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/myaccount.vue?vue&type=template&id=65a80106& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "content-areas my-profile" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-12" }, [
              _c("div", { staticClass: "user-account-box" }, [
                _c("div", { staticClass: "header clearfix" }, [
                  _c("h3", [_vm._v(" " + _vm._s(_vm.detail.name) + " ")]),
                  _vm._v(" "),
                  _c("p", [_vm._v(" " + _vm._s(_vm.detail.email) + " ")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "content" }, [
                  _c("ul", [
                    _c("li", [
                      _c(
                        "a",
                        {
                          class: _vm.dashboard_box == "step-1" ? "active" : "",
                          on: {
                            click: function($event) {
                              return _vm.open_dashboard("step-1")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "flaticon-social" }),
                          _vm._v("Profile\n                                ")
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          class: _vm.dashboard_box == "step-3" ? "active" : "",
                          on: {
                            click: function($event) {
                              return _vm.open_dashboard("step-3")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-heart" }),
                          _vm._v(
                            "Favorited Properties\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        {
                          class: _vm.dashboard_box == "step-2" ? "active" : "",
                          on: {
                            click: function($event) {
                              return _vm.open_dashboard("step-2")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "flaticon-security" }),
                          _vm._v(
                            "Change Password\n                                "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("a", { on: { click: _vm.logout } }, [
                        _c("i", { staticClass: "flaticon-sign-out-option" }),
                        _vm._v("Log Out\n                                ")
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.dashboard_box == "step-1"
              ? _c("div", { staticClass: "col-lg-8 col-md-8 col-sm-12" }, [
                  _c("div", { staticClass: "my-address" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("form", { attrs: { action: "", method: "GET" } }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Your Name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.name,
                              expression: "detail.name"
                            }
                          ],
                          staticClass: "input-text",
                          attrs: { type: "text", name: "your name" },
                          domProps: { value: _vm.detail.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.detail, "name", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Phone")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.mobile,
                              expression: "detail.mobile"
                            }
                          ],
                          staticClass: "input-text",
                          attrs: { type: "text", name: "phone" },
                          domProps: { value: _vm.detail.mobile },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detail,
                                "mobile",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.email,
                              expression: "detail.email"
                            }
                          ],
                          staticClass: "input-text",
                          attrs: { type: "email", name: "email" },
                          domProps: { value: _vm.detail.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.detail, "email", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("About Me")]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detail.aboutme,
                              expression: "detail.aboutme"
                            }
                          ],
                          staticClass: "input-text",
                          attrs: {
                            name: "message",
                            placeholder: _vm.detail.aboutme
                          },
                          domProps: { value: _vm.detail.aboutme },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detail,
                                "aboutme",
                                $event.target.value
                              )
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
                          on: { click: _vm.saveMe }
                        },
                        [_c("span", [_vm._v("Save Changes")])]
                      )
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.dashboard_box == "step-2"
              ? _c("div", { staticClass: "col-lg-8 col-md-8 col-sm-12" }, [
                  _c("div", { staticClass: "my-address" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("form", { attrs: { action: "", method: "GET" } }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Current Password")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.oldPass,
                              expression: "oldPass"
                            }
                          ],
                          staticClass: "input-text",
                          attrs: {
                            type: "password",
                            name: "current password",
                            placeholder: "Current Password"
                          },
                          domProps: { value: _vm.oldPass },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.oldPass = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("New Password")]),
                        _vm._v(" "),
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
                        _c("label", [_vm._v("Confirm New Password")]),
                        _vm._v(" "),
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
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.dashboard_box == "step-3"
              ? _c(
                  "div",
                  { staticClass: "col-lg-8 col-md-8 col-sm-12 side-bg" },
                  [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "table",
                      { staticClass: "manage-table responsive-table" },
                      [
                        _c(
                          "tbody",
                          _vm._l(_vm.Allproducts, function(allprod) {
                            return _c("tr", { key: allprod.id }, [
                              _c("td", { staticClass: "title-container" }, [
                                _c("img", {
                                  staticClass: "img-responsive",
                                  attrs: {
                                    src:
                                      _vm.$root.URL_ROOT +
                                      "uploads/property/" +
                                      allprod.front_image,
                                    alt: "properties"
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "title" }, [
                                  _c("h4", [
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(" " + _vm._s(allprod.name) + " ")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _c("i", {
                                      staticClass: "fa fa-map-marker"
                                    }),
                                    _vm._v(
                                      " " +
                                        _vm._s(allprod.location) +
                                        "," +
                                        _vm._s(allprod.state) +
                                        "," +
                                        _vm._s(allprod.city) +
                                        " "
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "action" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "PropertyDetail",
                                          params: { id: allprod.id }
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa  fa-eye-slash"
                                      }),
                                      _vm._v(" Details")
                                    ]
                                  )
                                ],
                                1
                              )
                            ])
                          }),
                          0
                        )
                      ]
                    )
                  ]
                )
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c("Partner", { attrs: { ourPartners: _vm.ourPartners } })
    ],
    1
  )
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
            _c("h1", [_vm._v("My Profile")]),
            _vm._v(" "),
            _c("ul", { staticClass: "breadcrumbs" }, [
              _c("li", [_c("a", { attrs: { href: "/" } }, [_vm._v("Home")])]),
              _vm._v(" "),
              _c("li", { staticClass: "active" }, [_vm._v("My Profile")])
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
    return _c("div", { staticClass: "main-title-2" }, [
      _c("h1", [_vm._v("My Account")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-title-2" }, [
      _c("h1", [_c("span", [_vm._v("Change")]), _vm._v(" Password")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-title-2" }, [
      _c("h1", [_c("span", [_vm._v("Favorited")]), _vm._v(" properties")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/front/tcjstech/views/myaccount.vue":
/*!******************************************************!*\
  !*** ./resources/front/tcjstech/views/myaccount.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myaccount_vue_vue_type_template_id_65a80106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myaccount.vue?vue&type=template&id=65a80106& */ "./resources/front/tcjstech/views/myaccount.vue?vue&type=template&id=65a80106&");
/* harmony import */ var _myaccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myaccount.vue?vue&type=script&lang=js& */ "./resources/front/tcjstech/views/myaccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _myaccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myaccount.vue?vue&type=style&index=0&lang=css& */ "./resources/front/tcjstech/views/myaccount.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _myaccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _myaccount_vue_vue_type_template_id_65a80106___WEBPACK_IMPORTED_MODULE_0__["render"],
  _myaccount_vue_vue_type_template_id_65a80106___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/front/tcjstech/views/myaccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/front/tcjstech/views/myaccount.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/front/tcjstech/views/myaccount.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_myaccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./myaccount.vue?vue&type=script&lang=js& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/myaccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_myaccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/front/tcjstech/views/myaccount.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/myaccount.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_myaccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./myaccount.vue?vue&type=style&index=0&lang=css& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader/index.js!../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/myaccount.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_myaccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_myaccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_myaccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_myaccount_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/front/tcjstech/views/myaccount.vue?vue&type=template&id=65a80106&":
/*!*************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/myaccount.vue?vue&type=template&id=65a80106& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_myaccount_vue_vue_type_template_id_65a80106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./myaccount.vue?vue&type=template&id=65a80106& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/myaccount.vue?vue&type=template&id=65a80106&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_myaccount_vue_vue_type_template_id_65a80106___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_myaccount_vue_vue_type_template_id_65a80106___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);