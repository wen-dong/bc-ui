<template>
  <div class="about">
    <h1>This is an about page</h1>
     <!-- <svg class="icon">
      <use xlink:href="#icon-search" />
    </svg> -->
    <bc-icon name='search' :size="20" color="#dd4c19"></bc-icon>
  </div>
</template>
<script>
import '../components/style/font/iconfont.js'
import icon from '@/components/icon/main/icon.vue'
export default {
  name: 'about',
  components: {
    icon,
  },
}
</script>
<style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>