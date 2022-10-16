<template>
  <h1>Детализация новости</h1>
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