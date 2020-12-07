<template>
  <div class="header">
    <img
      @click="goHome('/')"
      src="../static/images/home.png"
      :class="this.$route.pash !== '/' ? 'hide' : ''"
      alt=""
    />
    <img @click="goHome('/')" src="../static/images/logo.svg" alt="" />
    <img src="../static/images/china.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
