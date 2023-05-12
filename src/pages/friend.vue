<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入好友关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
  <div class="list-box" v-for="user in userList">
    <div class="ava-box" @click="handleUserInfo()">
      <img :src="user.avatarUrl" alt="userAva" />
      <p>{{ user.username }}</p>
    </div>
    <div class="icon" @click="handleChat()">
      <van-icon name="chat-o"></van-icon>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';

const userList = ref([
  {
    avatarUrl:
      'https://project-findfriend-1310836527.cos.ap-shanghai.myqcloud.com/userAvatar/lzyyyy-hh.jpg',
    username: 'lzyyyy',
  },
  {
    avatarUrl:
      'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png',
    username: 'zxqqq',
  },
]);

const value = ref('');
const onSearch = (val) => Toast(val);
const onCancel = () => Toast('取消');
</script>

<style scoped>
.list-box {
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid rgb(218, 218, 218);
  padding: 7px 20px;
  display: flex;
  justify-content: space-between;
}
.ava-box {
  height: 100%;
  display: flex;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.ava-box p {
  box-sizing: border-box;
  margin: 0;
  line-height: 40px;
  height: 100%;
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
}
.ava-box img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
</style>
