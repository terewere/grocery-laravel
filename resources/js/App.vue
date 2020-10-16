<template>
<body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
  <component :is="layout">
    <router-view />
  </component>
  <vue-progress-bar></vue-progress-bar>

  <div
    id="notification"
    :class="{hidden:onLine}"
    class="p-4 alert alert-danger alert-dismissible fade show"
    role="alert"
  >
    <strong>Offline!</strong> Could not connect to the server.
    <!-- <a href="#" onclick="window.location.reload()">Reload page</a> -->
  </div>
</body>
</template>
 
<script>
const default_layout = "default";
import Gate from '@/plugins/Gate';

import { mapGetters, mapActions } from "vuex";
import Vue from 'vue'

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },

  created() {
       this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
    if (this.$store.state.auth.isLoggedIn) {
      if (this.authUser.name === undefined) {
        this.$store.dispatch("SET_AUTH_USER");
        
      }
    }

    
    

  },

  data() {
    return {
      onLine: true,
      // onLine: navigator.onLine,
      showBackOnline: false
    };
  },

  methods: {
    ...mapActions(["setOnline"]),

    updateOnlineStatus(e) {
      const { type } = e;
      this.onLine = type === "online";
    }
  },

  watch: {
    onLine(v) {

      this.setOnline(v);
    }
  },
  mounted() {
        this.$Progress.finish()

    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);
    // console.log(this.onLine)
    this.setOnline(this.onLine);
  },
  beforeDestroy() {
    window.removeEventListener("online", this.updateOnlineStatus);
    window.removeEventListener("offline", this.updateOnlineStatus);
  }
};
</script>
<style lang="scss" scoped>
#notification,
#notification_connectionDead {
  position: fixed;
  right: 4px;
  top: 40px;
  z-index: 222;
  height: 60px;
  min-width: 270px;
  // display: none;
}
.hidden {
  display: none;
}
</style>

