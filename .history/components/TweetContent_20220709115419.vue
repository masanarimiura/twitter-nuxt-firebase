<template>
  <div>
    <div v-for="(data,index) in tweets" :key="index" class="tweet__show">
      <div class="tweet__show__inner">
        <p class="username">{{data.user_id}}</p>
        <div class="like__btn"><img src="../img/heart.png" class="like__img">
        </div>
        <div class="delete__btn"><img src="../img/cross.png" class="delete__img"></div>
        <div class="comment__btn"><img src=".." class="comment__img"></div>
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