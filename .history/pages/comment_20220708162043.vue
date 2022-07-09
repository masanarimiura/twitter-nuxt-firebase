<template>
  <div class="comment">
    <SideBar></SideBar>
    <div class="comment__inner">
      <div class="comment__ttl">
        <h2>コメント</h2>
      </div>
      <TweetContent></TweetContent>
      <h3>コメント</h3>
      <CommentContent></CommentContent>
    </div>
  </div>
</template>

<style>
.comment {
  display: flex;
  width: 100vw
}
.comment__inner {
  width: 100%;
}
h2 {
  padding: 20px;
  border: solid 1px #fff;
}
h3 {
  display: block;
  text-align: center;
  padding: 10px;
  border: solid 1px #fff;
  font-weight: normal;
}
</style>