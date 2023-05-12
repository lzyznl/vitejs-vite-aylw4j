<template>
  <van-nav-bar title="标题" left-text="返回" left-arrow>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <div id="content">
    <router-view />
  </div>

  <van-tabbar route>
    <van-tabbar-item to="/index" icon="home-o" name="index"
      >用户</van-tabbar-item
    >
    <van-tabbar-item to="/friend" icon="friends-o" name="index"
      >好友</van-tabbar-item
    >
    <van-tabbar-item to="/hall" icon="chat-o" name="index"
      >聊天厅</van-tabbar-item
    >
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="manager-o" name="user"
      >个人</van-tabbar-item
    >
  </van-tabbar>
</template>

<script setup></script>

<style scoped></style>
