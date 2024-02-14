<template>
  <div id="wrapper">
    <div id="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
    <div id="record">
      <div>평균 시간 : {{ average }}초</div>
      <button v-show="result.length" v-on:click="onReset">리셋</button>
    </div>
  </div>
</template>

<script>
  let startTime = 0;
  let endTime = 0;
  let timeOut = null;
  export default {
    data() {
      return {
        result: [],
        state: 'waiting',
        message: '클릭해서 시작하세요.',
      }
    },
    computed: {
      average (){
        if(this.result.length === 0 ){
          return 0;
        }else {
          return (this.result.reduce((a,c) => a + c, 0) * 0.001 / this.result.length).toFixed(3) || 0;
        }
      }
    },
    methods: {
      onReset(){
        this.result = [];
      },
      onClickScreen(){
        if (this.state === 'waiting') {
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하세요.';
          timeOut = setTimeout(() => {
            this.state = 'now';
            this.message = '지금 클릭!';
            startTime = new Date();
          }, Math.floor(Math.random() * 1000) + 2000); //대략 2~3초
        } else if (this.state === 'ready') {
          clearTimeout(timeOut);
          this.state = 'waiting'
          this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요.';
        } else if (this.state === 'now') {
          endTime = new Date();
          this.state = 'waiting'
          this.message = '클릭해서 시작하세요.';
          this.result.push(endTime - startTime);
        }
      }
    },
  };

</script>

<style scoped lang="css">
  #wrapper { width: 100%;}
  #screen {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    user-select: none;
  }
  #record {
    width: 300px;
    margin: 20px auto;
  }

  button {
    width: 20%;
    margin-top: 12px;
    padding: 6px 14px;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 15px;
  }

  #screen.waiting {
    background-color: #94d8ff;
  }
  #screen.ready {
    background-color: #ff9497;
  }
  #screen.now {
    background-color: #0d8221;
  }
</style>