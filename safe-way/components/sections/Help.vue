<script setup lang="ts">
  import Links from "~/components/Links.vue";
</script>

<template>
  <section class="section-help">
    <div class="background-image-white-filter"></div>
    <img class="background-image flag" src="@/assets/img/flag-usa.png" alt="">
    <img class="background-image central-park" src="@/assets/img/central-park-manhattan.png" alt="">
    <Links />
    <h2 class="title">КАКУЮ ПОМОЩЬ МЫ ОКАЗЫВАЕМ</h2>
    <ul class="help-points">
      <li class="help-point">
        <div class="help-icon-wrapper plane"></div>
        <div class="point-text-wrapper">
          <h3 class="point-title">Заголовок</h3>
          <p class="point-text">
            Помощь с билетами и кейсом для успешного перелета в Мексику и прохода границ
            <br>
            В мексику пускают не всех, и очень часто разворачивают на границе, мы соберем ваш туристический кейс чтобы у
            визового офицера на границе не возникло вопросов к вам
          </p>
        </div>
      </li>
      <li class="help-point">
        <div class="help-icon-wrapper car"></div>
        <div class="point-text-wrapper">
          <h3 class="point-title">Заголовок</h3>
          <p class="point-text">
            Помощь с прибытием в Мексику и безопасным трансфером по мексике
            <br>
            Мексика страна с высоким уровнем криминала, мы сделаем ваше пребывание удобным и безопасным
          </p>
        </div>
      </li>
      <li class="help-point">
        <div class="help-icon-wrapper calendar"></div>
        <div class="point-text-wrapper">
          <h3 class="point-title">Заголовок</h3>
          <p class="point-text">
            Помощь назначения даты перехода границы США и регистрация через правительство соединенных штатов
            <br>
            Зарегистрируем вас в CBP и назначим дату интервью с офицером на границе
          </p>
        </div>
      </li>
      <li class="help-point">
        <div class="help-icon-wrapper court"></div>
        <div class="point-text-wrapper">
          <h3 class="point-title">Заголовок</h3>
          <p class="point-text">
            Консультация Адвоката по вашему кейсу а также полное сопровождение в суде и помощь в получении документов
            таких как разрешение на работу и Social Security и получения Driver License
          </p>
        </div>
      </li>
      <li class="help-point">
        <div class="help-icon-wrapper grid"></div>
        <div class="point-text-wrapper">
          <h3 class="point-title">Заголовок</h3>
          <p class="point-text">
            Подготовим ваш кейс до суда и перехода, при попадании в миграционную тюрьму наши Адвокаты будут делать все
            чтобы вызволить вас в кротчайшие сроки
          </p>
        </div>
      </li>
      <li class="help-point">
        <div class="help-icon-wrapper home"></div>
        <div class="point-text-wrapper">
          <h3 class="point-title">Заголовок</h3>
          <p class="point-text">
            Помощь в подборе жилья в USA
            <br>
            Помощь в Аренде жилья на краткий и долгий срок
            <br>
            Снять жилье в USA без документов сложно, мы поможем найти удобные варианты размещения для вас и вашей семьи
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.section-help {
  --icons-border-color: #EF3139;
  position: relative;
  z-index: 200;
  background: #FFFFFF;
  color: var(--black-text);
}

.background-image-white-filter {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
}

.background-image {
  position: absolute;
  left: 0;
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.background-image.flag {
  top: 150px;
  transform: rotate(3.4deg) scale(1.1, 1);
}
.background-image.central-park {
  top: 620px;
  transform: rotate(-3.4deg) scale(1.1, 1);
}

.section-help .title {
  position: relative;
  z-index: 150;
  margin: 0 0 100px;
  padding: 0;
  font-size: 40px;
  text-align: center;
}

.help-points {
  position: relative;
  z-index: 150;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
}

.help-point {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 150px;
  padding: 0;
}

.help-icon-wrapper {
  width: 281px;
  height: 281px;
  border-radius: 50%;
  border: 4px solid var(--icons-border-color);
  box-sizing: border-box;
}

.help-icon-wrapper.plane {
  background: url('@/assets/img/icon-plane.svg') no-repeat center;
}

.help-icon-wrapper.car {
  background: url('@/assets/img/icon-car.svg') no-repeat center;
}

.help-icon-wrapper.calendar {
  background: url('@/assets/img/icon-calendar.svg') no-repeat center;
}

.help-icon-wrapper.court {
  background: url('@/assets/img/icon-court.svg') no-repeat center;
}

.help-icon-wrapper.grid {
  background: url('@/assets/img/icon-grid.svg') no-repeat center;
}

.help-icon-wrapper.home {
  background: url('@/assets/img/icon-home.svg') no-repeat center;
}

.point-title {
  margin: 0 0 28px;
  padding: 0;
  font-size: 40px;
}

.point-text {
  font-size: 27px;
  margin: 0;
  padding: 0;
  max-width: 788px;
}
</style>