<template>
  <div class="page">
    <alice-nav-bar title="switch 开关" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="p15 c7">开关</div>
      <div class="p15">
        <alice-switch v-model="value">开关</alice-switch>
        <div class="pv10">状态 {{value}}</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
</script>
