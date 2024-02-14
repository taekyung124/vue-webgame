<template>
  <div id="wrapper">
    <div>당첨 숫자</div>
    <div id="results-wrap">
      <lotto-ball v-for="ball in winBalls" number="5"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-for="ball in winBalls"></lotto-ball>
    <button v-if="redo">한번 더!</button>
  </div>
</template>
<script>
import LottoBall from "./LottoBall.vue";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length < 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0,6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}
export default {
  components: {
    'lotto-ball': LottoBall,
  },
  data() {
    return {
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo : true,
    }
  },
    computed: {},
    methods: {},
    mounted() {
      for (let i = 0; i < this.winNumbers.length - 1; i++){
        setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }
    },
    beforeUnmount() {

    },
    watch: {

    },
}
</script>

<style scoped lang="css">
  #wrapper {
    width: 500px;
    margin: 0 auto;
  }
</style>