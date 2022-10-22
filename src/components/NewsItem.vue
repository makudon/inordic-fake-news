<template>
  <loader v-if="!data"></loader>
  <section v-if="data">
  <img v-bind:src="data?.image" v-bind:alt="data?.title">
  <h1>{{data?.title}}</h1>
  <button>
    <router-link to="/news" tag="button">Обратно</router-link>
  </button>
  </section>
  <comments :id="data?.id"></comments>
</template>

<script>
//ДЗ
//Вывести список товаров
//адрес - https://fakestoreapi/products
//Усложнение - переход из NewsList в NewsItem
import { useRouter, useRoute } from "vue-router"
import axios from "axios"
import Loader from "./Loader.vue";
import Comments from "./Comments.vue";
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
    axios.get(`https://fakestoreapi.com/products/${ID}`)
        .then((response => {
          //Блок then срабатывает
          console.log(response);
          //Записываем данные пришедшие от сервера в блок (data) в ячейку data
          this.data = response.data
        }))
  },
    mounted: () => {
    console.log("mounted")

    },
  data() {
    return {
      hello: "Привет",
      data: null
    }
  },
  setup() {
    return {
    }
  },
    components: {
      'loader': Loader,
      'comments': Comments
    }
}
</script>

<style scoped>
img {
  max-width: 400px;
}

button {
  position: absolute;
  top: 0;
  left: 0;
}

button a {
  color: white;
  font-size: 30px;
}
</style>