<template>
  <div class="page">
    <alice-nav-bar title="button 按钮" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="p15 c7 f16">按钮种类</div>
      <div class="row-between mh5">
        <alice-button type="default">按钮default</alice-button>
        <alice-button type="primary">按钮primary</alice-button>
        <alice-button type="danger">按钮danger</alice-button>
      </div>
      
      <div class="p15 c7">按钮形状</div>
      <div class="row mh5">
        <alice-button block>按钮block</alice-button> &nbsp
        <alice-button round>按钮round</alice-button>
      </div>

      <div class="p15 c7">按钮大小</div>
      <div class="mh5">
        <alice-button size="small">按钮small</alice-button> <br>
        <alice-button size="normal">按钮normal</alice-button> <br>
        <alice-button size="large">按钮large</alice-button> <br>
      </div>

      <div class="p15 c7">左右显示图标</div>
      <div class="row mh5">
        <alice-button  text="左边"><alice-icon name="face" slot="btn-left"/></alice-button> &nbsp
        <alice-button text="右边"><alice-icon name="face" slot="btn-right"/></alice-button> 
      </div>

      <div class="p15 c7">禁用状态</div>
      <div class="mh5">
        <alice-button disabled>禁用状态</alice-button>
      </div>
    </section>
  </div>
</template>
