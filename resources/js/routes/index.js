import publicRoutes from '@/routes/public.js'
import privateRoutes from '@/routes/private.js'
// import notFoundRoutes from '@/routes/not-found.js'

export default privateRoutes.concat(publicRoutes)