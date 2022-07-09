<template>
  <div>
    <div v-for="(data,index) in tweets" :key="index" class="comment__show">
      <div class="comment__show__inner">
        <p class="user__name">{{data.user_name}}</p>
        <p class="comment__content">{{data.content}}</p>
      </div>
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
          user_name: 'コメントした人１',
          content: 'コメント1',
          likes: 1,
        },
        {
          user_name: 'コメントした人２',
          content: 'コメント2',
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