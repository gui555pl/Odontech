<template lang="pug">
  v-card.mx-auto(max-width='400' rounded='lg' style='z-index: 99999')
    div.header_div
      h1.title_bottom(style='color: white;') OdontoTech
      span.title_bottom(style='color: white;') Login
    v-card-text.text--primary
      v-row
        v-col(cols='12')
          v-text-field(v-model='email' label='Email' hide-details filled rounded dense)
        v-col(cols='12')
          v-text-field(v-model='password' label='Senha' type='password' hide-details filled rounded dense)
    v-card-actions
      v-spacer
      v-btn(@click='$router.push("/")' color='orange' text)
        | Entrar
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
.header_div {
  height: 100px;
  width: 100%;
  background-color: #2962FF !important;
  padding: 16px;
}
.title_bottom {
}
</style>
