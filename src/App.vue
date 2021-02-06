<template>
  <div>
    <!-- <div id="nav" v-if="isLoged">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/services">services</router-link> |
      <input type="submit" value="Home" @click="click" />
    </div> -->
    <div class="hidden">
      <Navbar v-if="isLoged"></Navbar>
      <div class="RoutersContainer">
        <router-view />
      </div>
      
    </div>
   

    
  </div>
</template>

<script>
//import Login from "./views/Login";
//import Navbar from "./views/Navbar";
import Navbar from './components/Menu/Navbar';


export default {
  data: () => ({
    isLoged: false,
  }),
  components: {
    //Login,
    Navbar,
   
  },
  created() {
    this.verifyToken();
    //advertencia
    console.log("--------------------------------------------------------")
    console.log("--------------------------------------------------------")
    console.log("Advertencia: ionicons se esta importando desde internet")
    console.log("--------------------------------------------------------")
    console.log("--------------------------------------------------------")
  },
  mounted() {
    console.log("esro");
  },
  methods: {
    async verifyToken() {
      const token = await JSON.parse(localStorage.getItem("UserDATA"))

      //console.log(token, " esto es lo que quiero ver", this.isLoged);
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
<style lang="css">
body {
  margin:0;
  padding:0;
}
/* .RoutersContainer{
  background: red;
  margin-top: 50px;
  margin-left: 260px;
} */
</style>
