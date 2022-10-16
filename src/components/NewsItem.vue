<template>
  <h1>{{data?.title}}</h1>
  <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg">
</template>

<script>
//ДЗ
//Вывести список товаров
//адрес - https://fakestoreapi/products
//Усложнение - переход из NewsList в NewsItem
import { useRouter, useRoute } from "vue-router"
import axios from "axios"
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
    axios.get("https://fakestoreapi.com/products/1")
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
  }
}
</script>

<style scoped>

</style>