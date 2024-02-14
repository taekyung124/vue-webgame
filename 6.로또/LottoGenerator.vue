<template>
  <div id="wrapper">
    <div>당첨 숫자</div>
    <div id="result-wrap">
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
    </div>
    <div>보너스<button v-if="redo" @click="onClickRedo">한 번 더!</button></div>
    <div id="result-wrap">
      <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    </div>
  </div>
</template>

<script>

  import LottoBall from "./LottoBall.vue";

  function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
     shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length -1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return[...winNumbers,bonusNumber];
  }
  export default {
    components: {
      'lotto-ball' : LottoBall,
    },
    data () {
      return {
        winNumbers : getWinNumbers(),
        winBalls: [],
        bonus: null,
        redo: false,
      }
    },
    computed : {

    },
    methods : {
      onClickRedo() {
        this.winNumbers = getWinNumbers();
        this.winBalls = [];
        this.bonus = null;
        this.redo = false;
        this.showBalls();
      },
      showBalls() {
        for (let i = 0; i < this.winNumbers.length -1; i++) {
          setTimeout(() => {
            this.winBalls.push(this.winNumbers[i]);
          }, (i + 1) * 1000);
        }
        setTimeout(() => {
          this.bonus = this.winNumbers[6];
          this.redo = true;
        }, 7000);
      }
    },
    mounted() {
      this.showBalls();
    },
    beforeUnmount() {

    },
    watch: {

    },
  };
</script>

<style scoped lang="css">
  #wrapper {
    width: 500px;
    padding: 20px;
    margin: 0 auto;
    font-weight: bold;
  }
  #result-wrap {
    height: 42px;
    margin: 10px 0;
    padding: 20px 20px 30px;
    background: black;
  }
  button {
    padding: 4px 8px;
    margin-left: 6px;
    border: 1px solid black;
    border-radius: 14px;
    background: white;
  }
</style>