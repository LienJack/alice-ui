<template>
  <div class="page">
    <alice-nav-bar title="collapse 手风琴" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="p15 c7">显示一个</div>
      <alice-collapse  :selected="list1" single>
        <alice-collapse-item title="手风琴1" name="collapse1">
          <alice-cell title="元素1" is-link />
          <alice-cell title="元素2" is-link />
          <alice-cell title="元素3" is-link/>
        </alice-collapse-item>
        <alice-collapse-item title="手风琴2" name="collapse2">
          <alice-cell title="元素1" is-link />
          <alice-cell title="元素2" is-link />
          <alice-cell title="元素3" is-link/>
        </alice-collapse-item>
      </alice-collapse>
      <div class="p15 c7">显示多个</div>
      <alice-collapse  :selected="list2" >
        <alice-collapse-item title="手风琴1" name="collapse1">
          <alice-cell title="元素1" is-link />
          <alice-cell title="元素2" is-link />
          <alice-cell title="元素3" is-link/>
        </alice-collapse-item>
        <alice-collapse-item title="手风琴2" name="collapse2">
          <alice-cell title="元素1" is-link />
          <alice-cell title="元素2" is-link />
          <alice-cell title="元素3" is-link/>
        </alice-collapse-item>
      </alice-collapse>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list1: [],
      list2: ['collapse1'],
    }
  }
}
</script>

