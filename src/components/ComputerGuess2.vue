<template>
  <div class="whole_bg_color">
      	<h1 class="">Guess My Number(Forth Game)</h1>
        <div class="alert alert-primary msgbox marginTop15px" role="alert">
          {{message}}
        </div>


        <div class="marginTop15px">
          <input type="button" :disabled='startButton' name="" value="Start Game"  @click ="startGame">
          <input type="button" name="" value="Restart Game" @click ="restart"><br>
          <input type="button" :disabled='isDisabled' name="" value="COLD"  @click ="ColdButton">
          <input type="button" :disabled='isDisabled' name="" value="COOL"  @click ="CoolButton">
          <input type="button" :disabled='isDisabled' name="" value="WARM"  @click ="WarmButton">
          <input type="button" :disabled='isDisabled' name="" value="HOT"   @click ="HotButton">
          <input type="button" :disabled='isDisabled' name="" value="CORRECT" @click = "CorrectButton">
        </div>

        <div class="alert alert-primary msgbox marginTop15px">{{computerOutput}}</div>

    </div>
	</div>
</template>



<script>

import GameFour from '../model/computerguess2.js'
var newGame = new GameFour

export default {
  name: 'ComputerGuess2',
  data () {
    return newGame
  },
  methods: {
    // Prepare or renew the game.
    startGame(){
      newGame.startGame()
    },

    restart(){
      newGame.restart()
    },

    ColdButton(){
      newGame.ColdButton()
    },

    CoolButton(){
      newGame.CoolButton()
    },


    WarmButton(){
      newGame.WarmButton()
    },

    HotButton(){
      newGame.HotButton()
    },

    CorrectButton(){
      newGame.CorrectButton()
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
