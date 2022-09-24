<template>
  <!--列表-->
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!--banner轮播-->
        <div class="swiper-container" id="mySwiper" @mouseenter="stopSwiper" @mouseleave="startSwiper">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item, i) in bannerList" :key="item.id" :class="{ fade: index == i }">
              <img :src="item.imgUrl" />
            </li>
          </ul>
          <!-- 上一张 -->
          <span href="javascript:;" class="swiper-btn prev" @click="changeIndex(-1)"><i class="iconfont icon-angle-left"></i></span>
          <!-- 下一张 -->
          <span href="javascript:;" class="swiper-btn next" @click="changeIndex(1)"><i class="iconfont icon-angle-right"></i></span>
          <!-- 指示圆点 -->
          <div class="swiper-indicator">
            <span v-for="(item, i) in bannerList" :key="i" @click="index = i" :class="{ active: index == i }"></span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">尚品汇快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">话费</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">机票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">电影票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">游戏</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">酒店</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">火车票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">众筹</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">理财</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">礼品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'List-Container',
  data() {
    return {
      index: 0,
      timer: null
    }
  },
  methods: {
    changeIndex(val) {
      const i = this.index + val
      if (i > 3) {
        this.index = 0
        return
      }
      if (i < 0) {
        this.index = 3
        return
      }
      this.index = i
    },
    autoPlayFn() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (this.index == 3) {
          this.index = 0
        } else {
          this.index++
        }
      }, 2000)
    },
    stopSwiper() {
      clearInterval(this.timer)
    },
    startSwiper() {
      this.autoPlayFn()
    }
  },
  mounted() {
    this.$store.dispatch('home/getBannerList')
  },
  watch: {
    bannerList: {
      handler(newVal) {
        if (newVal.length) {
          this.autoPlayFn()
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      bannerList: (state) => state.home.bannerList
    })
  }
}
</script>

<style lang="less" scoped>
.list-container {
  width: 1200px;
  margin: 0 auto;

  .sortList {
    height: 464px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 740px;
      height: 100%;
      padding: 5px;
      float: left;
    }

    .right {
      float: left;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .fl {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
          }
        }
      }

      .lifeservices {
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        .life-item {
          border-left: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          margin-right: -1px;
          height: 64px;
          text-align: center;
          position: relative;
          cursor: pointer;
          width: 25%;

          .list-item {
            background-image: url(./images/icons.png);
            width: 61px;
            height: 40px;
            display: block;
          }

          .service-intro {
            line-height: 22px;
            width: 60px;
            display: block;
          }

          &:nth-child(1) {
            .list-item {
              background-position: 0px -5px;
            }
          }

          &:nth-child(2) {
            .list-item {
              background-position: -62px -5px;
            }
          }

          &:nth-child(3) {
            .list-item {
              background-position: -126px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -190px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: 0px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -62px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -126px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -190px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: 0px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -62px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -126px -146px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -190px -146px;
            }
          }
        }
      }

      .ads {
        margin-top: 5px;

        img {
          opacity: 0.8;
          transition: all 400ms;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
.swiper {
  &-container {
    position: relative;
    height: 100%;
    &:hover {
      .swiper-btn {
        opacity: 1;
      }
    }
  }
  &-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  &-slide {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 0.5s linear;
    &.fade {
      opacity: 1;
      z-index: 1;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-btn {
    width: 44px;
    height: 44px;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 210px;
    z-index: 2;
    text-align: center;
    line-height: 44px;
    opacity: 0;
    transition: all 0.5s;
    &.prev {
      left: 20px;
    }
    &.next {
      right: 20px;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.4);
    }
  }
  &-indicator {
    position: absolute;
    left: 0;
    bottom: 20px;
    z-index: 2;
    width: 100%;
    text-align: center;
    span {
      display: inline-block;
      width: 12px;
      height: 12px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      cursor: pointer;
      ~ span {
        margin-left: 12px;
      }
      &.active {
        background: #fff;
      }
    }
  }
}
</style>
