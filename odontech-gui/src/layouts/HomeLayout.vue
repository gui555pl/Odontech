<template lang="pug">
  span
    v-app-bar(app color='blue accent-4' dark flat)
      v-avatar.mr-10(color='grey darken-1' size='32')
      v-toolbar-title OdontoTech
      v-spacer
      v-btn(@click='goTo(item)' v-for='item in menus' :key='item.icon' text)
        v-icon.mr-1 {{ item.text === "Sair" ? item.icon  : '' }}
        | {{ item.text }}
    v-main.grey.lighten-3
      v-container
        v-row
          v-col(cols='2')
            v-sheet(rounded='lg')
              v-sheet.pa-4.card_radius_drawer(color='grey lighten-4')
                v-avatar.mb-4(color='grey darken-1' size='64')
                div john@vuetifyjs.com
              v-divider
              v-list(color='transparent' light)
                v-list-item(@click='goTo(item)' v-for='item in menus' :key='item.icon' link)
                  v-list-item-icon
                    v-icon {{ item.icon }}
                  v-list-item-content
                    v-list-item-title {{ item.text }}
          v-col
            v-sheet(min-height='calc(100vh - 100px)' rounded='lg')
              router-view
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      menus: [
        {
          text: 'Agendamento',
          icon: 'mdi-calendar',
          path: '/agendamento'
        },
        {
          text: 'Prontuário',
          icon: 'mdi-card-account-details',
          path: '/prontuario'
        },
        {
          text: 'Sair',
          icon: 'mdi-logout',
          path: '/login'
        },
      ]
    }
  },
  methods: {
    goTo(item) {
      if (this.$route.path !== item.path) this.$router.push(item.path)
    }
  }
}
</script>
