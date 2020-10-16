<template>
    <div class="col-12">
      <div class="card card-outline">
        <div class="card-header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                  <h1>{{this.pageTitle}}</h1>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>

        <div class="card-body">
             <img
            
              style="display:block;cursor:pointer; margin: 0 auto;"
                id="picture"
                :src=" '/' + advert.imageUrl"
                width="100%"
                height="auto"
                alt="no image"
              />
          <div class="table">
            <div class="c-row header">
              <div class="cell">Company</div>
              <div class="cell">Product</div>
              <div class="cell">Description</div>
              <div class="cell">Contacts</div>
              <!-- <div v-if="advert.website !== null || advert.website.length !== 0" class="cell">Action</div> -->
            </div>

            <div
              class="c-row"
            >
              <div class="cell" data-title="Company">{{advert.companyName}}</div>
              <div class="cell" data-title="Product">
               {{advert.productName}}
                
              </div>
              <div class="cell" data-title="Description">
               {{advert.productDescription}}
               
              </div>
              <div class="cell" data-title="Contacts">
                <span
                  class="bg-success text-white font-weight-bold badge"
                >{{advert.contactNumber1}} | {{advert.contactNumber2}}</span>
              </div>

              <!-- <div v-if="advert.website !==null || advert.website.length !== 0" class="cell" data-title="Action">
                <a
                  class="btn btn-info btn-sm"
                  :href="advert.website"
                >Website</a>
              </div> -->

            </div>
          </div>
        </div>
          <div v-if="isLoading"
            id="table_processing"
            class="dataTables_processing card"
          >Processing...</div>

      </div>
    </div>
</template>

<script>
export default {
 name: "Advert",

  data() {
    return {
      pageTitle: "Product Detail",
      advert: {},
      isLoading: true
    };
  },
  methods: {

       bootstraping() {
       axios.get(`adverts/${this.$route.params.advert}`).then(response => {
               this.advert = response.data
               this.isLoading = false 
                
            }).catch( () => {
               this.isLoading = false
              console.log("something went wrong");
              
            }
            )
    }
  },

  mounted() {
    this.bootstraping();
   
  }

  
};
</script>
<style lang="scss" scoped>
@import "../../../sass/responsive-table.scss";
</style>