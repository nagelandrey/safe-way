<template>
  <section class="section-operations">
    <img src="@/assets/img/section-operations-passport.png" alt="" class="background-image">
    <div class="content">
      <div class="operation">
        <div class="operation-share">100%</div>
        <div class="operation-title">Успешных операций</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-operations {
  position: relative;
  z-index: 200;
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
}
.content {

}
.operation-title {
  text-transform: uppercase;
}
</style>