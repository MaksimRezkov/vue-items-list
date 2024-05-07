<template>
  <div class="sublist" ref="sublist">
    <div
      class="items__wrapp"
      @mousedown.stop="onMouseDown"
      @mouseup.stop="onMouseUp"
      @mousemove.stop="onMouseMove"
    >
      <div class="sublist-item noselect" v-for="subitem in 20" :key="subitem">
        {{ getsubItemNumber() }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useScrollDrag } from '@/hooks';

  const getsubItemNumber = () => {
    return Math.floor(Math.random() * 100);
  }
  const sublist = ref<null | HTMLElement>(null);
  const { onMouseDown, onMouseMove, onMouseUp } = useScrollDrag(sublist);
</script>

<style lang="scss" scoped>
  .sublist {
    max-width: 80%;
    box-shadow: 0px 0px 7px 0px #000 inset;
    overflow-x: scroll;
    cursor: grab;

    &-item {
      padding: 10px;
      border-radius: 3px;
      border: 1px solid teal;
      font-size: 24px;
      font-weight: 600;
      transition: transform 0.2s linear;
    }
  }

  .items__wrapp {
    display: flex;
    gap: 10px;
    padding: 15px;
    width: fit-content;
    max-width: none;
  }

  @media (hover: hover) {
    .sublist-item:hover {
      transform: scale(0.8);
    }
  }

  @media (hover: none) {
    .sublist-item:active {
      transform: scale(0.8);
    }
  }
</style>
