<template>

    <div class="col-md-12">
        <div class="card p-3">

            <div class="card-title font-weight-bold"></div>

            <div class="card-block">
                <hr>

                <div class="media">
                    <!-- <img class="circle img-responsive d-flex align-self-center mr-3"
                         :src="'http://susu-app.app/img/' + user.photo.url" alt=" image"
                         width="80" height="80"> -->

                    <div class="media-body">
                        <div class="d-flex">

                            <router-link :to="link">
                                <h5 class="mt-0">{{user.name}}</h5>
                            </router-link>
                        </div>

                    </div>
                </div>
                <hr>
                
            </div>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {

        props: ['user'], 

        computed: {
            link(){
                return {name: 'user.show', params: {user:this.user.id }}
            }
        },
        methods: {

        }
    }
</script>