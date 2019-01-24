<template>
  <div class="alice-select-item" :class="{active, c: active }">
    {{name}}
     <alice-icon
        name="done"
        cName="alice-icon"
        v-if="active"
      />
  </div>
</template>

<script>
import aliceIcon from '../icon'
export default {
  props: {
    name: String,
    active: Boolean,
  }
}
</script>
<style lang="scss">
@import './item.scss';
</style>
