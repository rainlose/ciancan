<template>
<div class="row">
  <div id="home" class="col-sm-12 text-center"> 
    <div class="bg">
      <h1>this is food</h1>
      <button @click="gotoMenu" class="btn btn-success"> let's go</button>
    </div>
    
  </div>
</div>

</template>
<script>
export default {
  methods: {
    gotoMenu() {
      this.$router.push("/menu");
    }
  }
};
</script>
<style>
#home {
  background-image: url("../assets/pizza.jpg");
  background-size: 100% 100%;
  height: 85vh;
  padding: 10%;
}
h1 {
  margin: 5%;
}
.bg {
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
