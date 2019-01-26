<template>
  <div class="page">
    <alice-nav-bar title="slider 滑条" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="p20">
        <alice-slider v-model="value" min/>
      </div>
      <div class="p15">数值{{value}}</div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 50,
    }
  }
}
</script>

