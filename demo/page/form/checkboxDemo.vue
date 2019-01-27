<template>
  <div class="page">
    <alice-nav-bar title="checkbox 多选" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="p15 c7">一个使用</div>
      <div class="p15">
        <alice-checkbox v-model="value1">选中状态 {{ value1 }}</alice-checkbox>
      </div>

      <div class="p15 c7">多个使用</div>
      <div class="p15">
        <alice-checkbox-group v-model="options1">
          <alice-checkbox label="value1">value1</alice-checkbox>
          <alice-checkbox label="value2">value2</alice-checkbox>
          <alice-checkbox label="value3">value3</alice-checkbox>
          <alice-checkbox label="value4">value4</alice-checkbox>
        </alice-checkbox-group>
        <div class="pv5">选中了{{options1}}</div>
      </div>

      <div class="p15 c7">禁用某个元素</div>
      <div class="p15">
        <alice-checkbox-group v-model="options2">
          <alice-checkbox label="value1">value1</alice-checkbox>
          <alice-checkbox label="value2" disabled>value2</alice-checkbox>
          <alice-checkbox label="value3">value3</alice-checkbox>
          <alice-checkbox label="value4">value4</alice-checkbox>
        </alice-checkbox-group>
        <div class="pv5">选中了{{options2}}</div>
      </div>

      <div class="p15 c7">设置最大选择个数</div>
      <div class="p15">
        <alice-checkbox-group v-model="options3" :max="2">
          <alice-checkbox label="value1">value1</alice-checkbox>
          <alice-checkbox label="value2">value2</alice-checkbox>
          <alice-checkbox label="value3">value3</alice-checkbox>
          <alice-checkbox label="value4">value4</alice-checkbox>
        </alice-checkbox-group>
        <div class="pv5">选中了{{options3}}</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: false,
      options1:[],
      options2:[],
      options3:[],
    }
  }
}
</script>

