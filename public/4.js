(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/About.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/About.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../nodevenv/public_html/realestate/10/lib/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../../nodevenv/public_html/realestate/10/lib/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Partner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Partner */ "./resources/front/tcjstech/components/Partner.vue");
/* harmony import */ var _components_Testimonial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Testimonial */ "./resources/front/tcjstech/components/Testimonial.vue");
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/counter */ "./resources/front/tcjstech/components/counter.vue");


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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    counter: _components_counter__WEBPACK_IMPORTED_MODULE_4__["default"],
    Partner: _components_Partner__WEBPACK_IMPORTED_MODULE_2__["default"],
    Testimonial: _components_Testimonial__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      linkname: this.$route.params.name,
      detail: []
    };
  },
  metaInfo: function metaInfo() {
    return {
      //detail: [],
      title: this.detail.meta_title,
      meta: [{
        name: 'description',
        content: this.detail.meta_description
      }, {
        name: 'keywords',
        content: this.detail.meta_keywords
      }]
    };
  },
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_this.$root.URL_ROOT + 'aboutus');

              case 3:
                response = _context.sent;
                // this.$store.commit('pageData', response.data)
                ev.detail = response.data;
                console.log(response);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/lib/css-base.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mg-top[data-v-44c3ebe9]{\n  margin-top: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader/index.js!../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/style-loader!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css&");

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

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/About.vue?vue&type=template&id=44c3ebe9&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/About.vue?vue&type=template&id=44c3ebe9&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "sub-banner overview-bgi" }, [
        _c("div", { staticClass: "overlay" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "breadcrumb-area" }, [
              _c("h1", [_vm._v("About Us")]),
              _vm._v(" "),
              _c("ul", { staticClass: "breadcrumbs" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("li", { staticClass: "active" }, [
                  _vm._v(" " + _vm._s(_vm.detail.linkname) + " ")
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "about-city-estate mb-100" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" },
              [
                _c("div", { staticClass: "inside-properties pds-2" }, [
                  _c("iframe", {
                    staticClass: "modalIframe",
                    attrs: { src: _vm.detail.video, allowfullscreen: "" }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" },
              [
                _c("div", { staticClass: "about-text" }, [
                  _c("h3", [_vm._v(" " + _vm._s(_vm.detail.heading) + " ")]),
                  _vm._v(" "),
                  _c("p", { domProps: { innerHTML: _vm._s(_vm.detail.pbody) } })
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("Testimonial"),
      _vm._v(" "),
      _c("Partner")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Home")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/front/tcjstech/views/About.vue":
/*!**************************************************!*\
  !*** ./resources/front/tcjstech/views/About.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_44c3ebe9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=44c3ebe9&scoped=true& */ "./resources/front/tcjstech/views/About.vue?vue&type=template&id=44c3ebe9&scoped=true&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/front/tcjstech/views/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _About_vue_vue_type_style_index_0_id_44c3ebe9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css& */ "./resources/front/tcjstech/views/About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css&");
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_44c3ebe9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_44c3ebe9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44c3ebe9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/front/tcjstech/views/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/front/tcjstech/views/About.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/front/tcjstech/views/About.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/front/tcjstech/views/About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_44c3ebe9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader/index.js!../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/About.vue?vue&type=style&index=0&id=44c3ebe9&scoped=true&lang=css&");
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_44c3ebe9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_44c3ebe9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_44c3ebe9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_44c3ebe9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/front/tcjstech/views/About.vue?vue&type=template&id=44c3ebe9&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/About.vue?vue&type=template&id=44c3ebe9&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_44c3ebe9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=44c3ebe9&scoped=true& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/About.vue?vue&type=template&id=44c3ebe9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_44c3ebe9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_44c3ebe9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);