import Vue from "vue"

window._ = require('lodash');

try {
    window.$ = window.jQuery = require('jquery');

    window.Popper = require('popper.js').default;

    require('bootstrap');

    window.swal = require('sweetalert2');
    require('admin-lte');


} catch (e) {}


window.moment = require('moment');
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

if (process.env.NODE_ENV === 'development') {

    window.axios.defaults.baseURL = "http://127.0.0.1:8000/api/";


} else {

    window.axios.defaults.baseURL = "45.32.157.58/api/";
    // window.axios.defaults.baseURL = "https://gir.ghanahajjapp.com/api/";

}



let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

import NoNavBar from '@/layouts/NoNavBar';
import Default from '@/layouts/Default';

import VueProgressBar from 'vue-progressbar'

import Content from "@/components/common/Content"
import Vue2Filters from 'vue2-filters'
import Multiselect from 'vue-multiselect'
import Datepicker from "vuejs-datepicker";


window.EventBus = new Vue({});
require('@/plugins/mixins/modal')
require('@/plugins/mixins/utils')
require('@/plugins/errorHandler')
require('@/plugins/go-back')
require('@/plugins/moment_filter')
require('@/plugins/initials')

require('@/plugins/mixins/validation')
require('@/plugins/vee-validate')
require('@/plugins/mixins/gate')




Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    thickness: '8px',

})

var Vue2FiltersConfig = {
    capitalize: {
        onlyFirstLetter: false
    },
    currency: {
        symbol: 'GHC',
        decimalDigits: 2,
        thousandsSeparator: ',',
        decimalSeparator: '.',
        symbolOnLeft: true,
        spaceBetweenAmountAndSymbol: false
    },
    pluralize: {
        includeNumber: false
    },
    ordinal: {
        includeNumber: false
    }
}

Vue.use(Vue2Filters, Vue2FiltersConfig)


Vue.component("default-layout", Default);
Vue.component("no-nav-layout", NoNavBar);
Vue.component("main-content", Content);
Vue.component('datepicker', Datepicker);

// register globally
Vue.component('multiselect', Multiselect)