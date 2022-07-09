<template>
  <div>
    <div v-for="(data,index) in tweets" :key="index" class="tweet__show">
      <div class="tweet__show__inner">
        <p class="user__name">{{data.user_name}}</p>
        <div class="like__btn"><img src="../img/heart.png" class="like__img"><span class="likes">{{data.likes}}</span>
        </div>
        <div class="delete__btn"><img src="../img/cross.png" class="delete__img"></div>
        <div class="comment__btn"><img src="../img/detail.png" class="comment__img"></div>
      </div>
      <p class="tweet__content">{{data.content}}</p>
    </div>
    <div class="comment__submit">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweets: [
        {
          user_name: 'マミー',
          content: 'つぶやき1',
          likes: 1,
        },
        {
          user_name: 'パピー',
          content: 'つぶやき2',
          likes: 0,
        },
      ]
    };
  }
};
</script>

<style>
.comment__show {
  padding: 20px;
  border: solid 1px #fff;
}
.comment__submit {
  padding: 20px;
  border: solid 1px #fff;
}

</style>