import Vue from 'vue'

Vue.filter('moment_date', function (value) {
    if (!value) return ''
    return moment(String(value)).format("DD/MM/YYYY") 
  })

Vue.filter('moment_fromNow', function (value) {
    if (!value) return 'loading...'
    return moment(value).fromNow() 
  })

Vue.filter('from_date', function (value) {
    if (!value) return 'loading...'
    return moment(value).format('DD MMMM') 
  })

Vue.filter('to_date', function (value) {
    if (!value) return 'loading...'
    return moment(value).format('DD MMMM, YYYY') 
  })