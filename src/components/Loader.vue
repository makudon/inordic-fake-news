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
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;

}

.loading__text {
  font-size: 24px;
  background: black;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 5px red;
}

</style>