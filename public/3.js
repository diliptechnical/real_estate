(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../nodevenv/public_html/realestate/10/lib/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../../nodevenv/public_html/realestate/10/lib/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-owl-carousel */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-owl-carousel/dist/vue-owl-carousel.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_simple_range_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-simple-range-slider */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-simple-range-slider/dist/vueSimpleRangeSlider.common.js");
/* harmony import */ var vue_simple_range_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_simple_range_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_simple_range_slider_dist_vueSimpleRangeSlider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-simple-range-slider/dist/vueSimpleRangeSlider.css */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-simple-range-slider/dist/vueSimpleRangeSlider.css");
/* harmony import */ var vue_simple_range_slider_dist_vueSimpleRangeSlider_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_simple_range_slider_dist_vueSimpleRangeSlider_css__WEBPACK_IMPORTED_MODULE_4__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    counter: counter,
    carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default.a,
    VueSimpleRangeSlider: vue_simple_range_slider__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      floorplandone: false,
      id: this.$route.params.id,
      premiumfilter: false,
      normalfilter: false,
      range: [1, 10000000],
      number: 10,
      detail: [],
      name: '',
      email: '',
      mobile: '',
      address: '',
      msg: '',
      apartment_type: [],
      property_type: [],
      property_status: null
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
    this.mostViewed();
    this.showFilter(1);
  },
  watch: {
    'apartment_type': function apartment_type(oldVal, newVal) {
      if (oldVal != newVal) {
        this.searchByFilter();
      }
    },
    'property_type': function property_type(oldVal, newVal) {
      if (oldVal != newVal) {
        this.searchByFilter();
      }
    },
    'property_status': function property_status(oldVal, newVal) {
      if (oldVal != newVal) {
        this.searchByFilter();
      }
    }
  },
  methods: {
    searchprimiumFilter: function searchprimiumFilter() {},
    searchByFilter: function searchByFilter() {
      var vi = this;
      this.$router.push({
        name: 'Property'
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.$root.URL_ROOT + "searchfilter", {
        params: {
          apartment_type: vi.apartment_type,
          property_type: vi.property_type,
          property_status: vi.property_status,
          range: vi.range
        }
      }).then(function (response) {
        console.log('filterData', response);
      });
    },
    showFilter: function showFilter(id) {
      if (id == 1) {
        this.normalfilter = true;
        this.premiumfilter = false;
      } else {
        this.premiumfilter = true;
        this.normalfilter = false;
        this.$router.push({
          name: 'Property'
        });
      }
    },
    mostViewed: function mostViewed() {
      var ip_address = JSON.parse(localStorage.getItem('ip_address'));
      var user_session = localStorage.getItem('user');
      var uid = '';

      if (user_session != null) {
        uid = user_session;
      } else {
        uid = null;
      }

      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.$root.URL_ROOT + "mostview", {
        params: {
          id: self.id,
          uid: uid,
          ip_address: ip_address
        }
      }).then(function (response) {//   console.log(response);
      });
    },
    getFloor: function getFloor(data) {
      if (data) {
        return JSON.parse(data);
      }
    },
    pageDatas: function pageDatas() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.$root.URL_ROOT + 'getproperty/' + self.id).then(function (response) {
        console.log(response);
        self.detail = response.data;
        self.floorplandone = true;
      });
    },
    pageDatass: function pageDatass() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var ev, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ev = _this;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_this.$root.URL_ROOT + 'getproperty', {
                  id: ev.id
                });

              case 3:
                response = _context.sent;
                // this.$store.commit('pageData', response.data)
                ev.detail = response.data.data;
                console.log(response.data.data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    contact_submit: function contact_submit() {
      var vi = this;

      if (this.contact_type == '') {
        this.$toasted.global.error({
          message: 'Please select type'
        });
      } else if (this.name == '') {
        this.$toasted.global.error({
          message: 'Please enter name'
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
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://7squarearchitecturalstudio.com/admin/api.php?type=contact', {
          name: this.name,
          email: this.email,
          mobile: this.mobile,
          address: this.address,
          msg: this.msg
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
    },
    contact_submits: function contact_submits() {
      var vi = this;

      if (this.contact_type == '') {
        this.$toasted.global.error({
          message: 'Please select type'
        });
      } else if (this.name == '') {
        this.$toasted.global.error({
          message: 'Please enter name'
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
        alert(this.name);
        alert(this.email);
        alert(this.mobile);
        alert(this.address);
        alert(this.msg);
        axios__WEBPACK_IMPORTED_MODULE_1___default()({
          method: 'POST',
          url: this.$root.URL_ROOT + 'api.php',
          data: {
            type: 'contact',
            name: this.name,
            email: this.email,
            mobile: this.mobile,
            address: this.address,
            msg: this.msg
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

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/lib/css-base.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.control-group {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    background: #fff;\r\n    text-align: left;\r\n    box-shadow: 0 1px 2px rgb(0 0 0 / 10%);\r\n    padding: 0px 10px 10px 10px;\r\n    width: 94%;\r\n    height: auto;\r\n    margin: 10px;\n}\n.control {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n    font-size: 18px;\n}\nlabel {\r\n    cursor: default;\n}\n.control input {\r\n    position: absolute;\r\n    z-index: -1;\r\n    opacity: 0;\n}\n[type=checkbox], [type=radio] {\r\n    box-sizing: border-box;\r\n    padding: 0;\n}\nbutton, input {\n}\nbutton, input, optgroup, select, textarea {\r\n    font-family: sans-serif;\r\n    font-size: 100%;\r\n    line-height: 1.15;\r\n    margin: 0;\n}\nbutton, hr, input {\r\n    overflow: visible;\n}\nuser agent stylesheet\r\ninput[type=\"checkbox\" i] {\r\n    background-color: initial;\r\n    cursor: default;\r\n    -webkit-appearance: auto;\r\n       -moz-appearance: auto;\r\n            appearance: auto;\r\n    box-sizing: border-box;\r\n    margin: 3px 3px 3px 4px;\r\n    padding: initial;\r\n    border: initial;\n}\nuser agent stylesheet\r\ninput {\r\n    -webkit-writing-mode: horizontal-tb !important;\r\n    text-rendering: auto;\r\n    color: -internal-light-dark(black, white);\r\n    letter-spacing: normal;\r\n    word-spacing: normal;\r\n    text-transform: none;\r\n    text-indent: 0px;\r\n    text-shadow: none;\r\n    display: inline-block;\r\n    text-align: start;\r\n    -webkit-appearance: auto;\r\n       -moz-appearance: auto;\r\n            appearance: auto;\r\n    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));\r\n    -webkit-rtl-ordering: logical;\r\n    cursor: text;\r\n    margin: 0em;\r\n    font: 400 13.3333px Arial;\r\n    padding: 1px 2px;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));\r\n    -o-border-image: initial;\r\n       border-image: initial;\n}\n.control {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n    font-size: 18px;\n}\nlabel {\r\n    cursor: default;\n}\n.control input:checked ~ .control__indicator {\r\n    background: #95c41f;\n}\n.control__indicator {\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background: #e6e6e6;\n}\n.control input:checked ~ .control__indicator:after {\r\n    display: block;\n}\n.control--checkbox .control__indicator:after {\r\n    left: 8px;\r\n    top: 4px;\r\n    width: 3px;\r\n    height: 8px;\r\n    border: solid #fff;\r\n    border-width: 0 2px 2px 0;\r\n    transform: rotate(\r\n45deg\r\n);\n}\n.control__indicator:after {\r\n    content: '';\r\n    position: absolute;\r\n    display: none;\n}\n.filter-heading{\r\n    color: #969696;\r\n    font-size: 18px;\n}\n.apartment-type{\r\n    -moz-column-count: 3;\r\n         column-count: 3;\n}\n.apartment-btn{\r\n    background: #fff;\r\n    border: 1px solid #e6e6e6;\r\n    padding: 5px;\r\n    text-align: center;\r\n    width: auto;\r\n    margin-bottom: 10px;\n}\n.price-range{\r\n    margin: 20px 0;\n}\n.simple-range-slider .simple-range-slider-bg-bar{\r\n        margin: 60px 10px 20px 10px !important;\n}\n.property-status{\r\n    -moz-column-count: 1;\r\n         column-count: 1;\n}\n.sidebar-widgets {\r\n    padding: 0 0 0 0 !important;\r\n    margin-bottom: 0 !important;\n}\n.filter-btn{\r\n    width: 50%;\r\n    border-radius: 0;\r\n    padding: 12px 20px !important;\r\n    font-weight: bold;\n}\n.filter-active{\r\n    width: 50%;\r\n    background: #95c41f;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    box-shadow: 0px 2px 4px #b9b9b9;\r\n    padding: 12px 20px !important;\r\n    font-weight: bold;\n}\n.filter-active:hover{\r\n   width: 50%;\r\n    background: #95c41f;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    box-shadow: 0px 2px 4px #b9b9b9;\r\n    padding: 12px 20px !important;\r\n    font-weight: bold;\n}\n.btn-default.focus, .btn-default:focus{\r\n   width: 50%;\r\n    background: #95c41f;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    box-shadow: 0px 2px 4px #b9b9b9;\r\n    padding: 12px 20px !important;\r\n    font-weight: bold;\n}\n.price-span{\r\n  border: 1px solid #fafafa;\r\n  padding: 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader/index.js!../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/style-loader!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./PropertyDetail.vue?vue&type=style&index=0&lang=css& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=style&index=0&lang=css&");

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

/***/ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=template&id=312e565a&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/fnzhqoqa/nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=template&id=312e565a& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "content-area properties-details-page" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-8 col-md-8 col-sm-12 col-xs-12" }, [
            _c(
              "div",
              { staticClass: "heading-properties clearfix sidebar-widget sw2" },
              [
                _c("div", { staticClass: "pull-left" }, [
                  _c("h3", [_vm._v(_vm._s(_vm.detail.name))]),
                  _vm._v(" "),
                  _c("p", [
                    _c("i", { staticClass: "fa fa-map-marker" }),
                    _vm._v(" " + _vm._s(_vm.detail.location))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pull-right" }, [
                  _c("h3", [
                    _c("span", [
                      _vm._v(" INR " + _vm._s(_vm.detail.deposite_price) + " ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h5", [_vm._v("Per Manth")])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "Properties-details-section sidebar-widget sw2" },
              [
                _c(
                  "div",
                  {
                    staticClass: "properties-detail-slider simple-slider mb-40"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "carousel slide",
                        attrs: {
                          id: "carousel-custom",
                          "data-ride": "carousel"
                        }
                      },
                      [
                        _c("div", { staticClass: "carousel-outer" }, [
                          _c("div", { staticClass: "carousel-inner" }, [
                            _c("div", { staticClass: "item active" }, [
                              _c("img", {
                                staticClass: "thumb-preview",
                                attrs: {
                                  src:
                                    _vm.$root.URL_ROOT +
                                    "uploads/property/" +
                                    _vm.detail.front_image,
                                  alt: "Chevrolet Impala"
                                }
                              })
                            ])
                          ])
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "panel-box properties-panel-box Property-description"
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "panel with-nav-tabs panel-default" },
                      [
                        _c("div", { staticClass: "panel-body" }, [
                          _c("div", { staticClass: "tab-content" }, [
                            _c(
                              "div",
                              {
                                staticClass: "tab-pane fade active in",
                                attrs: { id: "tab1default" }
                              },
                              [
                                _vm._m(3),
                                _vm._v(" "),
                                _c("div", {
                                  domProps: {
                                    innerHTML: _vm._s(_vm.detail.detail)
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "tab-pane fade features active in",
                              attrs: { id: "tab2default" }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "tab-pane fade technical active in",
                                attrs: { id: "tab3default" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "properties-amenities" },
                                  [
                                    _vm._m(4),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                        },
                                        [
                                          _c(
                                            "ul",
                                            {
                                              staticClass: "amenities",
                                              staticStyle: {
                                                "column-count": "5",
                                                "text-align": "center",
                                                "line-height": "2.5"
                                              }
                                            },
                                            _vm._l(_vm.detail.amenity, function(
                                              amenity
                                            ) {
                                              return _c(
                                                "li",
                                                { key: amenity.id },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src:
                                                        _vm.$root.URL_ROOT +
                                                        "uploads/icons/" +
                                                        amenity.value,
                                                      width: "40"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("br"),
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(amenity.name) +
                                                      "\n                                "
                                                  )
                                                ]
                                              )
                                            }),
                                            0
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "tab-pane fade active in",
                                attrs: { id: "tab4default" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "floor-plans" },
                                  [
                                    _vm._m(5),
                                    _vm._v(" "),
                                    _vm.floorplandone
                                      ? _c(
                                          "carousel",
                                          {
                                            attrs: {
                                              autoplay: true,
                                              items: 1,
                                              nav: false
                                            }
                                          },
                                          _vm._l(
                                            _vm.getFloor(_vm.detail.floor_plan),
                                            function(floor_plan, key) {
                                              return _c("img", {
                                                key: key,
                                                staticClass: "img-responsive",
                                                attrs: {
                                                  src:
                                                    _vm.$root.URL_ROOT +
                                                    "uploads/floorplan/" +
                                                    floor_plan,
                                                  alt: "floor-plans"
                                                }
                                              })
                                            }
                                          ),
                                          0
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "tab-pane fade active in",
                                attrs: { id: "tab5default" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "inside-properties" },
                                  [
                                    _vm._m(6),
                                    _vm._v(" "),
                                    _c("iframe", {
                                      staticClass: "modalIframe",
                                      attrs: {
                                        src: _vm.detail.video,
                                        allowfullscreen: ""
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(7)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-12 col-xs-12" }, [
            _c("div", { staticClass: "sidebar right" }, [
              _c(
                "div",
                {
                  staticClass:
                    "sidebar-widget sidebar-widgets hidden-xs hidden-sm"
                },
                [
                  _c("div", { staticClass: "main-title-2" }, [
                    _c(
                      "button",
                      {
                        class: _vm.normalfilter
                          ? "btn btn-default filter-btn filter-active"
                          : "btn btn-default filter-btn ",
                        on: {
                          click: function($event) {
                            return _vm.showFilter(1)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Filters\n                  "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        class: _vm.premiumfilter
                          ? "btn btn-default filter-btn filter-active"
                          : "btn btn-default filter-btn ",
                        on: {
                          click: function($event) {
                            return _vm.showFilter(2)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Premium Filters\n                  "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.normalfilter
                    ? _c("div", {}, [
                        _c("div", { staticClass: "control-group" }, [
                          _c("h3", { staticClass: "filter-heading" }, [
                            _vm._v("Property Type")
                          ]),
                          _vm._v(" "),
                          _c(
                            "label",
                            { staticClass: "control control--checkbox" },
                            [
                              _vm._v("Residential\n                      "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.property_type,
                                    expression: "property_type"
                                  }
                                ],
                                attrs: {
                                  type: "checkbox",
                                  value: "Residential"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.property_type)
                                    ? _vm._i(_vm.property_type, "Residential") >
                                      -1
                                    : _vm.property_type
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.property_type,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "Residential",
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.property_type = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.property_type = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.property_type = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "control__indicator" })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            { staticClass: "control control--checkbox" },
                            [
                              _vm._v("Commercial\n                      "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.property_type,
                                    expression: "property_type"
                                  }
                                ],
                                attrs: {
                                  type: "checkbox",
                                  value: "Commercial"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.property_type)
                                    ? _vm._i(_vm.property_type, "Commercial") >
                                      -1
                                    : _vm.property_type
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.property_type,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "Commercial",
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.property_type = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.property_type = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.property_type = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "control__indicator" })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            { staticClass: "control control--checkbox" },
                            [
                              _vm._v(
                                "Other Property Types\n                      "
                              ),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.property_type,
                                    expression: "property_type"
                                  }
                                ],
                                attrs: { type: "checkbox", value: "Other" },
                                domProps: {
                                  checked: Array.isArray(_vm.property_type)
                                    ? _vm._i(_vm.property_type, "Other") > -1
                                    : _vm.property_type
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.property_type,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "Other",
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.property_type = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.property_type = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.property_type = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "control__indicator" })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "control-group" }, [
                          _c("h3", { staticClass: "filter-heading" }, [
                            _vm._v("Apartment Type")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "apartment-type" }, [
                            _c(
                              "label",
                              { staticClass: "control control--checkbox" },
                              [
                                _vm._v("1BHK\n                      "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.apartment_type,
                                      expression: "apartment_type"
                                    }
                                  ],
                                  attrs: { type: "checkbox", value: "1BHK" },
                                  domProps: {
                                    checked: Array.isArray(_vm.apartment_type)
                                      ? _vm._i(_vm.apartment_type, "1BHK") > -1
                                      : _vm.apartment_type
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.apartment_type,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "1BHK",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.apartment_type = $$a.concat([
                                              $$v
                                            ]))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.apartment_type = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.apartment_type = $$c
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "control__indicator" })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              { staticClass: "control control--checkbox" },
                              [
                                _vm._v("2BHK\n                      "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.apartment_type,
                                      expression: "apartment_type"
                                    }
                                  ],
                                  attrs: { type: "checkbox", value: "2BHK" },
                                  domProps: {
                                    checked: Array.isArray(_vm.apartment_type)
                                      ? _vm._i(_vm.apartment_type, "2BHK") > -1
                                      : _vm.apartment_type
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.apartment_type,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "2BHK",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.apartment_type = $$a.concat([
                                              $$v
                                            ]))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.apartment_type = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.apartment_type = $$c
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "control__indicator" })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              { staticClass: "control control--checkbox" },
                              [
                                _vm._v("3BHK\n                      "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.apartment_type,
                                      expression: "apartment_type"
                                    }
                                  ],
                                  attrs: { type: "checkbox", value: "3BHK" },
                                  domProps: {
                                    checked: Array.isArray(_vm.apartment_type)
                                      ? _vm._i(_vm.apartment_type, "3BHK") > -1
                                      : _vm.apartment_type
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.apartment_type,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "3BHK",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.apartment_type = $$a.concat([
                                              $$v
                                            ]))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.apartment_type = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.apartment_type = $$c
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "control__indicator" })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              { staticClass: "control control--checkbox" },
                              [
                                _vm._v("4BHK\n                      "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.apartment_type,
                                      expression: "apartment_type"
                                    }
                                  ],
                                  attrs: { type: "checkbox", value: "4BHK" },
                                  domProps: {
                                    checked: Array.isArray(_vm.apartment_type)
                                      ? _vm._i(_vm.apartment_type, "4BHK") > -1
                                      : _vm.apartment_type
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.apartment_type,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "4BHK",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.apartment_type = $$a.concat([
                                              $$v
                                            ]))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.apartment_type = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.apartment_type = $$c
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "control__indicator" })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              { staticClass: "control control--checkbox" },
                              [
                                _vm._v("5BHK\n                      "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.apartment_type,
                                      expression: "apartment_type"
                                    }
                                  ],
                                  attrs: { type: "checkbox", value: "5BHK" },
                                  domProps: {
                                    checked: Array.isArray(_vm.apartment_type)
                                      ? _vm._i(_vm.apartment_type, "5BHK") > -1
                                      : _vm.apartment_type
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.apartment_type,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = "5BHK",
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.apartment_type = $$a.concat([
                                              $$v
                                            ]))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.apartment_type = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.apartment_type = $$c
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "control__indicator" })
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "control-group" }, [
                          _c("h3", { staticClass: "filter-heading" }, [
                            _vm._v("Price range")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "price-range" },
                            [
                              [
                                _c(
                                  "div",
                                  [
                                    _c("VueSimpleRangeSlider", {
                                      staticStyle: { width: "260px" },
                                      attrs: {
                                        min: 0,
                                        max: 1000000,
                                        logarithmic: true,
                                        activeBarColor: "#95c41f"
                                      },
                                      on: {
                                        onchange: function($event) {
                                          return _vm.searchByFilter()
                                        }
                                      },
                                      model: {
                                        value: _vm.range,
                                        callback: function($$v) {
                                          _vm.range = $$v
                                        },
                                        expression: "range"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "container" }, [
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "span",
                                      { staticClass: "price-span col-sm-6" },
                                      [
                                        _vm._v(
                                          " " + _vm._s(_vm.range[0]) + " INR "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "price-span col-sm-6",
                                        staticStyle: { float: "right" }
                                      },
                                      [
                                        _vm._v(
                                          " " + _vm._s(_vm.range[1]) + " INR"
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ]
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "control-group" }, [
                          _c("h3", { staticClass: "filter-heading" }, [
                            _vm._v("Property Status")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "property-status" }, [
                            _c(
                              "label",
                              { staticClass: "control control--checkbox" },
                              [
                                _vm._v(
                                  "Under Construction\n                        "
                                ),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.property_status,
                                      expression: "property_status"
                                    }
                                  ],
                                  attrs: {
                                    type: "radio",
                                    name: "property_status",
                                    value: "0",
                                    id: "property_status"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.property_status, "0")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.property_status = "0"
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "control__indicator" })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              { staticClass: "control control--checkbox" },
                              [
                                _vm._v("Ready\n                        "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.property_status,
                                      expression: "property_status"
                                    }
                                  ],
                                  attrs: {
                                    type: "radio",
                                    value: "1",
                                    name: "property_status",
                                    id: "property_status"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.property_status, "1")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.property_status = "1"
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "control__indicator" })
                              ]
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.premiumfilter
                    ? _c("div", {}, [
                        _c("div", { staticClass: "control-group" }, [
                          _c("h3", { staticClass: "filter-heading" }, [
                            _vm._v("Built Up Area(sq. ft.)")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "price-range" },
                            [
                              [
                                _c(
                                  "div",
                                  [
                                    _c("VueSimpleRangeSlider", {
                                      staticStyle: { width: "250px" },
                                      attrs: {
                                        min: 0,
                                        max: 1000000,
                                        logarithmic: true,
                                        activeBarColor: "#95c41f"
                                      },
                                      model: {
                                        value: _vm.range,
                                        callback: function($$v) {
                                          _vm.range = $$v
                                        },
                                        expression: "range"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "control-group" }, [
                          _c("h3", { staticClass: "filter-heading" }, [
                            _vm._v("Plot Area(sq. ft.)")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "price-range" },
                            [
                              [
                                _c(
                                  "div",
                                  [
                                    _c("VueSimpleRangeSlider", {
                                      staticStyle: { width: "250px" },
                                      attrs: {
                                        min: 0,
                                        max: 1000000,
                                        logarithmic: true,
                                        activeBarColor: "#95c41f"
                                      },
                                      model: {
                                        value: _vm.range,
                                        callback: function($$v) {
                                          _vm.range = $$v
                                        },
                                        expression: "range"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(8),
                        _vm._v(" "),
                        _vm._m(9)
                      ])
                    : _vm._e()
                ]
              )
            ])
          ])
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
            _c("h1", [_vm._v("Properties Detail")]),
            _vm._v(" "),
            _c("ul", { staticClass: "breadcrumbs" }, [
              _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Home")])]),
              _vm._v(" "),
              _c("li", { staticClass: "active" }, [_vm._v("Properties Detail")])
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
    return _c("div", { staticClass: "advabced-search hidden-lg hidden-md" }, [
      _c("div", { staticClass: "main-title-2" }, [
        _c("h1", [_vm._v("Advanced Search")])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("h3", [_vm._v("Property Type")]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex nb__3ASCk" }, [
          _c("div", { staticClass: "nb-checkbox checkbox" }, [
            _c("label", { attrs: { for: "apartment" } }, [
              _c("input", {
                attrs: { type: "checkbox", id: "apartment", value: "AP" }
              }),
              _c("span", [_vm._v("Residential")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nb-checkbox checkbox" }, [
            _c("label", { attrs: { for: "ih" } }, [
              _c("input", {
                attrs: { type: "checkbox", id: "ih", value: "IH" }
              }),
              _c("span", [_vm._v("Commercial")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nb-checkbox checkbox" }, [
            _c("label", { attrs: { for: "gc" } }, [
              _c("input", {
                attrs: { type: "checkbox", id: "gc", value: "GC" }
              }),
              _c("span", [_vm._v("Gated Community Villa")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nb-checkbox checkbox" }, [
            _c("label", { attrs: { for: "sb" } }, [
              _c("input", {
                attrs: { type: "checkbox", id: "sb", value: "SB" }
              }),
              _c("span", [_vm._v("Other Property Types")])
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
    return _c("ul", { staticClass: "nav nav-tabs" }, [
      _c("li", { staticClass: "active" }, [
        _c(
          "a",
          {
            attrs: {
              href: "#tab1default",
              "data-toggle": "tab",
              "aria-expanded": "true"
            }
          },
          [_vm._v("Description")]
        )
      ]),
      _vm._v(" "),
      _c("li", {}, [
        _c(
          "a",
          {
            attrs: {
              href: "#tab3default",
              "data-toggle": "tab",
              "aria-expanded": "false"
            }
          },
          [_vm._v("Amenities")]
        )
      ]),
      _vm._v(" "),
      _c("li", {}, [
        _c(
          "a",
          {
            attrs: {
              href: "#tab4default",
              "data-toggle": "tab",
              "aria-expanded": "false"
            }
          },
          [_vm._v("Floor Plans")]
        )
      ]),
      _vm._v(" "),
      _c("li", {}, [
        _c(
          "a",
          {
            attrs: {
              href: "#tab5default",
              "data-toggle": "tab",
              "aria-expanded": "false"
            }
          },
          [_vm._v("Video")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-title-2" }, [
      _c("h1", [_c("span", [_vm._v("Description")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-title-2" }, [
      _c("h1", [_c("span", [_vm._v("Amenities")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-title-2" }, [
      _c("h1", [_c("span", [_vm._v("Floor")]), _vm._v(" Plans")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "main-title-2", staticStyle: { "margin-top": "50px" } },
      [_c("h1", [_c("span", [_vm._v("Video ")])])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "Properties-details-section sidebar-widget sw2",
        staticStyle: { display: "none" }
      },
      [
        _c("div", { staticClass: "properties-comments mb-40" }, [
          _c("div", { staticClass: "comments-section" }, [
            _c("div", { staticClass: "main-title-2" }, [
              _c("h1", [_c("span", [_vm._v("Comments ")]), _vm._v(" Section")])
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "comments" }, [
              _c("li", [
                _c("div", { staticClass: "comment" }, [
                  _c("div", { staticClass: "comment-author" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! ../assets/img/avatar/avatar-5.png */ "./resources/front/tcjstech/assets/img/avatar/avatar-5.png"),
                          alt: "avatar-5"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "comment-content" }, [
                    _c("div", { staticClass: "comment-meta" }, [
                      _c("div", { staticClass: "comment-meta-author" }, [
                        _vm._v("John Antony")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "comment-meta-reply" }, [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Reply")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "comment-meta-date" }, [
                        _c("span", { staticClass: "hidden-xs" }, [
                          _vm._v("8:42 PM 3/3/2020")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "clearfix" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "comment-body" }, [
                      _c("div", { staticClass: "comment-rating" }, [
                        _c("i", { staticClass: "fa fa-star" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-star" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-star" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-star" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-star-o" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("( 4 Reviews )")])
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                              Lorem ipsum dolor sit amet, consectetur adipiscing\n                              elit. Donec luctus tincidunt aliquam. Aliquam\n                              gravida massa at sem vulputate interdum et vel\n                              eros. Maecenas eros enim, tincidunt vel turpis\n                              vel, dapibus tempus nulla.\n                            "
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("div", { staticClass: "comment" }, [
                      _c("div", { staticClass: "comment-author" }, [
                        _c("a", { attrs: { href: "#" } }, [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../assets/img/avatar/avatar-5.png */ "./resources/front/tcjstech/assets/img/avatar/avatar-5.png"),
                              alt: "avatar-5"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "comment-content" }, [
                        _c("div", { staticClass: "comment-meta" }, [
                          _c("div", { staticClass: "comment-meta-author" }, [
                            _vm._v(
                              "\n                                  Karen Paran\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "comment-meta-reply" }, [
                            _c("a", { attrs: { href: "#" } }, [_vm._v("Reply")])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "comment-meta-date" }, [
                            _c("span", { staticClass: "hidden-xs" }, [
                              _vm._v("8:42 PM 3/3/2020")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "clearfix" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "comment-body" }, [
                          _c("div", { staticClass: "comment-rating" }, [
                            _c("i", { staticClass: "fa fa-star" }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-star" }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-star" }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-star" }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-star-o" }),
                            _vm._v(" "),
                            _c("span", [_vm._v("( 4 Reviews )")])
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                  Lorem ipsum dolor sit amet, consectetur\n                                  adipiscing elit. Donec luctus tincidunt\n                                  aliquam. Aliquam gravida massa at sem\n                                  vulputate interdum et vel eros.\n                                "
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c("div", { staticClass: "comment" }, [
                  _c("div", { staticClass: "comment-author" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! ../assets/img/avatar/avatar-5.png */ "./resources/front/tcjstech/assets/img/avatar/avatar-5.png"),
                          alt: "avatar-5"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "comment-content" }, [
                    _c("div", { staticClass: "comment-meta" }, [
                      _c("div", { staticClass: "comment-meta-author" }, [
                        _vm._v(
                          "\n                              Eliane Pereira\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "comment-meta-reply" }, [
                        _c("a", { attrs: { href: "#" } }, [_vm._v("Reply")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "comment-meta-date" }, [
                        _c("span", { staticClass: "hidden-xs" }, [
                          _vm._v("8:42 PM 3/3/2020")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "clearfix" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "comment-body" }, [
                      _c("div", { staticClass: "comment-rating" }, [
                        _c("i", { staticClass: "fa fa-star" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-star" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-star" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-star" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "fa fa-star-o" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("( 4 Reviews )")])
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                              Lorem Ipsum is simply dummy text of the printing\n                              and typesetting industry. Lorem Ipsum has been the\n                              industry's standard dummy text ever since the\n                              1500s, when an unknown printer\n                            "
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c(
                      "div",
                      { staticClass: "comment comment-mrg-bdr-nane mb-0" },
                      [
                        _c("div", { staticClass: "comment-author" }, [
                          _c("a", { attrs: { href: "#" } }, [
                            _c("img", {
                              attrs: {
                                src: __webpack_require__(/*! ../assets/img/avatar/avatar-5.png */ "./resources/front/tcjstech/assets/img/avatar/avatar-5.png"),
                                alt: "avatar-5"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "comment-content" }, [
                          _c("div", { staticClass: "comment-meta" }, [
                            _c("div", { staticClass: "comment-meta-author" }, [
                              _vm._v("Jane Doe")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "comment-meta-reply" }, [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Reply")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "comment-meta-date" }, [
                              _c("span", { staticClass: "hidden-xs" }, [
                                _vm._v("8:42 PM 3/3/2020")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "clearfix" }),
                          _vm._v(" "),
                          _c("div", { staticClass: "comment-body" }, [
                            _c("div", { staticClass: "comment-rating" }, [
                              _c("i", { staticClass: "fa fa-star" }),
                              _vm._v(" "),
                              _c("i", { staticClass: "fa fa-star" }),
                              _vm._v(" "),
                              _c("i", { staticClass: "fa fa-star" }),
                              _vm._v(" "),
                              _c("i", { staticClass: "fa fa-star" }),
                              _vm._v(" "),
                              _c("i", { staticClass: "fa fa-star-o" }),
                              _vm._v(" "),
                              _c("span", [_vm._v("( 4 Reviews )")])
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                                  Lorem ipsum dolor sit amet, consectetur\n                                  adipiscing elit. Donec luctus tincidunt\n                                  aliquam. Aliquam gravida massa at sem\n                                  vulputate interdum et vel eros.\n                                "
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "contact-1" }, [
          _c("div", { staticClass: "main-title-2" }, [
            _c("h1", [_c("span", [_vm._v("Leave")]), _vm._v(" a Comment")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "contact-form" }, [
            _c(
              "form",
              {
                attrs: {
                  id: "contact_form",
                  action:
                    "https://storage.googleapis.com/theme-vessel-items/checking-sites/nest-html/HTML/main/index.html",
                  method: "GET",
                  enctype: "multipart/form-data"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" },
                    [
                      _c("div", { staticClass: "form-group fullname" }, [
                        _c("input", {
                          staticClass: "input-text",
                          attrs: {
                            type: "text",
                            name: "full-name",
                            placeholder: "Full Name"
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" },
                    [
                      _c("div", { staticClass: "form-group enter-email" }, [
                        _c("input", {
                          staticClass: "input-text",
                          attrs: {
                            type: "email",
                            name: "email",
                            placeholder: "Enter email"
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" },
                    [
                      _c("div", { staticClass: "form-group subject" }, [
                        _c("input", {
                          staticClass: "input-text",
                          attrs: {
                            type: "text",
                            name: "subject",
                            placeholder: "Subject"
                          }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-lg-6 col-md-6 col-sm-12 col-xs-12" },
                    [
                      _c("div", { staticClass: "form-group number" }, [
                        _c("input", {
                          staticClass: "input-text",
                          attrs: {
                            type: "text",
                            name: "phone",
                            placeholder: "Phone Number"
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
                          staticClass: "input-text",
                          attrs: {
                            name: "message",
                            placeholder: "Write message"
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
                            attrs: { type: "submit" }
                          },
                          [
                            _vm._v(
                              "\n                            Send Message\n                          "
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "control-group" }, [
      _c("h3", { staticClass: "filter-heading" }, [
        _vm._v(" Floor Preference")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "property-status" }, [
        _c("label", { staticClass: "control control--checkbox" }, [
          _vm._v("Only Ground\n                        "),
          _c("input", {
            attrs: {
              type: "radio",
              name: "property_status",
              id: "property_status"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "control__indicator" })
        ]),
        _vm._v(" "),
        _c("label", { staticClass: "control control--checkbox" }, [
          _vm._v("Not On Ground\n                        "),
          _c("input", {
            attrs: {
              type: "radio",
              name: "property_status",
              id: "property_status"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "control__indicator" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "control-group" }, [
      _c("h3", { staticClass: "filter-heading" }, [_vm._v("Property Age")]),
      _vm._v(" "),
      _c("div", { staticClass: "property-status" }, [
        _c("label", { staticClass: "control control--checkbox" }, [
          _vm._v(" < 1\n                        "),
          _c("input", {
            attrs: {
              type: "radio",
              name: "property_status",
              id: "property_status"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "control__indicator" })
        ]),
        _vm._v(" "),
        _c("label", { staticClass: "control control--checkbox" }, [
          _vm._v(" < 3\n                        "),
          _c("input", {
            attrs: {
              type: "radio",
              name: "property_status",
              id: "property_status"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "control__indicator" })
        ]),
        _vm._v(" "),
        _c("label", { staticClass: "control control--checkbox" }, [
          _vm._v(" < 5\n                        "),
          _c("input", {
            attrs: {
              type: "radio",
              name: "property_status",
              id: "property_status"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "control__indicator" })
        ]),
        _vm._v(" "),
        _c("label", { staticClass: "control control--checkbox" }, [
          _vm._v(" < 10\n                        "),
          _c("input", {
            attrs: {
              type: "radio",
              name: "property_status",
              id: "property_status"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "control__indicator" })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/front/tcjstech/assets/img/avatar/avatar-5.png":
/*!*****************************************************************!*\
  !*** ./resources/front/tcjstech/assets/img/avatar/avatar-5.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/avatar-5.png?f923b61d87de05d96ee32141d21c6e68";

/***/ }),

/***/ "./resources/front/tcjstech/views/PropertyDetail.vue":
/*!***********************************************************!*\
  !*** ./resources/front/tcjstech/views/PropertyDetail.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PropertyDetail_vue_vue_type_template_id_312e565a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PropertyDetail.vue?vue&type=template&id=312e565a& */ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=template&id=312e565a&");
/* harmony import */ var _PropertyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyDetail.vue?vue&type=script&lang=js& */ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PropertyDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyDetail.vue?vue&type=style&index=0&lang=css& */ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _PropertyDetail_vue_vue_type_custom_index_0_blockType_div_class_sidebar_widget_20popular_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PropertyDetail.vue?vue&type=custom&index=0&blockType=div&class=sidebar-widget%20popular-posts */ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=0&blockType=div&class=sidebar-widget%20popular-posts");
/* harmony import */ var _PropertyDetail_vue_vue_type_custom_index_0_blockType_div_class_sidebar_widget_20popular_posts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PropertyDetail_vue_vue_type_custom_index_0_blockType_div_class_sidebar_widget_20popular_posts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PropertyDetail_vue_vue_type_custom_index_1_blockType_div_class_sidebar_widget_20category_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PropertyDetail.vue?vue&type=custom&index=1&blockType=div&class=sidebar-widget%20category-posts */ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=1&blockType=div&class=sidebar-widget%20category-posts");
/* harmony import */ var _PropertyDetail_vue_vue_type_custom_index_1_blockType_div_class_sidebar_widget_20category_posts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PropertyDetail_vue_vue_type_custom_index_1_blockType_div_class_sidebar_widget_20category_posts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PropertyDetail_vue_vue_type_custom_index_2_blockType_div_class_social_media_20sidebar_widget_20clearfix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PropertyDetail.vue?vue&type=custom&index=2&blockType=div&class=social-media%20sidebar-widget%20clearfix */ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=2&blockType=div&class=social-media%20sidebar-widget%20clearfix");
/* harmony import */ var _PropertyDetail_vue_vue_type_custom_index_2_blockType_div_class_social_media_20sidebar_widget_20clearfix__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PropertyDetail_vue_vue_type_custom_index_2_blockType_div_class_social_media_20sidebar_widget_20clearfix__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PropertyDetail_vue_vue_type_custom_index_3_blockType_div_class_sidebar_widget_20contact_1_20mortgage_calculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PropertyDetail.vue?vue&type=custom&index=3&blockType=div&class=sidebar-widget%20contact-1%20mortgage-calculator */ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=3&blockType=div&class=sidebar-widget%20contact-1%20mortgage-calculator");
/* harmony import */ var _PropertyDetail_vue_vue_type_custom_index_3_blockType_div_class_sidebar_widget_20contact_1_20mortgage_calculator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_PropertyDetail_vue_vue_type_custom_index_3_blockType_div_class_sidebar_widget_20contact_1_20mortgage_calculator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PropertyDetail_vue_vue_type_custom_index_4_blockType_div_class_partners_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PropertyDetail.vue?vue&type=custom&index=4&blockType=div&class=partners-block */ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=4&blockType=div&class=partners-block");
/* harmony import */ var _PropertyDetail_vue_vue_type_custom_index_4_blockType_div_class_partners_block__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_PropertyDetail_vue_vue_type_custom_index_4_blockType_div_class_partners_block__WEBPACK_IMPORTED_MODULE_8__);






/* normalize component */

var component = Object(_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PropertyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PropertyDetail_vue_vue_type_template_id_312e565a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PropertyDetail_vue_vue_type_template_id_312e565a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _PropertyDetail_vue_vue_type_custom_index_0_blockType_div_class_sidebar_widget_20popular_posts__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') _PropertyDetail_vue_vue_type_custom_index_0_blockType_div_class_sidebar_widget_20popular_posts__WEBPACK_IMPORTED_MODULE_4___default()(component)

if (typeof _PropertyDetail_vue_vue_type_custom_index_1_blockType_div_class_sidebar_widget_20category_posts__WEBPACK_IMPORTED_MODULE_5___default.a === 'function') _PropertyDetail_vue_vue_type_custom_index_1_blockType_div_class_sidebar_widget_20category_posts__WEBPACK_IMPORTED_MODULE_5___default()(component)

if (typeof _PropertyDetail_vue_vue_type_custom_index_2_blockType_div_class_social_media_20sidebar_widget_20clearfix__WEBPACK_IMPORTED_MODULE_6___default.a === 'function') _PropertyDetail_vue_vue_type_custom_index_2_blockType_div_class_social_media_20sidebar_widget_20clearfix__WEBPACK_IMPORTED_MODULE_6___default()(component)

if (typeof _PropertyDetail_vue_vue_type_custom_index_3_blockType_div_class_sidebar_widget_20contact_1_20mortgage_calculator__WEBPACK_IMPORTED_MODULE_7___default.a === 'function') _PropertyDetail_vue_vue_type_custom_index_3_blockType_div_class_sidebar_widget_20contact_1_20mortgage_calculator__WEBPACK_IMPORTED_MODULE_7___default()(component)

if (typeof _PropertyDetail_vue_vue_type_custom_index_4_blockType_div_class_partners_block__WEBPACK_IMPORTED_MODULE_8___default.a === 'function') _PropertyDetail_vue_vue_type_custom_index_4_blockType_div_class_partners_block__WEBPACK_IMPORTED_MODULE_8___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/front/tcjstech/views/PropertyDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=0&blockType=div&class=sidebar-widget%20popular-posts":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=0&blockType=div&class=sidebar-widget%20popular-posts ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=1&blockType=div&class=sidebar-widget%20category-posts":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=1&blockType=div&class=sidebar-widget%20category-posts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=2&blockType=div&class=social-media%20sidebar-widget%20clearfix":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=2&blockType=div&class=social-media%20sidebar-widget%20clearfix ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=3&blockType=div&class=sidebar-widget%20contact-1%20mortgage-calculator":
/*!********************************************************************************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=3&blockType=div&class=sidebar-widget%20contact-1%20mortgage-calculator ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=4&blockType=div&class=partners-block":
/*!**********************************************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=custom&index=4&blockType=div&class=partners-block ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib??ref--4-0!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./PropertyDetail.vue?vue&type=script&lang=js& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/babel-loader/lib/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_nodevenv_public_html_realestate_10_lib_node_modules_babel_loader_lib_index_js_ref_4_0_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader??ref--7-1!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src??ref--7-2!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./PropertyDetail.vue?vue&type=style&index=0&lang=css& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/style-loader/index.js!../../nodevenv/public_html/realestate/10/lib/node_modules/css-loader/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../nodevenv/public_html/realestate/10/lib/node_modules/postcss-loader/src/index.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nodevenv_public_html_realestate_10_lib_node_modules_style_loader_index_js_nodevenv_public_html_realestate_10_lib_node_modules_css_loader_index_js_ref_7_1_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_stylePostLoader_js_nodevenv_public_html_realestate_10_lib_node_modules_postcss_loader_src_index_js_ref_7_2_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=template&id=312e565a&":
/*!******************************************************************************************!*\
  !*** ./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=template&id=312e565a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetail_vue_vue_type_template_id_312e565a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib??vue-loader-options!./PropertyDetail.vue?vue&type=template&id=312e565a& */ "../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../nodevenv/public_html/realestate/10/lib/node_modules/vue-loader/lib/index.js?!./resources/front/tcjstech/views/PropertyDetail.vue?vue&type=template&id=312e565a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetail_vue_vue_type_template_id_312e565a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_nodevenv_public_html_realestate_10_lib_node_modules_vue_loader_lib_index_js_vue_loader_options_PropertyDetail_vue_vue_type_template_id_312e565a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);