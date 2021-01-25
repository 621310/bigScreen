<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view class="app-page"/>
    </transition>
  </div>
</template>

<style lang="less">
  @import "./styles/common.less";
#app{
  width: 100%;
  height: 100%;
  background: rgb(247,248,250);
}

/*页面淡入淡出*/
.router-fade-enter, .router-fade-enter-active {
  transition: opacity 1s;
}

.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}


</style>
