<template>
<div class="row">
  <div class="col-sm-12 col-md-8">
     <app-new-menu></app-new-menu>
  </div>
  <div class="col-sm-12 col-md-4">
    <h3 class="text-muted my-5">菜单</h3>
  <table class="table">
    <thead class="table table-default">
      <tr>
        <th>品种</th>
        <th>删除</th>
      </tr>
    </thead>
    <tbody v-for="item in getMenuItems" :key="item.name">
      <tr>
        <td>{{item.name}}</td>
        <td><button  @click="deleteData(item)" class="btn btn-sm btn-outline-danger">&times;</button></td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
</template>
<script>
import NewMenu from "./NewMenu";
export default {
  data() {
    return {
      // getMenuItems: []
    };
  },
  methods: {
    deleteData(item) {
      this.http
        .delete("menu/" + item.id + ".json")
        .then(res => {
          this.$store.commit("removeMenuItems", item);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    getMenuItems: {
      get() {
        return this.$store.getters.getMenuItems;
      },
      set() {}
    }
  },
  components: {
    "app-new-menu": NewMenu
  },
  created() {
    this.http.get("menu.json").then(res => {
      let menuArray = [];
      let data = res.data;
      for (let key in data) {
        data[key].id = key;
        menuArray.push(data[key]);
      }
      // this.getMenuItems = menuArray;
      this.$store.commit("setMenuItems", menuArray);
    });
  }
};
</script>