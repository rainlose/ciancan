<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for='item in getMenuItems' :key='item.name'>
          <tr>
            <td>{{item.name}}</td>
          </tr>
          <tr v-for='option in item.options' :key='option.size'>
            <td>{{option.size}}</td>
             <td>{{option.price}}</td>
             <td><button class="btn btn-sm btn-outline-success" @click="addToBaskets(item,option)">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length>0">
        <table class="table" >
          <thead class="thead-default">       
            <tr > 
              <th>数量</th> 
              <th>品种</th> 
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.id">
            <tr>
              <td><button class="btn btn-sm" @click='decrease(item)'>-</button>
              <span>{{item.quantity}}</span>
              <button class="btn btn-sm" @click='increase(item)'>+</button></td>
              <td>{{item.name}}{{item.size}}</td>
              <td>{{item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价:{{total+ "RMB"}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>{{basketsText}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baskets: [],
      basketsText: "没有商品?"
      // getMenuItems: {}
    };
  },
  computed: {
    getMenuItems() {
       return this.$store.getters.getMenuItems
    },
    total() {
      let totalMoney = 0;
      for (let index in this.baskets) {
        let Item = this.baskets[index];
        totalMoney += Item.quantity * Item.price;
      }
      return totalMoney;
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      // this.http.get("menu.json").then(res => {
      //   this.getMenuItems = res.data;
      //   console.log(this.getMenuItems);
      // });
      //  fetch("https://wd8360477617flqnwk.wilddogio.com/menu.json")
      //     .then(res => {
      //       return res.json()
      //     })
      //     .then(data => {
      //       this.getMenuItems = data;
      //       console.log(this.getMenuItems);
      //     })
      this.http.get("menu.json")
      .then(res => {
        this.$store.commit("setMenuItems", res.data);
      });
    },

    addToBaskets(item, option) {
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };
      if (this.baskets.length > 0) {
        let result = this.baskets.filter(basket => {
          return basket.name === item.name && basket.price === option.price;
        });
        if (result != null && result.length > 0) {
          result[0].quantity++;
        } else {
          this.baskets.push(basket);
        }
      } else {
        this.baskets.push(basket);
      }
    },
    decrease(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeFromBasket(item);
      }
    },
    increase(item) {
      item.quantity++;
    },
    removeFromBasket(item) {
      this.baskets.splice(this.baskets.indexOf(item), 1);
    }
  }
};
</script>