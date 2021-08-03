import './bootstrap';
import Vue from 'vue';
import App from '../app';
import helper from './helper';
import router from './router';
import { store } from './store';

import * as VueGoogleMaps from 'vue2-google-maps'
import Toasted from 'vue-toasted'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'

Vue.mixin(helper);
Vue.component("InlineSvg", require("@/component/InlineSvg").default);
Vue.component("MssText", require("../components/MssText").default);
Vue.component("MssButton", require("../components/MssButton").default);
Vue.component("NavBar", require("../components/NavBar").default);
Vue.component("Footer", require("../components/Footer").default);

Vue.use(Toasted)
loadProgressBar()
const error_options = {
    type: 'error',
    position: 'bottom-center',
    singleton: true,
    theme: 'bubble',
    duration: 5000,
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
}
const success_options = {
    type: 'success',
    singleton: true,
    position: 'bottom-center',
    duration: 5000,
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
}
Vue.toasted.register('error',
    (payload) => {
      // if there is no message passed show default message
      if (!payload.message) {
        return 'Oops.. Something Went Wrong..'
      }
      // if there is a message show it with the message
      return payload.message
    },
    error_options
)
Vue.toasted.register('success',
    (payload) => {
      // if there is no message passed show default message
      if (!payload.message) {
        return 'Greate.. Proceed Successfully..'
      }
      // if there is a message show it with the message
      return payload.message
    },
    success_options
)
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCUMHDrDsZObHnD8jWqQ2GobMBbPap2ljM',
      v: 3.38,
      libraries: 'places' // necessary for places input

    },
    installComponents: true
})
const app = new Vue({
    el: '#app',
    store: store,
    router,
    render: h => h(App)
});

export default app;
