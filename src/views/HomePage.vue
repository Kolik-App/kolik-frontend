<template>
  <ion-page class="page">
    <ion-header class="header" translucent>
      <div class="header__top">
        <div class="header__info">
          <h1 class="header__title">Главная</h1>
          <p class="header__subtitle">Вы записаны в AutoTech<br />
            на <span class="header__date">12 июля, 15:00</span>
          </p>
          <button class="header__button">Подробнее</button>
        </div>

        <div class="header__icon">
          <button class="header__notif" type="button" aria-label="Уведомления">
            <img src="/src/assets/Frame-10.svg" alt="Уведомление" />
          </button>
        </div>
      </div>
    </ion-header>

    <ion-content class="main" fullscreen>
      <section class="promo">
        <div class="promo__card">
          <span class="promo__icon">
            <img src="/src/assets/Frame-1.svg" alt="Скидка" />
          </span>
          <p class="promo__text">Скидки 15% на диагностику до 15 июля</p>
        </div>
      </section>

      <section class="history">
        <h2 class="history__title">История обращений</h2>

        <div class="history__item">
          <span class="history__icon">
            <img src="/src/assets/Frame-2.svg" alt="Замена масло" />
          </span>
          <div class="history__info">
            <p class="history__name">AutoFix</p>
            <p class="history__desc">Замена масло</p>
          </div>
          <span class="history__date">21 мая</span>
        </div>

        <div class="history__item">
          <span class="history__icon">
            <img src="/src/assets/Frame-3.svg" alt="Ключ" />
          </span>
          <div class="history__info">
            <p class="history__name">SpeedService</p>
            <p class="history__desc">Ремонт</p>
          </div>
          <span class="history__date">19 мая</span>
        </div>

        <div class="history__item">
          <span class="history__icon">
            <img src="/src/assets/Frame-4.svg" alt="Поиск" />
          </span>
          <div class="history__info">
            <p class="history__name">SpeedService</p>
            <p class="history__desc">Диагностика</p>
          </div>
          <span class="history__date">18 мая</span>
        </div>
      </section>

      <section class="news">
        <h2 class="news__title">Новости</h2>

        <div class="news__item">
          <span class="news__icon">
            <img src="/src/assets/Frame-5.svg" alt="Новости" />
          </span>
          <p class="news__text">Открылось новое СТО в вашем районе</p>
        </div>

        <div class="news__item">
          <span class="news__icon">
            <img src="/src/assets/Frame-6.svg" alt="Скидки" />
          </span>
          <p class="news__text">Скидки 15% в <b>SpeedService</b></p>
        </div>
      </section>

    </ion-content>

    <ion-footer translucent>
      <nav class="bottom-nav">
        <a href="#" class="bottom-nav__item bottom-nav__item--active">
          <img src="/src/assets/Frame-7.svg" alt="Дом" />
        </a>
        <a href="#" class="bottom-nav__item">
          <img src="/src/assets/Frame-8.svg" alt="Календарь" />
        </a>
        <a href="#" class="bottom-nav__item">
          <img src="/src/assets/Frame-9.svg" alt="Профиль" />
        </a>
      </nav>
    </ion-footer>
  </ion-page>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body.page {
  font-family: 'Roboto', sans-serif;
}

.page {
  margin: 0;
  background: #f9f9f9;
  color: #000;
}

.header {
  background: linear-gradient(to bottom, #0048FF 0%, #003FCC 50%, #002B99 100%);
  color: #fff;
  padding: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.header__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.header__info {
  flex: 1;
}

.header__title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

.header__subtitle {
  margin: 5px 0 10px;
  font-size: 14px;
}

.header__date {
  font-weight: 500;
}

.header__button {
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
  height: 43px;
  display: block;
  box-sizing: border-box;
  width: calc(100% + 25px);
  margin-right: -40px;
}

.header__icon {
  position: relative;
}

.header__notif {
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.header__notif img {
  width: 24px;
  height: 24px;
}

.promo__card {
  display: flex;
  align-items: center;
  background: #f4f4f4;
  padding: 10px;
  border-radius: 12px;
  margin: 15px;
}

.promo__icon {
  font-size: 20px;
  margin-right: 10px;
}

.promo__text {
  font-size: 14px;
}

.history {
  padding: 0 15px;
}

.history__title {
  font-size: 16px;
  margin: 20px 0 10px;
  font-weight: 500;
}

.history__item {
  display: flex;
  align-items: center;
  background: #f4f4f4;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 10px;
}

.history__icon {
  font-size: 20px;
  margin-right: 10px;
}

.history__info {
  flex: 1;
}

.history__name {
  font-size: 14px;
  font-weight: 500;
  margin: 0;
}

.history__desc {
  font-size: 12px;
  margin: 2px 0 0;
  color: #555;
}

.history__date {
  font-size: 12px;
  color: #777;
}

.news {
  padding: 0 15px 80px;
}

.news__title {
  font-size: 16px;
  margin: 20px 0 10px;
  font-weight: 500;
}

.news__item {
  display: flex;
  align-items: center;
  background: #f4f4f4;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 10px;
}

.news__icon {
  font-size: 20px;
  margin-right: 10px;
}

.news__text {
  font-size: 14px;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background: #fff;
  border-top: 1px solid #ddd;
  padding: 10px 0;
}

.bottom-nav__item {
  font-size: 20px;
  color: #888;
  text-decoration: none;
  position: relative;
}

.bottom-nav__item--active::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 4px;
  background: url('/src/assets/Arrow.svg') no-repeat center / contain;
}
</style>
