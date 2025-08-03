<template>
  <ion-page>
    <ion-content :fullscreen="true" class="welcome-page">
      <div class="container">
        <div class="text-block">
          <h1>Добро пожаловать!</h1>
          <p>Забронируйте место на ближайшем СТО</p>
        </div>

        <div class="buttons">
          <ion-button expand="block" class="login-button">
            Войти
          </ion-button>
          <ion-button expand="block" fill="outline" class="register-button">
            Зарегистрироваться
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.welcome-page {
  --background: #0048FF;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'Roboto', sans-serif;
}

.container {
  width: 100%;
  padding: 0 20px 40px;
  text-align: center;
}

.text-block {
  margin-bottom: 20px;
  color: white;
}

.text-block h1 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}

.text-block p {
  font-size: 14px;
  opacity: 0.8;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.login-button {
  --background: white;
  --color: #0048FF;
  --border-radius: 12px;
  font-weight: 500;
}

.register-button {
  --border-color: white;
  --color: white;
  --border-radius: 12px;
  font-weight: 500;
}
</style>
