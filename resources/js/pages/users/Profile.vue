<template>
  <main-content>
    <template v-slot:left>
      <i class="fa fa-user mr-3"></i>Profile
    </template>
    <template v-slot:right>
    </template>

    <div class="col-md-8 offset-2">
      <ValidationObserver ref="observer" v-slot="{invalid, passes }">
        <form @submit.prevent="submit(passes)">
          <div class="form-group">
            <label for="surname">
              Name
              <span class="text-danger">*</span>
            </label>
            <validation-provider name="name" rules="required" v-slot="{ errors }">
              <input
                class="form-control input-sm"
                placeholder="Enter Name"
                v-model="form.name"
                type="text"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <div class="form-group">
            <label for="phone">
              Phone
              <span class="text-danger">*</span>
            </label>
            <input
              class="form-control input-sm"
              placeholder="Enter Phone Number"
              v-model="form.number"
              readonly
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <validation-provider name="Password" rules="min:8" vid="password" v-slot="{ errors }">
              <input
                class="form-control input-sm"
                placeholder="Enter Password"
                v-model="form.password"
                type="password"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <label for="Password Confirmation">Password Confirmation</label>

            <validation-provider
              name="Password Confirmation"
              rules="confirmed:password"
              v-slot="{ errors }"
            >
              <input
                class="form-control input-sm"
                placeholder="Enter Password Confirmation"
                v-model="form.password_confirmation"
                type="password"
              />
              <span class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <ValidationProvider rules="image" name="imgUrl" v-slot="{ validate, errors }">
            <div class="text-center">
              <img
              @click="choosePassPic"
              style="display:block;cursor:pointer; margin: 0 auto;"
                id="imgUrl"
                :src="form.imgUrl || '/images/no-image.jpg'"
                width="150"
                height="auto"
                alt="no image"
              />

              <input
                @change="validate"
                class="custom-file-input"
                ref="filePic"
                type="file"
                @input="readPassPicURL"
              />
            </div>

            <span class="text-danger text-center">{{ errors[0] }}</span>
          </ValidationProvider>
          <button
          
            :disabled="invalid || processing"
            type="submit"
            class="mb-5 btn btn-warning btn-block btn-flat"
          >{{processing? 'Processing...' : 'Update Profile'}}</button>
        </form>
      </ValidationObserver>
    </div>
  </main-content>
</template>

<script type="text/ecmascript-6">
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapGetters, mapActions } from "vuex";
import  imageSelect from "@/plugins/mixins/imageSelect";
function getDefaultData() {
  return {
    processing: false,
    form: {
      name: '',
      number: '',
      password: '',
      password_confirmation: '',
      imgUrl: ''
    }
  };
}

export default {
  name: "Profile",
  components: {
    ValidationObserver,
    ValidationProvider
  },

  mixins: [imageSelect],

  data() {
    return {
      pageTitle: "Profile",

      ...getDefaultData()
    };
  },


  methods: {
    ...mapActions(["save"]),


    submit() {
      this.processing = true;
      this.save({
        url: `users/${this.authUser.id}`,
        data: this.form,
        method: "patch"
      })
        .then(() => {

          requestAnimationFrame(() => {
            this.$refs.observer.reset();
          });
        })
        .catch(() => {
          this.$refs.observer.setErrors(this.server_errors);
          this.$Progress.fail();
        })
        .finally(() => {
           this.processing = false;
        }
        );
    }
  },

 
  mounted(){

    this.$store.dispatch('SET_AUTH_USER').then(()=>{
        this.form = { ...this.authUser };
    if (this.authUser.imgUrl)  this.form.imgUrl = `/storage${this.authUser.imgUrl}`;
    

    })

  }
};
</script>
