<template>
  <div class="page">
    <!-- <header>
      <div class="mv15 fc f16">使用案例</div>
    </header> -->
    <alice-nav-bar title="使用案例" :fixed="false"/>
    <section>
      <div class="mt15">
        <alice-collapse single :selected="list">
          <alice-collapse-item title="基础组件" name="base">
            <alice-cell title="button 按钮" is-link @click.native="$router.push('/base/button')" />
            <alice-cell title="icon 图标" is-link @click.native="$router.push('/base/icon')" />
            <alice-cell title="navBar 导航栏" is-link @click.native="$router.push('/base/navbar')"/>
          </alice-collapse-item>
          <alice-collapse-item title="表单组件" name="form">
            <alice-cell title="cell 单元格" is-link />
            <alice-cell title="collapse 手风琴" is-link />
            <alice-cell title="checkbox 多选框" is-link />
            <alice-cell title="radio 单选框" is-link />
            <alice-cell title="switch 开关" is-link />
            <alice-cell title="slider 滑条" is-link />
          </alice-collapse-item>
          <alice-collapse-item title="展示组件" name="show">
            <alice-cell title="popup 弹出" is-link />
            <alice-cell title="dialog 提示框" is-link />
            <alice-cell title="spinner 多选框" is-link />
            <alice-cell title="loading 读取" is-link />
            <alice-cell title="tabs 开关" is-link />
          </alice-collapse-item>
        </alice-collapse>
        
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    }
  }
}
</script>

