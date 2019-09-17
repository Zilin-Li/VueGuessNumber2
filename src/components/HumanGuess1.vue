<template>
  <div class="whole_bg_color">
    <h1 class="marginTop15px">Guess My Number(First Game)</h1>
		<h4 class="marginTop15px">I have a number, please guess (between 1 and 99)</h4>

    <div class="alert alert-primary msgbox marginTop15px" role="alert">
      {{result}}
    </div>

    <div>
      <!-- <div class="msgbox">{{result}}</div> -->
      <input type="button" value="Play" @click="init" class="btn btn-primary marginTop15px">
    </div>

    <form class="form-inline marginTop15px">
      <div class="col-lg-12">
        <input type="text" value="" v-model="guessNumber" class="form-control">
        <input type="button" value="Guess" @click="guess" class="btn btn-primary">
      </div>
    </form>

		</div>
</template>

<script>

import GameOne from '../model/humanguess1.js'
var newGame = new GameOne

export default {
  name: 'HumanGuess1',
  data () {
    return newGame
  },
  methods: {

      // Prepare or renew the game.
      init(){
        newGame.init()
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
    background-color:pink;
  }
</style>
