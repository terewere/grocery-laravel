<style lang="scss">
.pagination {
    justify-content: flex-end !important;
    .page-stats {
        align-items: center;
        margin-right: 5px;
    }
    i {
        color: #3273dc !important;
    }
}
</style>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

<template>
    <nav v-if="!client">
        <ul class="pagination">
        <span class="page-stats">{{pagination.from}} - {{pagination.to}} of {{pagination.total}}</span>
       
       <li class="page-item" v-if="pagination.prevPageUrl">
        <a  class="page-link" @click="$emit('prev');">
            Prev
        </a>
       </li>
       
       <li class="page-item" v-else :disabled="true">
        <a class="page-link" >
           Prev
        </a>
       </li>

<li class="page-item" v-if="pagination.nextPageUrl">
        <a class="page-link" @click="$emit('next');">
            Next
        </a>
</li>
 <li class="page-item" v-else :disabled="true">
        <a class="page-link" >
            Next
        </a>
 </li>
        </ul>
    </nav>

    <nav class="pagination" v-else>
         <ul class="pagination">
        <span class="page-stats">
            {{pagination.from}} - {{pagination.to}} of {{filtered.length}}
            <span v-if="filtered.length < pagination.total">(filtered from {{pagination.total}} total entries)</span>
        </span>
          <li class="page-item" v-if="pagination.prevPage">
        <a href="#" class="page-link" @click="$emit('prev');">
            Prev
        </a>
          </li>

           <li class="page-item" v-else :disabled="true">
        <a href="#" class="page-link">
           Prev
        </a>
           </li>

  <li class="page-item" v-if="pagination.nextPage">
        <a href="#" class="page-link" @click="$emit('next');">
            Next
        </a>
  </li>
   <li class="page-item" v-else :disabled="true">
        <a href="#" class="page-link">
            Next
        </a>
   </li>
         </ul>
    </nav>
</template>

<script>
    export default {
        props: ['pagination', 'client', 'filtered']
    }
</script>