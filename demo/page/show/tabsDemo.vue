<template>
  <div class="page">
    <alice-nav-bar title="tabs 标签页" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div style="background:white">
        <alice-tabs :selected="selected">
          <alice-tabs-head>
            <alice-tabs-item name="1">Tabs 1</alice-tabs-item>
            <alice-tabs-item name="2">Tabs 2</alice-tabs-item>
          </alice-tabs-head>
          <alice-tabs-body>
            <alice-tabs-pane name="1">content 1</alice-tabs-pane>
            <alice-tabs-pane name="2">content 2</alice-tabs-pane>
          </alice-tabs-body>
        </alice-tabs>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: '1'
    }
  }
}
</script>
