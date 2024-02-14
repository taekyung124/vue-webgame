<template>
  <div id="wrapper">
    <div id="computer" :style="computedStyleObject"></div>
    <div id="btn-wrap">
      <button @click="onClickButton('scissors')">가위</button>
      <button @click="onClickButton('rock')">바위</button>
      <button @click="onClickButton('paper')">보</button>
    </div>
    <div style="margin-top: 20px; color: #94d8ff; background-color: black;">{{ result }}</div>
    <div style="margin-top: 10px;">현재 {{ score }} 점</div>
    <div></div>
  </div>
</template>

<script>
const rpsImgX = {
  rock : '0',
  scissors : '-140px',
  paper : '-280px',
};
const rpsImgW = {
  rock : '165px',
  scissors : '140px',
  paper : '160px',
};

const scores = {
  rock : 0,
  scissors : 1,
  paper : -1,
};

const computerChoice = (imgX) => {
  return Object.entries(rpsImgX).find( function (v) {
    return v[1] === imgX;
  })[0];
};

let interval = null;
  export default {
    data () {
      return {
        result: '',
        score: 0,
        imgX: rpsImgX.rock,
        imgW: rpsImgW.rock,
      }
    },
    computed : {
      computedStyleObject (){
        return {
          background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgX} 0`, width: `${this.imgW}`, height: '200px'
        };
      },
    },
    methods : {
      changeHand(){
        interval = setInterval(() => {
          if (this.imgX === rpsImgX.rock && this.imgW === rpsImgW.rock) {
            this.imgX = rpsImgX.scissors;
            this.imgW = rpsImgW.scissors;
          } else if (this.imgX === rpsImgX.scissors && this.imgW === rpsImgW.scissors) {
            this.imgX = rpsImgX.paper;
            this.imgW = rpsImgW.paper;
          } else if (this.imgX === rpsImgX.paper && this.imgW === rpsImgW.paper) {
            this.imgX = rpsImgX.rock;
            this.imgW = rpsImgW.rock;
          }
        }, 100);
      },
      onClickButton(choice){
        clearInterval(interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(this.imgX)];
        console.log(cpuScore);
        const diff = myScore - cpuScore;

        if ( diff === 0 ){
          this.result = '비겼습니다.';

        } else if ( [-1, 2].includes(diff) ) {
          this.result = '이겼습니다!';
          this.score += 1;
        } else {
          this.result = '졌습니다ㅠㅅㅠ';
          this.score -= 1;
        }
        setTimeout(() => {
          this.changeHand();
        },1000)
      },
    },
    mounted() {
      this.changeHand();
    },
    beforeUnmount() {
      clearInterval(interval);
    },
  };
</script>

<style scoped lang="css">
  #wrapper {
    width: 100%;
    text-align: center;
  }
  #computer ,#btn-wrap { margin: 0 auto;}
  #btn-wrap {
    width: 200px;
    margin-top: 12px;
  }
  button {
    padding: 8px 10px;
    margin-left: 4px;
    border: 2px solid #6baec9;
    border-radius: 14px;
    font-weight: bold;
  }
  #btn-wrap button:first-child { margin-left: 0;}

</style>