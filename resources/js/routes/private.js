import auth from '@/routes/middlewares/auth'
import permission from '@/routes/middlewares/permissions'

const Users = () =>
    import ( /* webpackChunkName: "users" */ '@/pages/users/Users.vue');
const RolesPermissions = () =>
    import ( /* webpackChunkName: "rolepermissions" */ '@/pages/users/Roles.vue');

const Dashboard = () =>
    import ( /* webpackChunkName: "dashboard" */ '@/pages/dashboard/Dashboard.vue');
const App = () =>
    import ( /* webpackChunkName: "app" */ '@/pages/App.vue');
const Profile = () =>
    import ( /* webpackChunkName: "profile" */ '@/pages/users/Profile.vue');

const Edit = () =>
    import ( /* webpackChunkName: "edit" */ '@/components/user/Edit.vue');

const NotFound = () =>
    import ( /* webpackChunkName: "notfound" */ '@/components/NotFound.vue');

const Speakers = () =>
    import ( /* webpackChunkName: "Speakers" */ '@/pages/speakers/Speakers.vue');

const Audios = () =>
    import ( /* webpackChunkName: "Audios" */ '@/pages/speakers/audios/Audios.vue');



const routes = [{


        path: '/',
        component: App,
        redirect: '/dashboard',
        meta: {
            middleware: [
                auth
            ]
        },
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: {
            middleware: [
                auth
            ]
        },

    },


    {
        path: '/users',
        component: Users,
        meta: {
            middleware: [
                auth,
                permission('view_users')

            ]
        },

    },

    {
        path: '/roles',
        component: RolesPermissions,
        meta: {
            middleware: [
                auth,
                permission('view_roles')

            ]
        },

    },



    {
        path: '/speakers',
        component: Speakers,
        meta: {
            middleware: [
                auth,
                permission('view_users')

            ]
        },

    },

    {
        path: '/audio/:audio',
        component: Audios,
        name: 'audio.show',
        meta: {
            middleware: [
                auth,

            ]
        },

    },

    {
        path: '/users/:user',
        component: Edit,
        name: 'user.show',
        meta: {
            middleware: [
                auth
            ]
        },
    },


    {
        path: '/profile',
        component: Profile,
        meta: {
            middleware: [
                auth
            ]
        },


    },

    { path: "*", component: NotFound }



]



export default routes

// export default routes.map(route => {
//   return { ...route, meta: { middleware: [auth, permission(route.component.name)] } }
// })