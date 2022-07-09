<template>
  <div>
    <div v-for="(data,index) in tweets" :key="index" class="tweet__show">
      <div class="tweet__show__inner">
        <p class="user__name">{{data.user_name}}</p>
        <div class="like__btn"><img src="../img/heart.png" class="like__img"><span class="likes">{{data.likes}}</span></div>
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
  },
methods: {
    async getTweet() {
    const resData = await this.$axios.get(
      "http://127.0.0.1:8000/api/contact/"
    );
    this.contactLists = resData.data.data;
  },
    async insertContact() {
    const sendData = {
      name: this.newName,
      email: this.newEmail,
    };
    await this.$axios.post("http://127.0.0.1:8000/api/contact/", sendData);
    this.getContact();
  },
    async updateContact(id, name, email) {
    const sendData = {
      name: name,
      email: email,
    };
    await this.$axios.put(
      "http://127.0.0.1:8000/api/contact/" + id,
      sendData
    );
    this.getContact();
  },
    async deleteContact(id) {
    await this.$axios.delete("http://127.0.0.1:8000/api/contact/" + id);
    this.getContact();
  },
},
created() {
  this.getContact();
},
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
.user__name, .tweet__content {
  color: #fff;
}
.tweet__content {
  font-size: 14px;
  font-weight: normal;
}
.like__btn, .delete__btn, .comment__btn {
  margin: 0 10px;
}
.like__img, .delete__img, .comment__img {
  width: 20px;
  height: auto;
}
.likes {
  color: #fff;
  padding-left: 5px;
}
</style>