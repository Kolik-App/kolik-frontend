<template>
  <ion-page>
    <ion-content :fullscreen="true" class="welcome__content">
      <div class="welcome__container">
        <div class="welcome__texts">
          <h1 class="welcome__title">Добро пожаловать!</h1>
          <p class="welcome__subtitle">Забронируйте место на ближайшем СТО</p>
        </div>

        <div class="welcome-buttons">
          <ion-button expand="block" class="button__primary">Войти</ion-button>
          <ion-button expand="block" fill="outline" class="button__secondary">Зарегистрироваться</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogin = () => {
  router.push('/login')
}

const handleRegister = () => {
  router.push('/register') 
}

</script>

<style>
.welcome__content {
  --background: #0048ff;
  position: relative;
}

.welcome__container {
  position: absolute;
  top: 480px;
  left: 40px;
  width: 345px;
  height: 252px;
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.welcome__texts {
  width: 295px;
  height: 54px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;
}

.welcome__title {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.welcome__subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.welcome__buttons {
  width: 345px;
  height: 98px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.button__primary {
  --background: #ffffff;
  --color: #0048ff;
  border-radius: 12px;
  font-size: 16px;
  height: 48px;
}

.button__secondary {
  --color: #ffffff;
  --border-color: #ffffff;
  border-radius: 12px;
  font-size: 16px;
  height: 48px;
}
</style>

