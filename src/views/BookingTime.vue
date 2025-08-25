<template>
  <ion-page>
    <ion-content class="booking-time">

      <h1 class="booking-time__title">Детали бронирования</h1>

      <!-- Дата -->
      <div class="booking-time__field">
        <label class="booking-time__label">Дата</label>
        <ion-input
          class="booking-time__input"
          placeholder="Текст"
        ></ion-input>
      </div>

      <!-- Время -->
      <div class="booking-time__field">
        <label class="booking-time__label">Время</label>
        <div class="booking-time__time-list">
          <button
            v-for="(time, index) in times"
            :key="index"
            class="booking-time__time"
            :class="{ 'booking-time__time--active': activeTime === time }"
            @click="setActiveTime(time)"
          >
            {{ time }}
          </button>
        </div>
      </div>

      <!-- Услуга -->
      <div class="booking-time__field">
        <label class="booking-time__label">Услуга</label>
        <ion-select class="booking-time__select" placeholder="Выберите один вариант">
          <ion-select-option value="wash">Мойка</ion-select-option>
          <ion-select-option value="repair">Ремонт</ion-select-option>
          <ion-select-option value="diagnostic">Диагностика</ion-select-option>
        </ion-select>
      </div>

      <!-- Комментарий -->
      <div class="booking-time__field">
        <label class="booking-time__label">Комментарий</label>
        <ion-textarea
          class="booking-time__textarea"
          placeholder="Текст"
        ></ion-textarea>
      </div>

      <!-- Кнопки -->
      <div class="booking-time__actions">
        <button class="booking-time__button booking-time__button--primary">
          Сохранить изменения
        </button>
        <button class="booking-time__button booking-time__button--secondary">
          Отмена
        </button>
      </div>

    </ion-content>

    <!-- Нижнее меню -->
    <ion-footer>
      <nav class="bottom-nav">
        <a href="#" class="bottom-nav__item">
          <img src="/src/assets/booking-time/booking-home.svg" alt="Дом" />
        </a>
        <a href="#" class="bottom-nav__item bottom-nav__item--active">
          <img src="/src/assets/booking-time/booking-calendar.svg" alt="Календарь" />
        </a>
        <a href="#" class="bottom-nav__item">
          <img src="/src/assets/booking-time/booking-profile.svg" alt="Профиль" />
        </a>
      </nav>
    </ion-footer>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonContent,
  IonInput,
  IonTextarea,
  IonFooter,
  IonSelect,
  IonSelectOption,
} from '@ionic/vue'

import { ref } from 'vue'

const times = ['15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30']
const activeTime = ref('15:30')

function setActiveTime(time) {
  activeTime.value = time
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  --background-color: #fff;
}

.booking-time {
  font-family: 'Roboto', sans-serif;
  /* max-width: 375px;
  margin: 0 auto; */
  padding: 16px;
  background-color: #fff;
  color: #000;
}

.booking-time__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.booking-time__field {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.booking-time__label {
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 500;
}


.booking-time__input,
.booking-time__select,
.booking-time__textarea {
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 12px;
  font-size: 14px;
  outline: none;
  --background: #f5f5f5;
  --border-radius: 8px;
  --padding-start: 12px;
  --padding-end: 12px;
}

.booking-time__textarea {
  resize: none;
  min-height: 80px;
}


.booking-time__time-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.booking-time__time {
  border: none;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  cursor: pointer;
}

.booking-time__time--active {
  background-color: #0048ff;
  color: #fff;
}


.booking-time__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
}

.booking-time__button {
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

.booking-time__button--primary {
  background-color: #0048ff;
  color: #fff;
}

.booking-time__button--secondary {
  background-color: #fff;
  color: red;
  border: 2px solid #0048ff;
  border-radius: 12px;
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
  background: url('/src/assets/booking-time/booking-arrow.svg') no-repeat center / contain;
}
</style>

