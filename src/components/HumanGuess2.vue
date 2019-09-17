<template>
  <div class="whole_bg_color">
		<h1 class="marginTop15px">Guess My Number(Second Game)</h1>
		<h4 class="marginTop15px">I have a number, please guess (between 1 and 99)</h4>

    <div class="alert alert-primary msgbox marginTop15px" role="alert">
      {{result}}
    </div>

    <input type = "button" value ="Play" @click ="resetGame" class="btn btn-primary marginTop15px">

    <form class="form-inline marginTop15px">
      <div class="col-lg-12">
  			<input type="text" value="" v-model="guessNumber" class="form-control">
  			<input type="button" value="Guess" @click="guess" class="btn btn-primary">
      </div>
		</form>
	</div>
</template>

<script>

import GameTwo from '../model/humanguess2.js'
var newGame = new GameTwo

export default {
  name: 'HumanGuess2',
  data () {
    return newGame
  },
  methods: {
    resetGame(){
            newGame.resetGame()
          },

          guess(){
            newGame.guess()
            }
      },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.msgbox{
  background-color:lightyellow;
}
</style>
