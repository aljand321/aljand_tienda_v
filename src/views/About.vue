<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import Token from '../token.js';
export default {
  data: () => ({
    
  }),
  created(){
    this.verify();
    //console.log(this.$router)
    
  },
  methods:{
    async verify(){
      await Token.verifyToken(this.$route.path);
    }
  }
}
</script>
