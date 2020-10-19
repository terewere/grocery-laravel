<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-success elevation-4">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img
        src="/images/icons/icon-72x72.png"
        alt
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
      <span class="brand-text font-weight-light pl-3">Grocery App</span>
    </router-link>
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <avatar
            class="img-circle elevation-2 mr-1 mt-1"
            :image="getAuthPicture"
            :fullname="authUser.name"
            :size="48"
          ></avatar>
        </div>
        <div class="info">
          <router-link to="/profile" class="d-block">{{authUser.name}}</router-link>
          <p class="small">
            <i
              v-bind:class="{ 'text-success': isOnline, 'text-danger': !isOnline }"
              class="fa fa-circle mr-2"
            ></i>
            <span class="text-white">{{isOnline?'Online':'Offline'}}</span>
          </p>
        </div>
      </div>
      <div
        v-if="gate.canAny([
        'create_projects', 
        'create_sales', 
        'create_expenses', 
        'create_employees', 
        'create_accounts', 
        'create_suppliers',
        'create_clients',
        
        ])"
        class="mt-3 pb-3 mb-3 d-flex"
      >
        <button class="btn btn-warning btn-block" type="button" data-toggle="dropdown">
          <i class="fa fa-plus mr-3"></i> New
        </button>
        <div class="dropdown-menu row">
          
          <button
            v-if="gate.can('create_users')"
            @click="newRoute($event)"
            class="dropdown-item"
            type="button"
          >Add User</button>
         
          <!-- <button @click="newRoute($event)" class="dropdown-item" type="button">Make Deposit</button>
          <button @click="newRoute($event)" class="dropdown-item" type="button">Make Transfer</button>-->
        </div>
      </div>
      <!-- Sidebar Menu -->
      <nav class="mt-2 mb-5">
        <ul
          class="sidebar-menu nav nav-pills nav-sidebar flex-column"
          data-expand-sidebar="true"
          data-widget="treeview"
          role="menu"
          data-accordion="true"
        >
          <!-- <li v-if="gate.can('view_western_homes')" class="nav-item user-panel mb-2">
             <a href="#" class="nav-link text-info">
                <i class="fas fa-globe nav-icon"></i>
                <p>
                  Katham 5
                </p>
              </a>
          </li> -->
          <template v-for="(item,i) in menu">
            <li
              v-if="item.child"
              v-show="gate.canAny(item.permissions)"
              class="nav-item has-treeview"
              :key="i"
            >
              <a href="#" class="nav-link">
                <i :class="item.icon"></i>
                <p>
                  {{item.name}}
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li
                  v-show="gate.canAny(child.permissions)"
                  class="nav-item"
                  v-for="(child,i) in item.child"
                  :key="i"
                >
                  <router-link
                    :data-widget="isMobile()? 'pushmenu' : ''"
                    :data-auto-collapse-size="isMobile()? 768: ''"
                    :to="child.link"
                    class="nav-link"
                  >
                    <i :class="child.icon"></i>
                    <p>{{child.name}}</p>
                  </router-link>
                </li>
              </ul>
            </li>

            <li v-else v-show="gate.canAny(item.permissions)" class="nav-item" :key="i">
              <router-link
                :data-widget="isMobile()? 'pushmenu' : ''"
                :data-auto-collapse-size="isMobile()? 768: ''"
                :to="item.link"
                class="nav-link"
              >
                <i :class="item.icon"></i>
                <p>{{item.name}}</p>
              </router-link>
            </li>
          </template>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
  <!-- /.navbar -->
</template>

<script>
import { mapGetters } from "vuex";
import Avatar from "@/components/Avatar";

export default {
  components: {
    Avatar
  },
  computed:{
    getAuthPicture() {
      if (this.authUser.picture) {
        return `/storage${this.authUser.picture}`;
      }
      return "";
    },
  },

  methods: {
    
    newRoute(evt) {
      const btn = evt.target.innerHTML;

      if (btn === "Add Project") {
          this.showModal("#add-project")
   
      } 
      
      else if (btn === "Add User") {
         this.showModal("#add-user")
 
      } 
 
      

    }
  },

  data() {
    return {
      menu: [
        {
          name: "Dashboard",
          link: "/dashboard",
          icon: "fas fa-tachometer-alt nav-icon text-success",
          permissions: ["view_dashboard"]
        },
          {
              name: "Categories",
              link: "/speakers",
              icon: "fas fa-circle nav-icon",
              permissions: ["view_employees"]
            },
             {
              name: "Orders",
              link: "/orders",
              icon: "fas fa-circle nav-icon",
              permissions: []
            },
  
          {
          name: "User Management",
          icon: "nav-icon fas fa-users text-success",
          permissions: ["view_users", "view_roles"],
          child: [
            {
              name: "Users",
              link: "/users",
              icon: "fas fa-circle nav-icon",
              permissions: ["view_users"]
            },
            {
              name: "Roles",
              link: "/roles",
              icon: "fas fa-circle nav-icon",
              permissions: ["view_roles"]
            }

          ]
        },
      ]
    };
  }
};
</script>
