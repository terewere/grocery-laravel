export default function guest ({ next, from, store }){
     
    if(store.getters.isLoggedIn) next(from.fullPath)
        
    else next()

   }