<template>
  <div class="loanBanner">
    <p><span class="tit">{{tit}}</span>{{des}}</p>
    <slot name='banner'></slot>
    <span class="back" @click="$router.back(-1)"></span>
  </div>
</template>
<script>
  export default {
    props: ['tit', 'des']
  }
</script>
