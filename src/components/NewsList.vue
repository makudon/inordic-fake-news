<template>
  <loader v-if="list.length == 0"></loader>
  <section>
    <h1 v-if="list.length !== 0">{{title}}</h1>
    <ul class="shopping">
      <li class="shopping__item" v-bind:key="item.id" v-for="item in list">
        <router-link v-bind:to="'/news/' + item.id">
          <img class="shopping__img" v-bind:src="item.image" v-bind:alt="item.title"/>
          <span class="shopping__title">
            {{item.title}}
          </span>
        </router-link>
      </li>
    </ul>
  </section>

  <button>
    <router-link to="/" tag="button">Главная</router-link>
  </button>
  <button>
  <router-link to="/news/1" tag="button">Детальная инфа</router-link>
  </button>
</template>

<script>
import { useRouter, useRoute } from "vue-router"
import axios from "axios"
import Loader from "./Loader.vue";
export default {
  //В переменной $route доступно поле params со всеми параметрами из строки
  beforeMount: function (el) {
    const route = useRoute()
    const router = useRouter()
    // console.log("beforeMount route", route)
    console.log("beforeMount router", router)
    console.log("route.query id", router.currentRoute.value.params.id)
    //Получаем параметр id из URL
    const ID = router.currentRoute.value.params.id
    console.log("axios", axios)
    axios.get("https://fakestoreapi.com/products")
        .then((response => {
          //Блок then срабатывает
          console.log(response);
          //Записываем данные пришедшие от сервера в блок (data) в ячейку data
          this.list = response.data
        }))
  },
  data() {
    return {
      title: "Список Товаров",
      list: []
    }
  },
  setup() {
    return {
    }
  },
  components: {
    'loader': Loader
  }
}
</script>

<style scoped>

.shopping__img {
  width: 50px;
  margin-right: 20px;
}

ul{
  list-style: none;
}

.shopping__item {
  background: white;
  color: black;
  display: flex;
  align-items: center;
  margin: 15px;
  padding: 10px;
  border-radius: 20px;
}

.shopping__item a {
  display: flex;
  align-items: center;
  color: black;
}

.shopping__item a:hover {
  outline: 3px solid red;
}

.shopping__title {
  font-size: 24px;
}

</style>