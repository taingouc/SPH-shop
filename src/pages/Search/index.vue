<template>
  <div>
    <h1>搜索页</h1>
    params--- {{ keyword }}
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['keyword']
}
</script>
<style lang="less" scoped></style>
