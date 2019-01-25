<template>
  <div class="page">
    <alice-nav-bar title="icon 图标" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="p15 c7">
        使用google的material,
        <a href="https://material.io/tools/icons/?style=baseline" style="color:#10a2f7">地址(需要科学上网)</a> 
      </div>
      <div class="p15 c7">
        一些案例
      </div>
      <div class="m15 row-around">
        <alice-icon name="3d_rotation" color="#10a2f7" size="35px"/>
        <alice-icon name="accessibility" color="#10a2f7" size="35px"/>
        <alice-icon name="accessibility_new" color="#10a2f7" size="35px"/>
        <alice-icon name="accessible" color="#10a2f7" size="35px"/>
        <alice-icon name="accessible_forward" color="#10a2f7" size="35px"/>
        <alice-icon name="account_balance" color="#10a2f7" size="35px"/>
        <alice-icon name="account_balance_wallet" color="#10a2f7" size="35px"/>
        <alice-icon name="account_box" color="#10a2f7" size="35px"/>
        <alice-icon name="account_circle" color="#10a2f7" size="35px"/>
      </div>
      <div class="m15 row-around">
        <alice-icon name="android" color="#10a2f7" size="35px"/>
        <alice-icon name="add_alert" color="#10a2f7" size="35px"/>
        <alice-icon name="error" color="#10a2f7" size="35px"/>
        <alice-icon name="error_outline" color="#10a2f7" size="35px"/>
        <alice-icon name="notification_important" color="#10a2f7" size="35px"/>
        <alice-icon name="warning" color="#10a2f7" size="35px"/>
        <alice-icon name="ring_volume" color="#10a2f7" size="35px"/>
        <alice-icon name="screen_share" color="#10a2f7" size="35px"/>
        <alice-icon name="sentiment_satisfied_alt" color="#10a2f7" size="35px"/>
      </div>
       <div class="p15 c7">
        可以使用color调整颜色，fontsize调整大小。
      </div>
    </section> 
  </div>
</template>
