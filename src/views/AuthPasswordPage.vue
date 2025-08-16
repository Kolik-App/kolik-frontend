<template>
  <ion-page>
    <ion-content>
      <main class="auth-password">
        
        <header class="auth-password__header">
        <ion-button fill="clear" class="auth-password__back" @click="goBack"> ← </ion-button>
        <h1 class="auth-password__title">Пароль</h1>
        <p class="auth-password__subtitle">Придумайте пароль</p>
        </header>
        <form class="auth-password__form" @submit.prevent="submitForm">
        <div class="auth-password__field">
        <label class="auth-password__label" for="password">Пароль</label>
            <div class="auth-password__input-wrapper">
              <ion-input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Пароль"
                v-model="password"
                class="auth-password__input"
              ></ion-input>
              <ion-button
                fill="clear"
                size="small"
                class="auth-password__toggle"
                @click="togglePassword"
              >👁</ion-button>
            </div>
          </div>
          <div class="auth-password__field">
            <label class="auth-password__label" for="confirm-password">Подтвердите пароль</label>
            <div class="auth-password__input-wrapper">
              <ion-input
                id="confirm-password"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Пароль"
                v-model="confirmPassword"
                class="auth-password__input"
              ></ion-input>
              <ion-button
                fill="clear"
                size="small"
                class="auth-password__toggle"
                @click="toggleConfirmPassword"
              >👁</ion-button>
            </div>
          </div>
          <ion-button expand="block" type="submit" class="auth-password__submit">Начать</ion-button>
        </form>
      </main>
    </ion-content>
  </ion-page>
</template>

<script setup>
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #fff;
  margin: 0;
  padding: 0;
}

.auth-password {
  padding: 16px;
}

.auth-password__header {
  margin-bottom: 24px;
}

.auth-password__back {
  font-size: 24px;
}

.auth-password__title {
  font-size: 22px;
  font-weight: bold;
  margin: 8px 0 4px;
}

.auth-password__subtitle {
  color: #666;
  font-size: 16px;
  margin: 0;
}

.auth-password__field {
  margin-bottom: 20px;
}

.auth-password__label {
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
}

.auth-password__input-wrapper {
  display: flex;
  align-items: center;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 0 10px;
}

.auth-password__input {
  flex: 1;
}

.auth-password__toggle {
  font-size: 18px;
}

.auth-password__submit {
  --background: #0050ff;
  --border-radius: 10px;
}
</style>
