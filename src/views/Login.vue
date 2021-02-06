<template>
  <div>
    <section>
      <div class="form-container">
        <h1>Iniciar Secion</h1>
        <form @submit="login">
          <div class="control">
            <label for="name">Nombre de usuario</label>
            <input
              type="text"
              v-model="login_data[0].data"
              :state="ifNull"
              :borderRed="login_data[0].success"
            />
            <div class="msg" v-if="login_data[0].success">
              <span class="msg">{{ login_data[0].msg }}</span>
            </div>
          </div>
          <div class="control">
            <label for="name">Contraceña</label>
            <input
              type="password"
              v-model="login_data[1].data"
              :state="ifNull"
              :borderRed="login_data[1].success"
            />
            <div class="msg" v-if="login_data[1].success">
              <span class="msg">{{ login_data[1].msg }}</span>
            </div>
          </div>

          <div class="control">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import Rutes from "../route.js";
export default {
  data: () => ({
    login_data: [
      { success: false, msg: "", data: "", state: false },
      { success: false, msg: "", data: "", state: false },
    ],
  }),
  created() {
    this.tokenVerify();
  },
  methods: {
    async login(e) {
      e.preventDefault();
      var next = true;
      for (var i = 0; i < this.login_data.length; i++) {
        if (!this.login_data[i].data) {
          this.login_data[i].success = true;
          this.login_data[i].msg = "Rellene este campo por favor";
          next = false;
        }
      }
      if (next == false)
        return this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Todos los campos son obligatorios",
        });
      var postData = {
        user: this.login_data[0].data,
        password: this.login_data[1].data,
      };
      const resp = await Rutes.login(postData);
      console.log(resp);
      if (resp.success == false) {
        return this.$swal({
          icon: "error",
          title: "Oops...",
          text: resp.msg,
        });
      } else {
        const parsed = JSON.stringify({
          loged: true,
          usuario: resp.vendedor,
          token: resp.token.token,
        });
        localStorage.setItem("UserDATA", parsed);
        window.location.replace('/')
      }
    },
    async tokenVerify() {
      const token = await JSON.parse(localStorage.getItem("UserDATA"));
      if (token) this.$router.push(await localStorage.getItem("route"));
    },
  },
  computed: {
    ifNull() {
      for (var i = 0; i < this.login_data.length; i++) {
        if (this.login_data[i].success != false) {
          return this.login_data[i].data.length > 3
            ? (this.login_data[i].success = false)
            : (this.login_data[i].success = true);
        }
      }
    },
  },
};
</script>

<style lang="css" scoped>
* {
  margin-top: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Open Sans";
  margin:0;
  padding:0;
}

section {
  position: relative;
  height: 100vh;
  width: 100%;
  background: url("../assets/image.jpg");
  background-size: cover;
  background-position: center center;
  color: #fff;
}
.form-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  width: 380px;
  padding: 50px 30px;
  border-radius: 10px;
  box-shadow: 7px 7px 60px #000;
}
h1 {
  text-transform: uppercase;
  font-size: 2em;
  text-align: center;
  margin-bottom: 2em;
}
.control input {
  width: 100%;
  display: block;
  padding: 10px;
  color: #222;
  border: none;
  outline: none;
  margin: 1em 0;
}
[borderRed]:focus {
  /* border: 1px solid rgb(165, 2, 2) ; */
  border: 2px solid crimson;
}
.control label {
  opacity: 0.7;
  font-size: 25px;
}
.control input[type="submit"] {
  background: crimson;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.2em;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}
.control input[type="submit"]:hover {
  opacity: 1;
}
.msg {
  /* background: red; */
  margin-top: -15px;
  transition: opacity 0.3s ease;
}
.msg {
  opacity: 0.7;
  background: crimson;
}
.msg span {
  color: #fff;
  font-size: 15px;
}
</style>