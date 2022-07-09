<template>
  <div>
    <div v-for="(data,index) in tweets" :key="index" class="tweet__show">
      <div class="tweet__show__inner">
        <p class="username">{{data.user_id}}</p>
        <div class="like__btn"></div>
        div.delete
      </div>
      <p class="tweet__content">{{data.content}}</p>
      
      
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