<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" color="pink-lighten-5">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title text-pink-darken-2">
            🌸 Цветочный магазин
          </v-list-item-title>
          <v-list-item-subtitle class="text-pink-lighten-1">
            Нежные букеты с любовью
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="border-pink-lighten-3"></v-divider>

      <v-list dense>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          active-color="pink-darken-1"
          class="text-pink-darken-1"
        >
          <template v-slot:prepend>
            <v-icon :icon="link.icon" color="pink-lighten-2"></v-icon>
          </template>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="pink-lighten-3" density="comfortable">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
      
      <v-toolbar-title class="text-white font-weight-medium">
        🌷 Flower Shop
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          color="white"
          variant="text"
          class="mx-1"
        >
          <v-icon start :icon="link.icon" color="white"></v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="bg-pink-lighten-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: "Главная", icon: "mdi-home", url: "/" },
        { title: "Войти", icon: "mdi-lock", url: "/login" },
        { title: "Регистрация", icon: "mdi-face", url: "/registration" },
        { title: "Заказы", icon: "mdi-bookmark-multiple-outline", url: "/orders" },
        { title: "Добавить букет", icon: "mdi-note-plus-outline", url: "/new" },
        { title: "Мои букеты", icon: "mdi-view-list-outline", url: "/list" }
      ]
    }
  }
}
</script>

<style>
.bg-pink-lighten-5 {
  background-color: #fff0f5 !important;
}

.text-pink-darken-2 {
  color: #d81b60 !important;
}

.text-pink-lighten-1 {
  color: #f8bbd0 !important;
}

.border-pink-lighten-3 {
  border-color: #f48fb1 !important;
}
</style>