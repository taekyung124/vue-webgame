<template>
  <div class="ball" v-bind:style="{ background }">{{ number }}</div>
</template>
<script>
  export default {
    name: 'LottoBall',
    props: ['number'],
    data() {
      let background;
      return {
        background,
      };
    },
    methods: {

    }
  }
</script>
<style scoped lang="css">
  .ball {
    display: inline-block;
    border: 1px solid #000;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-right: 20px;
  }
</style>