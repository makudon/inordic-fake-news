<template>
  <h1>Список Новостей</h1>
</template>

<script>
  export default {
  beforeMount: (el) => {
    console.log("beforeMount")
  },
  data() {
    return {
      hello: "Привет"
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