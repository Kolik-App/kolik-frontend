<template>
  <ion-page class="booking-details">
    <nav class="bottom-nav">
      <a href="#" class="bottom-nav__item">
        <img src="/src/assets/booking-details/booking-home.svg" alt="Дом" />
      </a>
      <a href="#" class="bottom-nav__item bottom-nav__item--active">
        <img src="/src/assets/booking-details/booking-calendar.svg" alt="Календарь" />
      </a>
      <a href="#" class="bottom-nav__item">
        <img src="/src/assets/booking-details/booking-profile.svg" alt="Профиль" />
      </a>
    </nav>

    <ion-content :fullscreen="true">
      <main class="booking-details__container">
        <h1 class="booking-details__title">Детали бронирования</h1>

        <section class="booking-details__card">
          <div class="booking-details__company">
            <span class="booking-details__company-name">AutoTech</span>
            <span class="booking-details__status">
              <img src="/src/assets/booking-details/booking-tick.svg" alt="Подтверждено" class="booking-details__status-icon" />
              Подтверждено
            </span>
          </div>
          <div class="booking-details__date">12 июля, 15:00</div>
        </section>

        <section class="booking-details__info">
          <h2 class="booking-details__info-title">Дополнительная информация</h2>
          <div class="booking-details__info-item">
            <span class="booking-details__info-label">Адрес</span>
            <span class="booking-details__info-value booking-details__info-value--bold">ул. Лесная, 5, Алматы</span>
          </div>
          <div class="booking-details__info-item">
            <span class="booking-details__info-label">Услуга</span>
            <span class="booking-details__info-value booking-details__info-value--bold">Диагностика подвески</span>
          </div>
          <div class="booking-details__info-item">
            <span class="booking-details__info-label">Время услуги</span>
            <span class="booking-details__info-value booking-details__info-value--bold">40 мин</span>
          </div>
        </section>

        <a href="#" class="booking-details__map-btn">
          <img src="/src/assets/booking-details/booking-map.svg" alt="Открыть в картах" class="booking-details__map-icon" />
          Открыть в картах
        </a>

        <div class="booking-details__actions">
          <button class="booking-details__btn booking-details__btn--edit">Изменить</button>
          <button class="booking-details__btn booking-details__btn--cancel">Отменить бронирование</button>
        </div>
      </main>
    </ion-content>
  </ion-page>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');


.booking-details {
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  margin: 0;
  padding: 0;
}

.booking-details__container {
  padding: 16px;
}

.booking-details__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
}

.booking-details__card {
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 16px;
}

.booking-details__company {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.booking-details__company-name {
  font-weight: 700;
  font-size: 16px;
}

.booking-details__status {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #4CAF50;
}

.booking-details__status-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.booking-details__date {
  font-size: 14px;
  color: #555;
  margin-top: 4px;
}

.booking-details__info-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
}

.booking-details__info-item {
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
}

.booking-details__info-label {
  font-size: 14px;
  color: #555;
}

.booking-details__info-value {
  font-size: 14px;
}

.booking-details__info-value--bold {
  font-weight: 700;
}

.booking-details__map-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #0048ff;
  border-radius: 12px;
  padding: 10px;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  margin-top: 12px;
}

.booking-details__map-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.booking-details__actions {
  margin-top: 24px;
}

.booking-details__btn {
  display: block;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  cursor: pointer;
}

.booking-details__btn--edit {
  background-color: #0048ff;
  color: white;
  border-radius: 12px;
}

.booking-details__btn--cancel {
  background-color: white;
  color: red;
  border: 2px solid #0048ff; 
  border-radius: 12px;
}

.booking-details__container {
  padding-bottom: calc(80px + env(safe-area-inset-bottom, 0px));
}

.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  border-top: 1px solid #ddd;
  padding: 10px 0;
  padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));
  z-index: 1000;
}

.bottom-nav__item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.bottom-nav__item img {
  width: 24px;
  height: 24px;
  display: block;
}

.bottom-nav__item--active::before {
  content: "";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 4px;
  background: url('/src/assets/booking-details/booking-arrow.svg') no-repeat center / contain;
}
</style>
