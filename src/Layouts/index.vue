<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
  <van-card
    v-for="user in userList"
    :desc="user.userProfile"
    :title="user.userName"
    :thumb="user.userAvatar"
  >
    <template #tags>
      <van-tag
        plain
        type="primary"
        v-for="tag in user.tags"
        style="margin-right: 5px; margin-top: 10px"
        >{{ tag }}</van-tag
      >
    </template>
    <template #footer>
      <van-button size="mini" type="primary">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup>
import { ref } from 'vue';
import { showFailToast, showToast } from 'vant';
import 'vant/es/toast/style';

const value = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => showFailToast('搜索取消');

const userList = ref([
  {
    userName: 'lzyyy',
    userProfile: '杭师大学生,哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈',
    userAvatar:
      'https://project-findfriend-1310836527.cos.ap-shanghai.myqcloud.com/userAvatar/lzyyyy-hh.jpg',
    tags: ['摆烂', '追剧', '看电影'],
  },
  {
    userName: 'zxqqq',
    userProfile: '杭师大学生',
    userAvatar:
      'https://project-findfriend-1310836527.cos.ap-shanghai.myqcloud.com/userAvatar/lzyyyy-hh.jpg',
    tags: ['java', 'c++', '爱美女'],
  },
]);
</script>

<style scoped>
:deep(.van-card__desc) {
  max-height: fit-content;
  overflow: visible;
  white-space: normal;
}
</style>
