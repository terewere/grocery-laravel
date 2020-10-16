<template>
    <ol class="breadcrumb float-sm-right">
              <li v-for="(item,index) in list" :key="index" class="breadcrumb-item" :class="active(index)"><a href="#">{{item}}</a></li>
               <!-- <li class="breadcrumb-item active">Starter Page</li> -->
            </ol>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
    required:true
    }
  },


  methods: {

    active(index) {
     return this.list.length-1 == index? "active": ''
    }

  }

}
</script> 