import Vue from "vue"
import { store } from '@/store/store'
import toast from '@/plugins/toast'
import router from '@/routes/router'
import app from '@/app.js'

const Axios = {
    install(Vue) {


        axios.interceptors.request.use(config => {
            app.$Progress.start(); // for every request start the progress
            return config;
        });

        axios.interceptors.response.use(
            function (response) {
                app.$Progress.finish();
                store.dispatch("clearErrors")

                if (response.status == 201) {
                    toast.success(response.data.message);
                }

                return response;
            },



            function (error) {

                if (error.response.status === 422) {
                    store.dispatch("setErrors", error.response.data.errors)

                } else if (error.response.status === 401
                    //  || error.response.status === 402
                    ) 
                     {

                    store.dispatch("setErrors", { unauthorized: [error.response.data.message] })
                    store.dispatch("LOGOUT").then(() => router.push('/login'))

                } else {
                    toast.error(error.response.data.message);

                }

                return Promise.reject(error)

            });


    }
}
Vue.use(Axios)