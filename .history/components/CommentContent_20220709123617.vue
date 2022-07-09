<template>
  <div>
    <div v-for="(data,index) in tweets" :key="index" class="comment__show">
      <div class="comment__show__inner">
        <p class="user__name">{{data.user_name}}</p>
        <p class="comment__content">{{data.content}}</p>
      </div>
    </div>
    <div class="comment__submit">
      <validation-observer ref="obs" v-slot="ObserverProps">
        <validation-provider v-slot="{ errors }" rules="required|max:120">
          <textarea v-model="comment_content" id="comment_content" type="text" name="コメント"></textarea>
          <div class="error">{{ errors[0] }}</div>
        </validation-provider>
        <button type="button" :disabled="ObserverProps.invalid || !ObserverProps.validated"
          class="comment__submit__btn">送信</button>
      </validation-observer>
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
.comment__content {
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  margin-top: 5px;
}
.comment__submit {
  padding: 20px;
  border: solid 1px #fff;
}
#comment_content {
  margin-top: 10px;
  width: 100%;
  height: 25px;
  border: solid 1px #fff;
  background-color: #1f1043;
  border-radius: 10px;
  color: #fff;
}
.comment__submit__btn {
  margin: 0 ;
  width: 100px;
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #5a419d;
  color: #fff;
  border: 3px outset #401092;
  cursor: pointer;
}
</style>