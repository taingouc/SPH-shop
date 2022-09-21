<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayCommend></TodayCommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './components/List-Container/index.vue'
import TodayCommend from './components/ReCommend/index.vue'
import Rank from './components/Rank/index.vue'
import Like from './components/Like/index.vue'
import Floor from './components/Floor/index.vue'
import Brand from './components/Brand/index.vue'
export default {
  name: 'Main',
  components: {
    ListContainer,
    TodayCommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style lang="less" scoped></style>
