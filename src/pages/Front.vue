<template>
  <div>Front -- count: {{ countStore.counter }}</div>
  <button @click="countStore.increment()">點我+1</button>
</template>

<script lang="ts" setup="setup">
import useCountStore from "../store/modules/useCountStore";

const countStore = useCountStore();
</script>

<style lang="less" scoped></style>
