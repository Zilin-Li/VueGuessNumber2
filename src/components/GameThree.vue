<template>
  <div class="whole_bg_color">
      	<h1 class="">Guess My Number(Third Game)</h1>
        <div class="alert alert-primary msgbox marginTop15px">
          {{message}}
        </div>

        <div class="col-lg-12 marginTop15px">
        <form action="#" method="post" v-on:submit.prevent="setNum">
          <input type="text" v-model="userNumber">
          <input type="button" :disabled='setIsDisabled' value="Set Number" @click ="setNum" class="btn btn-primary">
        </form>
        </div>

        <div class="marginTop15px">
          <input type="button" :disabled='guessIsDisabled' value="Begin to Guess"  @click ="guess" class="btn btn-primary">
          <input type="button" value="Restart Game" @click ="restart" class="btn btn-primary">
        </div>
        <label class="marginTop15px">{{counterDisplay}}</label>
        <div class="alert alert-primary msgbox marginTop15px">{{computerOutput}}</div>
        <div class="marginTop15px">
          <input type="button" :disabled='isDisabled' name="" value="Try Higher" @click ="tryhigher" class="btn btn-primary">
          <input type="button" :disabled='isDisabled' name="" value="Try Lower" @click ="trylower" class="btn btn-primary">
          <input type="button" :disabled='isDisabled' name="" value="Correct" @click ="correct" class="btn btn-primary">
        </div>

    </div>
	</div>
</template>



<script>

import GameThree from '../model/GameThree.js'
var newGame = new GameThree

export default {
  name: 'GameThree',
  data () {
    return newGame
  },
  methods: {
    // Prepare or renew the game.
      setNum(){
        newGame.setNum()
      },

      restart(){
        newGame.restart()
      },

      guess(){
        newGame.guess()
      },

      tryhigher(){
        newGame.tryhigher()
      },

      trylower(){
        newGame.trylower()
      },

      correct(){
        newGame.correct()
      },

      created(){
        newGame.init()
      }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.msgbox{
  background-color:lightgreen;
}

</style>
