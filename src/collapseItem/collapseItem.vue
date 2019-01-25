<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :data-name="name">
      {{title}}
    </div>
    <div class="content" ref="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "collapseItem",
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        open: false,
      }
    },
    inject: ['eventBus'],
    mounted () {
      this.eventBus && this.eventBus.$on('update:selected', (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true
        } else {
          this.open = false
        }
      })
    },
    methods: {
      toggle () {
        if (this.open) {
          this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
        } else {
          this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
        }
      },
    },
  }
</script>

<style lang="scss">
 @import './mian.scss';
</style>