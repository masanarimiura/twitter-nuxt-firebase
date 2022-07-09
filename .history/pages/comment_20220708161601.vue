<template>
  <div class="comment">
    <SideBar></SideBar>
    <div class="comment__ttl">
      <h2>コメント</h2>
      <TweetContent></TweetContent>
      <CommentContent></CommentContent>
      <div class="comment__inner">
        <p>コメント</p>
      </div>
    </div>
  </div>
</template>

<style>
.comment {
  display: flex;
  width: 100vw
}
.comment__ttl {
  width: 100%;
}
h2 {
  padding: 20px;
  border: solid 1px #fff;
}
p {
  display: block;
  text-align: center;
  padding: 10px;
  border: solid 1px #fff;
}
</style>