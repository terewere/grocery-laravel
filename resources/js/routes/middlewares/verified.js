export default function verified({ next, from, store }) {

    if (!store.getters.getNumber) next('login')

    else next()

}