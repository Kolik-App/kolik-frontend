<<<<<<< HEAD
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
=======
<template>
  <ion-page class="auth">
    <ion-content class="auth__content">
      <div class="auth__container">
        <h1 class="auth__title">Kölik</h1>
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

<script setup>

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.auth {
  background: #0048FF;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.auth__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth__container {
  width: 100%;
  max-width: 360px;
  padding: 24px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.auth__title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 24px;
  color: #0048FF;
}

.auth__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.auth__input {
  padding-start: 12px;

  padding-end: 12px;
  background: #f4f4f4;
  border-radius: 8px;
}

.auth__button {
  border-radius: 8px;
}

.auth__button--primary {
  background-color: #0048FF;
  color: white;
}

.auth__footer {
  margin-top: 16px;
  text-align: center;
}

.auth__text {
  font-size: 14px;
  color: #444;
}

.auth__link {
  color: #0048FF;
  text-decoration: underline;
  font-weight: 500;
  display: inline-block;
  margin-top: 4px;
}
</style>

>>>>>>> 4894ff1 (добавил верстку экрана входа)
