<template>
  <div class="page">
     <alice-nav-bar title="navbar 导航栏" leftArrow @click-left="$router.go(-1)"/>
    <section>
      <div class="p15 c7">navbar 导航栏</div>
      <div class="mt15">
        <alice-nav-bar title="navbar 导航栏" leftArrow />
      </div>
      <div class="mt15">
        <alice-nav-bar title="navbar 导航栏" rightArrow />
      </div>
      <div class="mt15">
        <alice-nav-bar title="navbar 导航栏" leftText="左文字"></alice-nav-bar>
      </div>
      <div class="mt15">
        <alice-nav-bar title="navbar 导航栏" rightText="右文字"></alice-nav-bar>
      </div>
    </section>
  </div>
</template>
