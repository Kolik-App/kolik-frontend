<template>
  <ion-page>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>Регистрация</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="registration">
        <div class="registration__header">
          <ion-icon :icon="arrowBack" class="registration__back" @click="$router.back()" />
          <h1 class="registration__title">Регистрация</h1>
          <p class="registration__subtitle">Введите ваш номер телефона</p>
        </div>

        <div class="registration__form">
          <label class="registration__label">Номер телефона</label>
          <ion-input
            type="tel"
            placeholder="+7 ()"
            class="registration__input"
          ></ion-input>
        </div>

        <div class="registration__button-wrapper">
          <ion-button expand="block" class="registration__button">
            Далее
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonButtons, IonBackButton, IonIcon } from '@ionic/vue'
import { arrowBack } from 'ionicons/icons'
</script>

<style scoped>
.registration {
  margin-top: 60px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.registration__header {
  display: flex;
  flex-direction: column;
}

.registration__back {
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
}

.registration__title {
  font-size: 24px;
  font-weight: 700;
  margin: 16px 0 4px;
}

.registration__subtitle {
  font-size: 16px;
  color: #7d7d7d;
  margin-bottom: 24px;
}

.registration__form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.registration__label {
  font-size: 14px;
  color: #7d7d7d;
}

.registration__input {
  background: #f8f8f8;
  padding-start: 12px;
  padding-end: 12px;
  height: 48px;
  font-size: 16px;
  border-radius: 12px;
}

/* .registration__input::part(native) {
  padding-left: 24px;
  */

.registration__button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.registration__button {
  width: 100%;
  height: 43px;
  background: #0048ff;
  font-size: 16px;
  border-radius: 12px;
}
</style>
