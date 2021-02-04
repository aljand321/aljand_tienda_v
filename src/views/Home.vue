<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Token from '../token.js';

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: () => ({}),
  created() {
    this.verify();
    //console.log(this.$router)
  },
  methods: {
    async verify() {
      await Token.verifyToken(this.$route.path);
    },
  },
};
</script>
