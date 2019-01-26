<template>
  <div class="page">
    <alice-nav-bar title="popup" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="mt20 pv5 ph15 row-around">
        <alice-button @click="popup1=!popup1">中间弹出</alice-button>
        <alice-button @click="popup2=!popup2">左边弹出</alice-button>
        <alice-button @click="popup3=!popup3">右边弹出</alice-button>
      </div>
      <div class="pv5 ph15 row-around">
        <alice-button @click="popup4=!popup4">上边弹出</alice-button>
        <alice-button @click="popup5=!popup5">下边弹出</alice-button>
        <alice-button>开发中。</alice-button>
      </div>
      <alice-popup v-model="popup1">
        <div class="p20">中间弹出</div>
      </alice-popup>
      <alice-popup v-model="popup2"  transiton="left">
        <div class="p20">左边弹出</div>
      </alice-popup>
      <alice-popup v-model="popup3"  transiton="right">
        <div class="p20">右边弹出</div>
      </alice-popup>
      <alice-popup v-model="popup4"  transiton="top">
        <div class="p20">上边弹出</div>
      </alice-popup>
      <alice-popup v-model="popup5"  transiton="bottom">
        <div class="p20">下边弹出</div>
      </alice-popup>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popup1: false,
      popup2: false,
      popup3: false,
      popup4: false,
      popup5: false,
    }
  }
}
</script>
