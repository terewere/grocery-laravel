import guest from '@/routes/middlewares/guest'
import verified from '@/routes/middlewares/verified'

const Login = () =>
    import ( /* webpackChunkName: "login" */ '@/components/authentication/Login.vue');

const VerifyToken = () =>
    import ( /* webpackChunkName: "VerifyToken" */ '@/components/authentication/VerifyToken.vue');

const VerifyPhone = () =>
    import ( /* webpackChunkName: "VerifyPhone" */ '@/components/authentication/VerifyPhone.vue');

const Register = () =>
    import ( /* webpackChunkName: "register" */ '@/components/authentication/Register.vue');

const Advert = () =>
    import ( /* webpackChunkName: "advert" */ '@/pages/adverts/Advert.vue');


const routes = [

    // {
    //     path: '/verify-phone',
    //     component: VerifyPhone,
    //     meta: {
    //         layout: 'no-nav',
    //         middleware: [
    //             guest
    //         ]
    //     }

    // },

    // {
    //     path: '/verify-token',
    //     component: VerifyToken,
    //     meta: {
    //         layout: 'no-nav',
    //         middleware: [
    //             guest,
    //             verified
    //         ]
    //     }

    // },
    {
        path: '/login',
        component: Login,
        meta: {
            layout: 'no-nav',
            middleware: [
                guest
            ]
        }

    },
    {
        path: '/register',
        component: Register,
        meta: {
            layout: 'no-nav',
            middleware: [
                guest
            ]
        }
    },

    {
        path: '/adverts/:advert',
        component: Advert,
        name: 'adverts.show',
        meta: {
            layout: 'no-nav',
            middleware: [
                guest
            ]
        }
    },


]

export default routes

// export default routes.map(route => {
//     return { ...route, meta: { forVisitor: true, layout: 'no-nav'  } }
//   })