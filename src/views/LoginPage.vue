<template>
  <ion-page class="page">
    <ion-content :fullscreen="true">
      <div class="auth">
        <ion-button class="auth__back" fill="clear" @click="goBack">
          <ion-icon :icon="arrowBackOutline"></ion-icon>
        </ion-button>

        <h1 class="auth__title">Вход</h1>
        <p class="auth__subtitle">Введите ваш логин и пароль</p>

        <form class="auth__form" @submit.prevent="onSubmit">
          <label class="auth__field">
            <span class="auth__label">Номер телефона</span>
            <ion-input 
              class="auth__input" 
              type="tel" 
              placeholder="+7 ()" 
              v-model="phone" 
              inputmode="tel" 
            />
          </label>

          <label class="auth__field">
            <span class="auth__label">Пароль</span>
            <ion-input 
              class="auth__input" 
              type="password" 
              placeholder="Текст" 
              v-model="password" 
            />
          </label>

          <a href="#" class="auth__forgot">Забыли пароль?</a>

          <ion-button expand="block" type="submit" class="auth__button">
            Войти
          </ion-button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonContent, IonButton, IonInput, IonIcon } from '@ionic/vue';
import { arrowBackOutline } from 'ionicons/icons';

const phone = ref('');
const password = ref('');

function goBack() {
  window.history.back();
}

function onSubmit() {
  console.log('Телефон:', phone.value);
  console.log('Пароль:', password.value);
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.page {
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
}

.auth {
  width: 345px;
  margin: 120px auto 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.auth__back {
  position: absolute;
  top: 24px;
  left: 24px;
  font-size: 24px;
}

.auth__title {
  font-size: 24px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.32px;
  color: #000000;
  margin: 0;
}

.auth__subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.32px;
  color: #000000B2;
  margin-top: 8px;
}

.auth__form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.auth__field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.auth__label {
  font-size: 12px;
  color: #000000B2;
  font-weight: 400;
}

.auth__input {
  padding-start: 12px;
  padding-end: 12px;
  font-size: 16px;
  color: #858585;
  border-radius: 12px;
  background-color: #f7f7f7;
}

.auth__forgot {
  align-self: flex-end;
  font-weight: 700;
  font-size: 12px;
  color: #0048FF;
  text-decoration: none;
  margin-top: -12px;
}

.auth__button {
  height: 43px;
  background-color: #0048FF;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  padding-start: 24px;
  padding-end: 24px;
}
</style>