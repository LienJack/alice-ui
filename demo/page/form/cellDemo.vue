<template>
  <div class="page">
    <alice-nav-bar title="cell 单元格" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="p15 c7">使用to调转</div>
      <alice-cell title="返回首页" is-link to="/index" />

      <div class="p15 c7">使用field</div>
      <alice-field title="文本框" v-model="value1"></alice-field>

      <div class="p15 c7">输入提示</div>
      <alice-field title="输入提示框" :placeholder="'请输入'"></alice-field>

      <div class="p15 c7">文本按右边对齐</div>
      <alice-field title="输入提示框" :placeholder="'请输入'" textAlign="right"></alice-field>

      <div class="p15 c7">禁用状态</div>
      <alice-field title="禁用状态" value="disabled" disabled></alice-field>

      <div class="p15 c7">只读</div>
      <alice-field title="只读" value="readonly" readonly></alice-field>

      <div class="p15 c7">使用图标</div>
      <alice-field title="图标" value="使用图标"iconRight="face" ></alice-field>

      <div class="p15 c7">使用textarea</div>
      <alice-field title="textarea" type="textarea" ></alice-field>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: '文字内容'
    }
  }
}
</script>

