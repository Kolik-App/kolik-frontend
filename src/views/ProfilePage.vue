<template>
  <ion-page>
    <ion-content class="profile" fullscreen>
      <main class="profile__container">
        <h1 class="profile__title">Мой профиль</h1>

        <section class="profile__user">
          <p class="profile__name">Алексей Смирнов</p>
          <p class="profile__phone">+7 777 777 7777</p>
          <p class="profile__email">smirnov@gmail.com</p>
        </section>

        <section class="profile__cars">
          <h2 class="profile__section-title">Мои автомобили</h2>
          <div class="profile__car">
            <div class="profile__car-info">
              <span class="profile__car-name">Toyota Camry</span>
              <span class="profile__car-number">A123BC</span>
            </div>
            <img src="/src/assets/profile/profile-arrow_right.svg" alt=">" class="profile__car-arrow" />
          </div>
          <button class="profile__add-car">+ Добавить автомобиль</button>
        </section>

        <section class="profile__settings">
          <h2 class="profile__section-title">Настройки</h2>

          <div class="profile__setting">
            <span class="profile__setting-label">Язык</span>
            <select class="profile__select">
              <option>Русский</option>
            </select>
          </div>

          <div class="profile__setting">
            <span class="profile__setting-label">Уведомления</span>
            <label class="profile__switch">
              <input type="checkbox" />
              <span class="profile__slider"></span>
            </label>
          </div>

          <div class="profile__setting">
            <span class="profile__setting-label">Темная тема</span>
            <label class="profile__switch">
              <input type="checkbox" />
              <span class="profile__slider"></span>
            </label>
          </div>
        </section>

        <section class="profile__security">
          <h2 class="profile__section-title">Безопасность</h2>
          <div class="profile__setting profile__setting--link">
            <span class="profile__setting-label">Сменить пароль</span>
            <img src="/src/assets/profile/profile-arrow_right.svg" alt=">" class="profile__car-arrow" />
          </div>
        </section>

        <button class="profile__logout">Выйти из аккаунта</button>
      </main>


    </ion-content>

    <ion-footer class="bottom-nav">
        <a href="#" class="bottom-nav__item">
          <img src="/src/assets/profile/profile-home.svg" alt="Дом" />
        </a>
        <a href="#" class="bottom-nav__item">
          <img src="/src/assets/profile/profile-calendar.svg" alt="Календарь" />
        </a>
        <a href="#" class="bottom-nav__item bottom-nav__item--active">
          <img src="/src/assets/profile/profile-user.svg" alt="Профиль" />
        </a>
      </ion-footer>

  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonFooter } from "@ionic/vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");


body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  background: #fff;
}

.profile__container {
  padding: 16px;
  padding-bottom: 120px;
}

.profile__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
}

.profile__user p {
  margin: 4px 0;
  font-size: 14px;
  color: #000;
}

.profile__section-title {
  font-size: 16px;
  font-weight: 700;
  margin: 16px 0 8px;
}

.profile__car {
  background: #f8f8f8;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile__car-info {
  display: flex;
  flex-direction: column;
}

.profile__car-name {
  font-weight: 700;
  font-size: 14px;
}

.profile__car-number {
  font-size: 13px;
  color: #555;
}

.profile__car-arrow {
  width: 16px;
  height: 16px;
}

.profile__add-car {
  margin-top: 8px;
  width: 100%;
  background: #f2f2f2;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  color: #777;
  cursor: pointer;
}

.profile__setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
}

.profile__setting-label {
  font-size: 14px;
  color: #000;
}



.profile__switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.profile__switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.profile__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 20px;
  transition: 0.3s;
}

.profile__slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
}

.profile__switch input:checked + .profile__slider {
  background-color: #0048ff;
}

.profile__switch input:checked + .profile__slider:before {
  transform: translateX(20px);
}

.profile__setting--link {
  cursor: pointer;
}

.profile__logout {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  border: 2px solid #0048ff;
  border-radius: 12px;
  background: #fff;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}


.bottom-nav {
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
}

.bottom-nav__item--active::before {
  content: "";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 4px;
  background: url("/src/assets/profile/profile-arrow.svg") no-repeat center / contain;
}
</style>
