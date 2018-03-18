<template>
   <form>
       <h3 class="text-muted my-5">添加新的品种</h3>
       <div class="form-group row">
           <label class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newCase.name">
            </div>
       </div>
       <div class="form-group row">
           <label class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea rows="5" class="form-control" v-model="newCase.description">
                </textarea>
            </div>
       </div>
       <p>选项1</p>
       <div class="form-group row">
           <label class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newCase.size1">
            </div>
       </div>
       <div class="form-group row">
           <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newCase.price1">
            </div>
       </div>
       <p>选项2</p>
       <div class="form-group row">
           <label class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newCase.size2">
            </div>
       </div>
       <div class="form-group row">
           <label class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newCase.price2">
            </div>
       </div>
       <div class="form-group row">
           <button @click="addMenuItem" class="btn btn-success btn-block">添加</button>
       </div>
   </form>
</template>

<script>
export default {
  data() {
    return {
      newCase: {}
    };
  },
  methods: {
    addMenuItem() {
      let data = {
        name: this.newCase.name,
        description: this.newCase.description,
        options: [
          {
            size: this.newCase.size1,
            price: this.newCase.price1
          },
          {
            size: this.newCase.size2,
            price: this.newCase.price2
          }
        ]
      };

      this.http
        .post("menu.json", data)
        .then(res=>{this.$store.commit('pushMenuItems',data)});
    }
  }
};
</script>

<style scoped>

</style>