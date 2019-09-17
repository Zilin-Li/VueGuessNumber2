<template>
  <div id="app">
    <router-link v-bind:to="'/'" class="btn btn-primary">Game One</router-link>
    <router-link v-bind:to="'/HumanGuess2'" class="btn btn-primary">Game Two</router-link>
    <router-link v-bind:to="'/ComputerGuess1'" class="btn btn-primary">Game Three</router-link>
    <router-link v-bind:to="'/ComputerGuess2'" class="btn btn-primary">Game Four</router-link>

      <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* components use below CSS */
.marginTop15px{
  margin-top: 15px
}
.msgbox{
  width:80%;
  margin: auto;;
}
.whole_bg_color{
  padding: 10px;
  background-color: lightblue;
  width: 50%;
  margin: 20px auto;
  border-radius:10px;
}
</style>
