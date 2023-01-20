<template>
  <header class="header">
    <ul class="menu">
      <li class="menu-item">
        <a href="#" class="menu-link"><img src="" alt="" class="menu-logo-image"></a>
      </li>
      <li class="menu-item">
        <a href="#" class="menu-link menu-logo-text">LOGO</a>
      </li>
      <li class="menu-item">
        <a href="#" class="menu-link">Главная</a>
      </li>
      <li class="menu-item">
        <a href="#" class="menu-link">Команда</a>
      </li>
      <li class="menu-item">
        <a href="#" class="menu-link">Цены</a>
      </li>
      <li class="menu-item">
        <a href="#" class="menu-link">Отзывы</a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background: transparent;
}
.menu {
  margin: 0;
  padding: 58px 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
}
.menu .menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 74px;
  padding: 0;
}
.menu .menu-item:nth-child(1) {
  margin-left: 0;
}
.menu .menu-item:nth-child(2) {
  margin-left: 31px;
  margin-right: auto;
}
.menu .menu-link {
  font-size: 26px;
  text-decoration: none;
  color: var(--white-text);
}
.menu .menu-link:visited {
  text-decoration: none;
  color: var(--white-text);
}
.menu .menu-item:first-child .menu-link {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
.menu .menu-logo-image {
  width: 82px;
  height: 82px;
  background: gray;
  border-radius: 50%;
}
.menu .menu-logo-text {
  font-size: 46px;
  font-weight: 900;
}
</style>