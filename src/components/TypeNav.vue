<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hiddenCategory" @mouseenter="showCategory">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="categoryShow">
            <div class="all-sort-list2" @click="goSearch">
              <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" @mouseenter="changeIndex(index)" :class="index == i ? 'MoveColor' : ''">
                <h3>
                  <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash'
import { mapState } from 'vuex'
export default {
  name: 'TypeNav',
  data() {
    return {
      i: -1
    }
  },
  props: {
    categoryShow: {
      Type: Boolean,
      default: true
    }
  },
  methods: {
    changeIndex: throttle(function (index) {
      this.i = index
    }, 50),
    goSearch(e) {
      if (e.target.dataset.categoryname) {
        const query = { categoryName: e.target.dataset.categoryname }
        if (e.target.dataset.category1id) {
          query.category1Id = e.target.dataset.category1id
        } else if (e.target.dataset.category2id) {
          query.category2Id = e.target.dataset.category2id
        } else {
          query.category3Id = e.target.dataset.category3id
        }
        if (this.$route.params) {
          const params = this.$route.params
          this.$router.push({ name: 'search', params, query })
        } else {
          this.$router.push({ name: 'search', query })
        }
      }
    },
    showCategory() {
      this.$emit('show', true)
    },
    hiddenCategory() {
      this.i = -1
      this.$emit('hidden', false)
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList
    })
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 28px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              text-decoration: none;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;
            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
    .sort-enter {
      height: 0;
      opacity: 0;
    }
    .sort-enter-to {
      height: 461px;
      opacity: 1;
      overflow: hidden;
    }
    .sort-enter-active {
      transition: all 0.4s linear;
    }
  }
}
.MoveColor {
  background-color: skyblue;
}
</style>
