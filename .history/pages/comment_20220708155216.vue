<template>
  <div class="comment">
    <SideBar></SideBar>
    <div class="comment__ttl">
      <h2>コメント</h2>
      <CommentContent></CommentContent>
      過去のcommentが入る。多分 v-if で繰り返してDBからもらったtweet_idの一致するcomment.contentを繰り返し表示。
      コンポーネントで入れて出す
    </div>
  </div>
</template>

<style>
.Comment {
  display: flex;
  width: 100vw
}

.tweet__ttl {
  width: 100%;
}

h2 {
  padding: 20px;
  border: solid 1px #fff;
}
</style>