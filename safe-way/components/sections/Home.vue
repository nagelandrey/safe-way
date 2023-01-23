<template>
  <section class="section-home">
    <img src="@/assets/img/section-home-background-city.png" class="background-image" alt="">
    <div class="background-gray"></div>
    <div class="home-content">
      <p class="home-text">
        БЕЗОПАСНЫЙ ПУТЬ
      </p>
      <p class="home-text big">
        В ЛУЧШУЮ ЖИЗНЬ
      </p>
      <button class="button-get-started">НАЧАТЬ СЕЙЧАС</button>
    </div>
  </section>
</template>

<style scoped>
.section-home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
}
.background-gray {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(59, 59, 59, 0.71);
}
.home-content {
  position: relative;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 64px;
}
.home-text {
  padding: 0;
  margin: 0;
  letter-spacing: 5px;
}
.home-text.big {
  font-weight: 900;
}
.button-get-started {
  margin: 30px 0 0;
  padding: 28px 34px;
  border-radius: 25px;
  border: none;
  background: #EF3139;
  font-size: 26px;
  color: var(--white-text);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>