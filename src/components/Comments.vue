<template>
    <h2>Комментарии({{count}})</h2>
      <ul>
        <li v-bind:key="item.id" v-for="item in list">
          {{item.text}}
        </li>
      </ul>
</template>

<script>
import axios from "axios";

export default {
  beforeMount: function (el) {
    if(this?.id){
      axios.get("http://localhost:5173/stub/comments.json").then(response => {
        const filteredArray = response.data.list.filter (
          element => element.product_id == this?.id
        )
        console.log("Отсортированный массив", filteredArray)
        this.list = filteredArray
        this.count = filteredArray.length
      })
    }
  },
  data(){
    return{
      count: 0,
      list: null
    };
},
  setup(){
    return{
    }
  },
  props: ['id']
}
</script>

<style scoped>
 ul {
   list-style: none;
 }
</style>