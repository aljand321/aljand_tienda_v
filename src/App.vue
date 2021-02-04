<template>
  <div>
    <div id="nav" v-if="isLoged">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/services">services</router-link> |
      <input type="submit" value="Home" @click="click" />
    </div>

    <router-view />
  </div>
</template>

<script>
import Login from "./views/Login";
export default {
  data: () => ({
    isLoged: false,
  }),
  components: {
    Login,
  },
  created() {
    this.verifyToken();
  },
  mounted() {
    console.log("esro");
  },
  methods: {
    async verifyToken() {
      const token = await JSON.parse(localStorage.getItem("UserDATA"))

      console.log(token, " esto es lo que quiero ver", this.isLoged);
      if (token) {
        this.isLoged = token.loged;

        /* if (this.$route.name == null) {
          this.$router.push(await localStorage.getItem("route"));
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: "No se puede navegar desde ahi",
          });
        } */
        //console.log("111111, hay token")
      } else {
        //console.log("22222")
        if (this.$route.path !== "/login") this.$router.push({ name: "Login" });
      }
    },
    click() {
      this.$router.push("/");
    },
  },
};
</script>
