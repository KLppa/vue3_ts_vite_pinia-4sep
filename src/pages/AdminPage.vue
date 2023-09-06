<template>
  <div class="common-layout">
    <el-container class="wrapper">
      <transition name="el-fade-in">
        <el-aside :width="asideWidth" class="left-aside">
          <!-- logo -->
          <div class="asidelogo">
            <div class="text">{{ isCollapse ? "無" : "後台模板" }}</div>
          </div>

          <!-- menus -->
          <div class="asidemenus">
            <el-menu default-active="2" :collapse="isCollapse" @select="HandlemenuChange">
              <el-menu-item index="1">
                <el-icon><Setting /></el-icon>
                <span>控制面板</span>
              </el-menu-item>

              <el-sub-menu index="2">
                <template #title>
                  <el-icon><UserFilled /></el-icon>
                  <span>用戶管理</span>
                </template>
                <el-menu-item index="2-1">用戶列表</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </div>
        </el-aside>
      </transition>

      <!-- 導航 header -->
      <el-container class="right-wrapper">
        <el-header class="right-header">
          <div class="headerleft">
            <div v-if="asideWidth === '200px'" @click="handleAsideChange">
              <!-- eslint-disable-next-line prettier/prettier -->
              <Icon icon="ant-design:menu-fold-outlined" class="cursor-pointer" width="26" />
            </div>

            <div v-else @click="handleAsideChange">
              <Icon
                width="26"
                icon="ant-design:menu-fold-outlined"
                color="#125488"
                :rotate="2"
                class="cursor-pointer"
              />
            </div>
          </div>

          <div class="headerright">
            <div class="avatar cursor-pointer">
              <el-dropdown>
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Update Profile</el-dropdown-item>
                    <el-dropdown-item>Log out</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main class="right-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup="setup">
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";
import { UserFilled, Setting } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();
const asideWidth = ref("200px");

// 菜單是否折疊起來
const isCollapse = ref(false);

const handleAsideChange = () => {
  asideWidth.value = asideWidth.value === "200px" ? "60px" : "200px";
  isCollapse.value = !isCollapse.value;
};

const HandlemenuChange = (index: string) => {
  switch (index) {
    case "1":
      router.push({ name: "Dashboard" });
      break;
    case "2-1":
      router.push({ name: "Userlist" });

      break;
    default:
      console.log("morenzhi");
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  @apply h-full w-full;

  .left-aside {
    @apply h-full bg-gray-100 flex flex-col;
    .asidelogo {
      flex: 1;
      @apply text-center h-10  select-none;
      .text {
        @apply text-center text-base font-bold py-2 px-4 bg-gray-700 text-white rounded;
      }
    }

    .asidemenus {
      height: calc(100% - 2.5rem);
      overflow-y: auto;
      overflow-x: hidden;
      // @apply;
    }
  }
}

.right-wrapper {
  .right-header {
    @apply bg-blue-700 flex justify-between items-center;
  }

  .right-main {
    @apply bg-indigo-200 flex-1;
  }
}
</style>
