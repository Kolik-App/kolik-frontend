<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
<template>
  <ion-page class="auth">
    <ion-content class="auth__content">
      <div class="auth__container">
        <h1 class="auth__title">Вход</h1>
        <form class="auth__form">
          <ion-input
            label="Номер телефона"
            label-placement="floating"
            placeholder="+7 777 777 77 77"
            type="tel"
            class="auth__input"
          />
          <ion-button expand="block" class="auth__button auth__button--primary">
            Войти
          </ion-button>
        </form>
        <div class="auth__footer">
          <p class="auth__text">У вас нет аккаунта?</p>
          <a href="#" class="auth__link">Зарегистрироваться</a>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.auth {
  background: #0048FF;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; /* ✅ */
}

.auth__content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* ✅ */
  background: #0048FF; /* ✅ Устанавливаем фон через CSS-переменную */
}

.auth__container {
  width: 100%;
  max-width: 360px;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

</style>
