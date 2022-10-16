<template>
  <h1>{{title}}</h1>
</template>

<script>
  export default {
  beforeMount: (el) => {
    console.log("beforeMount")
    //Сделать запрос к api для вывода новостей

  },
  data() {
    return {
      title: "Список Новостей"
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