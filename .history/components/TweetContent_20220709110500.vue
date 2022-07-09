<template>
  <div>
    <li v-for="(value, key, index) in apple" :key="value">{{ index + "番目のプロパティ名は" + key + "で値は" + value }}</li>
    <div v-for="(id, content, user_id, ) in tweets" :key="id" class="tweet__show">
    
    </div>
  </div>
</template>

<style>
.tweet__show {
  padding: 20px;
  border: solid 1px #fff;
}
</style>