<script setup>
import router from "./router/index.js";
import { ref } from "vue";
const toHome = () => {
  router.push("/home");
};
const toAbout = () => {
  router.push("/about");
};
let nid = ref("12345");
const toNews = () => {
  router.push("/news/" + nid.value);
}; //响应式
const toEvent = () => {
  router.push({
    path: "/event",
    query: { title: "阿富汗新闻", content: "塔利班重新掌握政权" }
  });
};
</script>

<template>
  <div>
    <div class="nav">
      <router-link to="/home" activeClass="current">首页页面</router-link>&nbsp;&nbsp;
      <router-link to="/about" activeClass="current">关于我们</router-link>&nbsp;&nbsp;
      <!--
        <router-link :to="'/news/' +nid" activeClass="current">新闻</router-link>&nbsp;&nbsp;
      <router-link :to="{path:'event',query:{title:'阿富汗新闻',content:'塔利班重新掌握政权'}}">今日要闻</router-link>
      -->
      <button @click="toNews()">新闻页面</button>&nbsp;&nbsp;
      <button @click="toEvent()">今日要闻</button>
      <!--
      <button @click="toHome()">首页</button>&nbsp;&nbsp;
      <button @click="toAbout()">关于</button>
      -->
    </div>
    <div class="maincontent">
      <!--展示符合路由规则结果页面-->
      <router-view></router-view>
    </div>
    <div class="footer">这是底部版权信息</div>
  </div>
</template>
<style>
div {
  text-align: center;
}
.nav {
  background-color: violet;
}
.maincontent {
  background-color: turquoise;
}
.footer {
  background-color: bisque;
}
.current:hover {
  font-size: 18px;
  color: chartreuse;
  font-weight: bolder;
}
</style>
