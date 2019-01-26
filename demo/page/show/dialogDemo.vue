<template>
  <div class="page">
    <alice-nav-bar title="dialog 弹框" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="mt20 pv5 ph15">
        <alice-button @click="showAlert">alert</alice-button> </br>
        <alice-button @click="showConfirm">confirm</alice-button>
      </div>
      <pre class="c7">
        <code>
        this.$alert('这是提示框', 
          ()=>{ window.alert('你按了确定') 
        })

        this.$confirm('这是提示框', 
          ()=>{ window.alert('你按了确定') },
          () => { window.alert('你按了取消') 
        })

        </code>
      </pre>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    showAlert() {
      this.$alert('这是提示框',()=>{window.alert('你按了确定')})
    },
    showConfirm() {
      this.$confirm('这是提示框',()=>{window.alert('你按了确定')},()=>{window.alert('你按了取消')})
    }
  }
}
</script>
