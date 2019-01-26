<template>
  <div class="page">
    <alice-nav-bar title="slider 滑条" leftArrow @click-left="$router.go(-1)"/>
    <section>
       <div class="mt20 pv5 ph15">
        <alice-button @click="">alert</alice-button> </br>
        <alice-button @click="">confirm</alice-button>
      </div>
    </section>
  </div>
</template>