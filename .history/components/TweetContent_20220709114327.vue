<template>
  <div>
    <div v-for="(data,index) in tweets" :key="index" class="tweet__show">
      <div class="username">
        
      </div>
      <p class="tweet__content">{{data.content}}</p>
      
      
      {{ data.user_id + "は" +  + "とつぶやいた" }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweets: [
        {
          user_id: 1,
          content: 'つぶやき1',
        },
        {
          user_id: 2,
          content: 'つぶやき2',
        },
      ]
    };
  }
};
</script>

<style>
.tweet__show {
  padding: 20px;
  border: solid 1px #fff;
}
</style>