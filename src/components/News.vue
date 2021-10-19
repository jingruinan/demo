<template>
  <div class="news">
    <h2>新闻详情</h2>
    <p>显示编号为{{$route.params.nid}}新闻详情</p>
    <!--{{$route:当前路由差值表达式}}-->
  </div>
</template>

<script>
export default {
  name: "News"
};
</script>

<style>
.news {
  width: 100%;
  height: 100%;
  background-color: cyan;
}
</style>