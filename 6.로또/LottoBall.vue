<template>
  <div class="ball" :style="styleObject">{{ number }}</div>
</template>

<script>
export default {
  name: 'LottoBall',
  props: {
    number: Number,
  },
  computed : {
    styleObject() {
      let background;
      if (this.number <= 10) {
        background = '#FAE100';
      } else if(this.number <= 20) {
        background = 'blue';
      } else if(this.number <= 30) {
        background = 'red';
      } else if(this.number <= 40) {
        background = 'green';
      } else {
        background = 'gray';
      }
      return {
        background,
      };
    }
  },
  mounted() {

  },
  beforeUnmount() {

  },
};
</script>

<style scoped lang="css">
  .ball {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    border: 1px solid white;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
    vertical-align: top;
    color: white;
  }
</style>