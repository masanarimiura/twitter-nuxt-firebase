<template>
  <div id="app">
    <div v-for="(user_id, content) in tweets" :key="user_id" class="tweet__show">
      {{ index + "番目のプロパティ名は" + key + "で値は" + value }}
    </div>
  </div>
</template>

<script>
    const vm = new Vue({
      el: '#app',
      data: {
        fruits: [
          {
            name: 'リンゴ',
            weight: 295.6467,
            num: 2,
          },
          {
            name: 'ブドウ',
            weight: 325.4567,
            num: 5
          },
          {
            name: 'ミカン',
            weight: 101.9235,
            num: 1
          },
        ]
      },
      computed: {
        sumFruitsWeight: function () {
          return this.fruits.reduce(function (sum, fruit) {
            return sum + (fruit.num * fruit.weight);
          }, 0)
        },
        sumFruitsNum: function () {
          return this.fruits.reduce(function (sum, fruit) {
            return sum + fruit.num;
          }, 0)
        },
        checkFruitsNum: function () {
          return this.sumFruitsNum >= 10;
        },
        errorStyle: function () {
          return {
            color: !this.checkFruitsNum ? 'red' : 'blue'
          }
        }
      },
      filters: {
        decimalFormat: function (value) {
          return value.toFixed(2);
        }
      }
    })
</script>

<style>
.tweet__show {
  padding: 20px;
  border: solid 1px #fff;
}
</style>