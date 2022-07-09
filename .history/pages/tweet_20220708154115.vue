<template>
    <div class="tweet">
      <SideBar></SideBar>
      <div class="tweet__ttl">
        <h2>ホーム</h2>
        <div class="tweet__show">
          過去のtweetが入る。多分 v-if で繰り返してDBからもらったidの一致する
        </div>
      </div>
    </div>
</template>

<style>
.tweet {
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
.tweet__show {

}
</style>