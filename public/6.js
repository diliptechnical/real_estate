(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/details.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/details.vue?vue&type=script&lang=js& ***!
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
// import { store } from '@/store/store'
// import counter from './components/counter'

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],
  name: 'Detail',
  components: {
    counter: counter
  },
  data: function data() {
    return {
      isLoad: false,
      statedata: [],
      parent: [],
      details: [],
      ids: this.$route.params.id,
      detail: null
    };
  },
  metaInfo: function metaInfo() {
    return {
      //detail: [],
      title: this.details.meta_title,
      meta: [{
        name: 'description',
        content: this.details.meta_description
      }, {
        name: 'keywords',
        content: this.details.meta_keywords
      }]
    };
  },
  mounted: function mounted() {
    this.pageData();
  },
  watch: {
    '$route.params.id': function $routeParamsId(id) {
      // console.log(this.$route.params.linkname)
      this.ids = this.$route.params.id;
      this.pageData();
    }
  },
  methods: {
    pageData: function pageData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var ev, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ev = _this;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_this.$root.URL_ROOT + 'api.php?type=getDetail', {
                  id: _this.ids
                });

              case 3:
                response = _context.sent;

                // this.$store.commit('pageData', response.data)
                if (response.data) {
                  _this.isLoad = true;
                  _this.detail = response.data;
                  ev.details = response.data.data;
                }

                console.log('sssssssssssssssssssssssssssssssss');
                console.log(ev.details);

              case 7:
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

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/lib/css-base.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.li-cls li[data-v-46f5af3e]{\r\n    list-style: disc;\r\n    color: #b4d94f;\r\n    font-size: 16px;\n}\n.mg-top[data-v-46f5af3e]{\r\n  margin-top: 20px;\n}\n.img[data-v-46f5af3e]{height:180px;border:1px solid #fff;margin-bottom:50px;}\r\n", ""]);

// exports


/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader/index.js!../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/style-loader!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css&");

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

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/details.vue?vue&type=template&id=46f5af3e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/details.vue?vue&type=template&id=46f5af3e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.isLoad
    ? _c(
        "div",
        { staticClass: "services" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("section", { staticClass: "gallery-section bg-theme" }, [
            _c(
              "div",
              { staticClass: "vertical" },
              [
                _c("router-link", { attrs: { to: "/" } }, [_vm._v("7Square")]),
                _c("span", { staticClass: "destination" }, [
                  _vm._v("Our Services")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "container fpad  " },
              [
                _c(
                  "h2",
                  {
                    staticStyle: {
                      color: "#fff",
                      "text-align": "center",
                      "padding-bottom": "5px"
                    }
                  },
                  [_vm._v(" " + _vm._s(_vm.detail.parent) + " ")]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "wow fadeInUp animated col-sm-12",
                    staticStyle: {
                      "padding-bottom": "15px",
                      "padding-left": "0px",
                      "text-align": "center"
                    },
                    attrs: { align: "justify" }
                  },
                  [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.detail.data.heading) +
                        "\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._l(_vm.detail.image, function(im, key) {
                  return _c("div", { key: key, staticClass: "col-sm-3" }, [
                    _c("img", {
                      staticClass: "img",
                      attrs: {
                        src:
                          "https://7squarearchitecturalstudio.com/admin/uploads/pages/" +
                          im.image
                      }
                    })
                  ])
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("counter")
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "we_do" }, [_c("h2")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/front/tcjstech/views/details.vue":
/*!****************************************************!*\
  !*** ./resources/front/tcjstech/views/details.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _details_vue_vue_type_template_id_46f5af3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=46f5af3e&scoped=true& */ "./resources/front/tcjstech/views/details.vue?vue&type=template&id=46f5af3e&scoped=true&");
/* harmony import */ var _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js& */ "./resources/front/tcjstech/views/details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _details_vue_vue_type_style_index_0_id_46f5af3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css& */ "./resources/front/tcjstech/views/details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css&");
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _details_vue_vue_type_template_id_46f5af3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _details_vue_vue_type_template_id_46f5af3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46f5af3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/front/tcjstech/views/details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/front/tcjstech/views/details.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/front/tcjstech/views/details.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./details.vue?vue&type=script&lang=js& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/front/tcjstech/views/details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_46f5af3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader/index.js!../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/details.vue?vue&type=style&index=0&id=46f5af3e&scoped=true&lang=css&");
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_46f5af3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_46f5af3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_46f5af3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_id_46f5af3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/front/tcjstech/views/details.vue?vue&type=template&id=46f5af3e&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/details.vue?vue&type=template&id=46f5af3e&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_46f5af3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./details.vue?vue&type=template&id=46f5af3e&scoped=true& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/details.vue?vue&type=template&id=46f5af3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_46f5af3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_46f5af3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);