// 参考vant和iview的popupManger
import manager from './manager'
import context from './context'
export default {
  // mixins: [Touch],
  props: {
    // 是否显示
    value: Boolean,
    // 是否显示遮罩
    isMask: Boolean,
    // 遮罩样式
    maskStyle: Object,
    // 遮罩classname
    maskClass: String,
    //是否使用点击遮罩关闭
    closeOnClickMask: Boolean,
    zIndex: [String, Number],
  },

  data() {
    return {
      inited: this.value // 保存value
    };
  },
  watch: {
    value(val) {
      this.inited = this.inited || this.value;
      // debugger
      this[val ? 'open' : 'close']();
    },

  },
  mounted() {
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy() {
    this.close();
  },

  methods: {
    open() {
      // cover default zIndex
      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex;
      }
      this.opened = true;
      this.renderMask();
    },

    close() {
      if (!this.opened) {
        return;
      }
      this.opened = false;
      manager.close(this);
      this.$emit('input', false);
    },
    // 是否进入遮罩管理器
    renderMask() {
      if (this.isMask) {
        manager.open(this, {
          zIndex: context.zIndex++,
          className: this.overlayClass,
          customStyle: this.overlayStyle
        });
      } else {
        // 不进入遮罩管理器
        manager.close(this);
      }
      this.$nextTick(() => {
        this.$el.style.zIndex = context.zIndex++;
      });
    }
  }
};
