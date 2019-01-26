<template>
  <div class="page">
    <!-- <header>
      <div class="mv15 fc f16">使用案例</div>
    </header> -->
    <alice-nav-bar title="使用案例" :fixed="false"/>
    <section>
      <div class="mt15">
        <div class="p15 c7 f16">请在模拟手机模式打开</div>
        <alice-collapse single :selected="list">
          <alice-collapse-item title="基础组件" name="base">
            <alice-cell title="button 按钮" is-link to="/base/button" />
            <alice-cell title="icon 图标"  is-link to='/base/icon'/>
            <alice-cell title="navBar 导航栏"  is-link to='/base/navbar'/>
          </alice-collapse-item>
          <alice-collapse-item title="表单组件" name="form">
            <alice-cell title="cell 单元格" is-link to='/form/cell'/>
            <alice-cell title="collapse 手风琴" is-link to='/form/collapse'/>
            <alice-cell title="checkbox 多选框" is-link to='/form/checkbox'/>
            <alice-cell title="radio 单选框" is-link to='/form/radio'/>
            <alice-cell title="switch 开关" is-link to='/form/switch'/>
            <alice-cell title="slider 滑条" is-link to='/form/slider'/>
          </alice-collapse-item>
          <alice-collapse-item title="展示组件" name="show">
            <alice-cell title="popup 弹出" is-link to='/show/popup'/>
            <alice-cell title="dialog 提示框" is-link to='/show/dialog'/>
            <!-- <alice-cell title="loading 读取" is-link to='/show/loading'/> -->
            <alice-cell title="tabs 标签页" is-link to='/show/tabs'/>
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

