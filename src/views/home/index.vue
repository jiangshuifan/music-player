<template>
  <a-layout>
    <a-layout-header class="wy-home-h">
      <div class="full-height d-flex f-d-c">
        <a-layout class="bc-transparent" style="height:64px">
          <a-layout-sider class="bc-transparent full-height"><span>网易云音乐</span></a-layout-sider>
          <a-layout-content>
            <a-menu class="bc-transparent full-height nav-main-menu" @click="handleGetRelatedChildren"
              v-model:selectedKeys="defaultKey" mode="horizontal">
              <a-menu-item v-for="item in menuList" :style="{
                display: 'flex',
                'align-items': 'center',
                'justify-items': 'center',
              }" :key="item.key">
                {{ item.text }}
              </a-menu-item>
            </a-menu>
          </a-layout-content>
        </a-layout>
        <div style="height: auto;background-color:#C20C0C ;">
          <a-menu class="bc-transparent full-height  nav-attach-menu" v-model:selectedKeys="attachDefaultKey"
            mode="horizontal">
            <a-menu-item v-for="item in showChildrenList" :style="{
              display: 'flex',
              'align-items': 'center',
              'justify-items': 'center',
            }" :key="item.key">
              {{ item.text }}
            </a-menu-item>
          </a-menu>
        </div>
      </div>
    </a-layout-header>
    <a-layout-content>
      <div>
        <a-carousel>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </a-carousel>
        <div style="display: flex;width: 1000px;margin: 6px auto;">
          <div class="card-container" style="width:720px;margin-right: 10px;">
            <a-card title="热门推荐" :bordered="false" style="width: 100%">
              <template #extra><a href="#">更多</a></template>
              <a-row v-for="ind in 2" :key="ind" class="section-hot-row" :gutter="[16, 16]">
                <a-col :span="6">
                  <div class="section-hot-item"></div>
                </a-col>
                <a-col :span="6">
                  <div class="section-hot-item"></div>
                </a-col>
                <a-col :span="6">
                  <div class="section-hot-item"></div>
                </a-col>
                <a-col :span="6">
                  <div class="section-hot-item"></div>
                </a-col>
              </a-row>
            </a-card>
            <a-card title="新碟上架" :bordered="false" style="width: 100%">
              <template #extra><a href="#">更多</a></template>
              <a-carousel>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </a-carousel>
            </a-card>
            <a-card title="榜单" :bordered="false" style="width: 100%">
              <template #extra><a href="#">更多</a></template>
              <a-row class="section-rank-row" :gutter="[16, 8]">
                <a-col :span="8">
                  <div class="section-rank-item"></div>
                </a-col>
                <a-col :span="8">
                  <div class="section-rank-item"></div>
                </a-col>
                <a-col :span="8">
                  <div class="section-rank-item"></div>
                </a-col>
              </a-row>
            </a-card>
          </div>
          <div class="card-container" style="margin-left:auto ;">
            <a-card title="入住歌手" :bordered="false" style="width: 300px">
              <div class="section-singer-item" v-for="ind in 5" :key="ind"></div>
            </a-card>
            <a-card title="热门主播" :bordered="false" style="width: 300px">
              <div class="section-singer-item" v-for="ind in 5" :key="ind"></div>
            </a-card>
          </div>
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer>
      <a-menu class="bc-transparent full-height home-footer" v-model:selectedKeys="defaultFooterKey" mode="horizontal">
        <a-menu-item v-for="item in footerList" :style="{
          display: 'flex',
          'align-items': 'center',
          'justify-items': 'center',
        }" :key="item.key">
          {{ item.text }}
        </a-menu-item>
      </a-menu>
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onMounted } from 'vue';
import { initData } from "./type"
export default defineComponent({
  name: 'HomeView',

  setup() {
    const data = reactive(new initData())
    function handleGetRelatedChildren(item: any) {
      let menulist = data.menuList.filter((v, i) => {
        return v.key === item.key
      })[0].children
      data.showChildrenList = menulist
    }
    onMounted(() => {
    })
    return {
      ...toRefs(data),
      handleGetRelatedChildren
    };
  }
});
</script>
<style lang="scss" scoped>
:deep(.ant-layout),
:deep(.ant-menu),
:deep(.ant-layout-sider) {
  background-color: transparent;
  color: inherit;
}



.wy-home-h {
  background-color: #242424;
  color: #ffffff;
  height: auto;
  line-height: inherit;
  padding: 0;
}


.nav-main-menu {
  border-bottom: none;

  :deep(.ant-menu-item-selected),
  :deep(.ant-menu-item-active:hover) {
    background-color: #000000;
    color: #ffffff !important;
  }
}

.nav-attach-menu {
  margin: auto 200px;
  background-color: transparent;
  border-bottom: none;

  :deep(.ant-menu-item) {
    margin: 4px;
    border-radius: 10px;

    &::after {
      display: none;
    }
  }

  :deep(.ant-menu-item-selected),
  :deep(.ant-menu-item-active:hover) {
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff !important;
  }

}

:deep(.ant-layout-sider-children) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 280px;
  background: #364d79;
  overflow: hidden;
}

.card-container {

  :deep(.ant-card) {
    &+.ant-card {
      margin-top: 10px;
    }
  }
}

.section-hot-row {
  height: 200px;
  margin: 4px 0;

  .section-hot-item {
    background-color: #364d79;
    height: 100%;
    width: 100%;
  }
}

.section-singer-item {
  width: 100%;
  height: 80px;
  background-color: #364d79;

  &+& {
    margin-top: 4px;
  }
}

.section-rank-row {
  height: 400px;
  margin: 4px 0;

  .section-rank-item {
    background-color: #364d79;
    height: 100%;
    width: 100%;
  }
}

.home-footer {
  :deep(.ant-menu-item) {
    &::after {
      display: none;
    }
  }

  :deep(.ant-menu-item-selected),
  :deep(.ant-menu-item-active:hover) {
    background-color: transparent;
    color: inherit;
  }
}
</style>
