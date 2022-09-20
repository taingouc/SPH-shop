<template>
  <div>
    <!-- 头部组件 -->
    <my-header></my-header>
    <!-- 内容区域 -->
    <router-view></router-view>
    <!-- 底部组价 -->
    <my-footer v-if="$route.meta.show"></my-footer>
  </div>
</template>

<script>
import Header from './Header/index.vue'
import Footer from './Footer/index.vue'
export default {
  name: 'Home',
  components: {
    'my-header': Header,
    'my-footer': Footer
  }
}
</script>

<style lang="less" scoped></style>
