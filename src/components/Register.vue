<template>
  <div class="row mt-3">
    <div class="col=-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../assets/user.png" alt="">
          <form @submit.prevent='onSubmit'>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
              <label for="comfirm-password">确认密码</label>
              <input type="password" class="form-control" v-model="comfirmPassword">
            </div>
            <button type="submit" class="btn btn-block btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      comfirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.password == this.comfirmPassword) {
        const formData = {
          email: this.email,
          password: this.password,
          comfirmPassword: this.comfirmPassword
        };
      axios.post('/users.json',formData).then(res=>{
        console.log('ok')
        this.$router.push({name:'loginLink'})
      })   
      }else{
        alert('两次密码不一致！')
      }
      }
  }
};
</script>
