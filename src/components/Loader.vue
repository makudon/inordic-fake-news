<template>
  <div class="loading">
    <div class="loading__text">Загрузка.....</div>
  </div>
</template>

<script>
export default {
  name: "Loader.vue"
}
</script>

<style scoped>

.loading {
  position: fixed;
  width: 100px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.loading__text {
  font-size: 24px;
  background: black;
  padding: 20px;
  border-radius: 20px;
}

</style>