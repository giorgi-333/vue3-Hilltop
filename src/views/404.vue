<template>
  <div class="not_fount">
    <h1>404 <br> page not found</h1>
    <h2 @click="$router.push({ name: 'mainPage' })">back to home</h2>
  </div>
</template>

<style scoped>
.not_fount {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 1;
  background-color: white;
  color: #464646;
  cursor: default;
  z-index: 9999999;
  font-size: 22px;
}
h2{
    color: rgba(0, 0, 0, 0.733);
    margin-top: 30px;
    font-size: 30px;
    cursor: pointer;
    text-transform: uppercase;
    font-family: "Big_caslon_medium";
    background-color:rgb(52, 220, 161);
    padding: 8px 14px;
    border-radius: 50px;
    box-shadow: 2px 2px 6px #2add1257;
}
</style>

<script>
export default {};
</script>