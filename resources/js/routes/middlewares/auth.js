export default function auth({ next, store }) {

    if (!store.getters.isLoggedIn) next('/login')

    else next()

}