import Vue from 'vue';
import  Routes from '@/routes'
import VueRouter from 'vue-router';
import {store} from '@/store/store'
import middlewarePipeline from './middlewarePipeline'
import Gate from '@/plugins/Gate';

Vue.use(VueRouter);

const gate = new Gate();

const router = new VueRouter({
    routes: [
       
      ].concat(Routes),
    
    linkActiveClass: 'active',
    mode: 'history',
    // base: process.env.BASE_URL

});

router.beforeEach((to, from, next) => {
    
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store,
        gate
    }
    
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

export default router
