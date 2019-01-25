<template>
  <a :href="href" class="alice-cell" :class="cname">
    <span class="alice-cell-mask" v-if="isLink"></span>
    <div class="alice-cell-left">
      <slot name="left"/>
    </div>
    <div class="alice-cell-wrapper">
      <div class="alice-cell-title">
        <slot name="icon">
          <i v-if="icon" class="alice-icon" :class="'alice-icon-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="alice-cell-text" v-text="title"></span>
          <span class="alice-cell-label" v-text="label" v-if="label"></span>
        </slot>
      </div>
      <div class="alice-cell-value" :class="{'is-link': isLink}">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
      <i v-if="isLink" class="alice-cell-allow-right"></i>
    </div>
    <div class="alice-cell-right">
      <slot name="right"></slot>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    icon: String,
    cname: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {},
  },
  computed: {
    // href() {
    //   if (this.to && !this.added && this.$router) {
    //     const resolved = this.$router.match(this.to);
    //     if (!resolved.matched.length) return this.to;
    //     this.$nextTick(() => {
    //       this.added = true;
    //       this.$el.addEventListener('click', this.handleClick);
    //     });
    //     return resolved.fullPath || resolved.path;
    //   }
    //   return this.to;
    // }
  },

  methods: {
    // handleClick($event) {
    //   $event.preventDefault();
    //   this.$router.push(this.href);
    // }
  }
}
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>


