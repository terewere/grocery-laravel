
const can = (permission) => {
let user = localStorage.getItem('user')
if (!user) {
    return
}
const permissions = JSON.parse(user).permissions;
return permissions.includes(permission) || permissions.includes('do_all')
} 

export default can
    
    