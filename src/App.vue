<template>
  <div>
    <!-- 内容区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('home/CategoryListAsync')
  }
}
</script>

<style lang="less" scoped></style>
