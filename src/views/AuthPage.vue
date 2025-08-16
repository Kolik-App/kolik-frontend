<template>
  <ion-page>
    <ion-content class="auth" fullscreen>
      <ion-button fill="clear" class="auth__back" @click="goBack">←</ion-button>

      <h1 class="auth__title">Подтвердите логин</h1>
      <p class="auth__subtitle">Мы отправили код на ваш номер</p>

      <form class="auth__form" @submit.prevent="submitCode">
        <div class="auth__code-inputs">
          <ion-input
            v-for="(digit, index) in code"
            :key="index"
            class="auth__code-input"
            maxlength="1"
            inputmode="numeric"
            type="text"`
            pattern="[0-9]*"
            v-model="code[index]"
            @input="onInput(index)"
            @keydown.backspace="onBackspace(index, $event)"
          ></ion-input>
        </div>
        <ion-button expand="block" class="auth__submit" type="submit">
          Далее
        </ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script setup>
</script>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.auth__back {
  align-self: flex-start;
  margin-bottom: 20px;
  font-size: 20px;
}

.auth__title {
  font-size: 22px;
  font-weight: bold;
  margin: 0;
}

.auth__subtitle {
  color: #777;
  font-size: 14px;
  margin-bottom: 30px;
}

.auth__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.auth__code-inputs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.auth__code-input {
  --padding-start: 0;
  --padding-end: 0;
  width: 40px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.auth__code-input:focus-within {
  outline: 2px solid #007bff;
  border-color: transparent;
}

.auth__submit {
  font-weight: bold;
  --background: #0066ff;
  --border-radius: 8px;
}
</style>
