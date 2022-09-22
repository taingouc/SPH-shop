<template>
  <TypeNav :categoryShow="show" @show="changeShow" @hidden="changeShow"></TypeNav>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      show: false
    }
  },
  methods: {
    changeShow(boolean) {
      this.show = boolean
    }
  }
}
</script>
<style lang="less" scoped></style>
