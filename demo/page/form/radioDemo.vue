<template>
  <div class="page">
    <alice-nav-bar title="radio 单选" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="p15 c7">
        单选
      </div>
     <div class="p15">
        <alice-radio-group v-model="options">
          <alice-radio label="value1">value1</alice-radio>
          <alice-radio label="value2">value2</alice-radio>
          <alice-radio label="value3">value3</alice-radio>
          <alice-radio label="value4">value4</alice-radio>
        </alice-radio-group>
        <div class="p10">选中了{{options}}</div>
     </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: []
    }
  }
}
</script>

