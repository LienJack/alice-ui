<template>
  <a :href="href" class="xf-cell" :class="cname">
    <span class="xf-cell-mask" v-if="isLink"></span>
    <div class="xf-cell-left">
      <slot name="left"/>
    </div>
    <div class="xf-cell-wrapper">
      <div class="xf-cell-title">
        <slot name="icon">
          <i v-if="icon" class="xf-icon" :class="'xf-icon-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="xf-cell-text" v-text="title"></span>
          <span class="xf-cell-label" v-text="label" v-if="label"></span>
        </slot>
      </div>
      <div class="xf-cell-value" :class="{'is-link': isLink}">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
      <i v-if="isLink" class="xf-cell-allow-right"></i>
    </div>
    <div class="xf-cell-right">
      <slot name="right"></slot>
    </div>
  </a>
</template>

<script>
/**
 * mt-cell
 * @desc 单元格
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <mt-cell title="标题文字" is-link value="描述文字"></mt-cell>
 * <mt-cell title="标题文字" >
 *   <div slot="value">描述文字啊哈</div>
 * </mt-cell>
 */
export default {
  props: {
    icon: String,
    cname: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {},
  },
  // 需要了解
  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;
        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.fullPath || resolved.path;
      }
      return this.to;
    }
  },

  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/var.scss';
$prefix: "xf-cell";
.#{$prefix} {
    background-color: $color-white;
    box-sizing: border-box;
    color: inherit;
    min-height: 48px;
    overflow: hidden;
    display: block;
    position: relative;
    text-decoration: none;
   &:last-child {
        // background-image: linear-gradient(0deg, $color-grey, $color-grey 50%, transparent 50%);
        // background-size: 100% 1px;
        // background-repeat: no-repeat;
        // background-position: bottom;
    }
}

.#{$prefix}-wrapper {
  background: {
    image: linear-gradient(0deg, $color-grey, $color-grey 50%, transparent 50%);
    size: 100% 1px;
    repeat: no-repeat;
    position: bottom;
  }
  display: flex;
  align-items: center;
  box-sizing: 16px;
  line-height: 1;
  min-height: inherit;
  overflow: hidden;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;
} 
.#{$prefix}-mask {
  &:after {
    background-color: #000;
    content: " ";
    opacity: 0;
    position: absolute 0;
  }
  &:active:after {
    opacity: .1;
  }
}

.#{$prefix}-text {
  vertical-align: middle;
}
.#{$prefix}-title {
  flex:1;
}

.#{$prefix}-label {
  color: #888;
  display: block;
  font-size: 12px;
  margin-top: 6px;
}

.#{$prefix}-value {
  color: $cell-value-color;
  display: flex;
  align-items: center;
}
.is-link {
  margin-right: 24px;
}

.#{$prefix}-left {
  position: absolute;
  height: 100%;
  left: 0;
  transform: translate3d(-100%, 0, 0);
}

.#{$prefix}-right {
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  transform: translate3d(100%, 0, 0)
}
.#{$prefix}-allow-right {
  &::after {
    border: solid 2px #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: 20px;
    position: absolute;
    width: 5px;
    height: 5px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
} 

</style>


