<template>
  <div class="mx-10">
    <div>Front -- count: {{ countStore.counter }}</div>
    <button @click="countStore.increment()">點我+1</button>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <button class="bg-green-300 text-white rounded px-2 py-1">+1</button>
    <el-button>222</el-button>
    <Icon icon="mdi-light:home" height="24" width="24" />
    <Icon icon="ic:baseline-wechat" height="34" width="34" />
  </div>
</template>

<script lang="ts" setup="setup">
import useCountStore from "../store/modules/useCountStore";
import { Icon } from "@iconify/vue";

const countStore = useCountStore();

console.log(import.meta.env.VITE_APP_TITLE);
</script>

<style lang="less" scoped></style>
