<template>
  <biv class="scroll__btn">
    <div class="scroll__btn-sticks"></div>
  </biv>
</template>

<script setup></script>

<style lang="scss">
  @mixin pseudoEl {
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
    top: 0;
    left: 0;
    background-color: #727272;
  }

  .scroll__btn {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: start;
    justify-content: center;

    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;

    cursor: pointer;
    box-shadow: 0px 0px 3px 0px #000;
    background-color: #282828;
    border-radius: 50%;
    border: 1px solid #727272;

    &-sticks {
      position: relative;
      transform: translate(0, 20px);
      &::after {
        @include pseudoEl;
        transform: translate(-80%) rotate(-45deg);
      }
      &::before {
        @include pseudoEl;
        transform: translate(-20%) rotate(45deg);
      }
    }
  }
</style>
