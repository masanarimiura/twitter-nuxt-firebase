<template>
  <div>
    <div v-for="(data,index) in tweets" :key="index" class="tweet__show">
      <div class="tweet__show__inner">
        <p class="username">{{data.user_name}}</p>
        <div class="like__btn"><img src="../img/heart.png" class="like__img"><p>{{data.likes}}</p>
        </div>
        <div class="delete__btn"><img src="../img/cross.png" class="delete__img"></div>
        <div class="comment__btn"><img src="../img/detail.png" class="comment__img"></div>
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
          user_name: 1,
          content: 'つぶやき1',
          likes: 1,
        },
        {
          user_name: 2,
          content: 'つぶやき2',
          likes: 0,
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
.tweet__show__inner {
  display: flex;
}
.like__btn, .delete__btn, .comment__btn {
  margin: 0 10px;
}
.like__img, .delete__img, .comment__img {
  width: 20px;
  height: auto;
}
</style>