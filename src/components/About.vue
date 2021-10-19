<template>
  <div class="about">
    <router-link to="/about/aboutyou">关于你</router-link>&nbsp;&nbsp;
    <router-link to="/about/aboutme">关于我</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style>
#about {
  width: 200px;
  height: 500px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>