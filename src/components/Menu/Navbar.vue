<template>
  <div>
    <!-- navbar menu -->
    <vs-navbar shadow square center-collapsed v-model="active">
      <template #left>
        <vs-button @click="activeSidebar = !activeSidebar" flat icon>
          <ion-icon name="menu-outline" size></ion-icon>
        </vs-button>
      </template>
      <vs-navbar-item :active="active == 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <!-- sidebar menu -->
    <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
      <template #logo>
        <ion-icon name="logo-edge"></ion-icon>
        <h3>Aqui entra el logo</h3>
      </template>
      <div vs-sidebar-item-container @click="activeSidebar = !activeSidebar">
        <vs-sidebar-item id="home">
          <template #icon>
            <ion-icon name="home-outline"></ion-icon>
          </template>
          Home
        </vs-sidebar-item>
      </div>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <ion-icon name="people-outline"></ion-icon>
            </template>
            Social media
          </vs-sidebar-item>
        </template>
        <div vs-sidebar-item-container @click="activeSidebar = !activeSidebar">
<vs-sidebar-item id="Instagram">
          <template #icon>
            <ion-icon name="logo-instagram"></ion-icon>
          </template>
          Instagram
        </vs-sidebar-item>
        </div>
        <div vs-sidebar-item-container @click="activeSidebar = !activeSidebar">
<vs-sidebar-item id="twitter">
          <template #icon>
            <ion-icon name="logo-twitter"></ion-icon>
          </template>
          Twitter
        </vs-sidebar-item>
        </div>
        
        <div vs-sidebar-item-container @click="activeSidebar = !activeSidebar">
<vs-sidebar-item id="Facebook">
          <template #icon>
            <ion-icon name="logo-facebook"></ion-icon>
          </template>
          Facebook
        </vs-sidebar-item>
        </div>
        
      </vs-sidebar-group>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge> 28 </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: "home",
    activeSidebar: false,
  }),
};
</script>

<style lang="css" scoped>
[size] {
  font-size: 22px;
}
[vs-sidebar-item-container]{    
    width: 100%;
}
</style>