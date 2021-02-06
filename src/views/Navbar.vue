<template>
  <div class="hidden">
    <!-- navbar o menu superior -->
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
          <vs-button flat >Login</vs-button>
          <vs-button>Get Started</vs-button>
        </template>
    </vs-navbar>
    <!-- sidebar menu o menu lateral -->
    <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
      <template #logo>
        <ion-icon name="logo-edge"></ion-icon>
        <h3>Aqui entra el logo</h3>
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <ion-icon name="home-outline"></ion-icon>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <ion-icon name="people-outline"></ion-icon>
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <template #icon>
            <ion-icon name="logo-instagram"></ion-icon>
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <ion-icon name="logo-twitter"></ion-icon>
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          <template #icon>
            <ion-icon name="logo-facebook"></ion-icon>
          </template>
          Facebook
        </vs-sidebar-item>
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

  <!-- <aside>
    <p>Menu</p>
    <a href="javascript:void(0)">
      <i class="fa fa-user-o" aria-hidden="true"></i>
      My drive
    </a>
    <a href="javascript:void(0)">
      <i class="fa fa-laptop" aria-hidden="true"></i>
      Computers
    </a>
    <a href="javascript:void(0)">
      <i class="fa fa-clone" aria-hidden="true"></i>
      Shared with me
    </a>
    <a href="javascript:void(0)">
      <i class="fa fa-star-o" aria-hidden="true"></i>
      Starred
    </a>
    <a href="javascript:void(0)">
      <i class="fa fa-trash-o" aria-hidden="true"></i>
      Trash
    </a>
  </aside> -->
</template>

<script>
import Token from "../token.js";

export default {
  data: () => ({
    active: "home",
    activeSidebar: false,
  }),
  created() {
    this.verify();
  },
  mounted() {
    this.$vs.setColor("success", "#000");
  },
  methods: {
    async verify() {
      await Token.verifyToken(this.$route.path);
    },
  },
};
</script>

<style lang="css" scoped>
[size] {
  font-size: 22px;
}
/* aside {
  color: #fff;
  width: 250px;
  padding-left: 20px;
  height: 100vh;
  background-image: linear-gradient(30deg, #0048bd, #44a7fd);
  border-top-right-radius: 80px;
}

aside a {
  font-size: 12px;
  color: #fff;
  display: block;
  padding: 12px;
  padding-left: 30px;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

aside a:hover {
  color: #3f5efb;
  background: #fff;
  outline: none;
  position: relative;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

aside a i {
  margin-right: 5px;
}

aside a:hover::after {
  content: "";
  position: absolute;
  background-color: transparent;
  bottom: 100%;
  right: 0;
  height: 35px;
  width: 35px;
  border-bottom-right-radius: 18px;
  box-shadow: 0 20px 0 0 #fff;
}

aside a:hover::before {
  content: "";
  position: absolute;
  background-color: transparent;
  top: 38px;
  right: 0;
  height: 35px;
  width: 35px;
  border-top-right-radius: 18px;
  box-shadow: 0 -20px 0 0 #fff;
}

aside p {
  margin: 0;
  padding: 40px 0;
}

body {
  font-family: "Roboto";
  width: 100%;
  height: 100vh;
  margin: 0;
} */
</style>