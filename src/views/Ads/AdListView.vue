<template>
  <v-container>
    <!-- Заголовок -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h3 font-weight-light text-pink-darken-2">Мои букеты</h1>
        <v-divider class="my-4" color="pink-lighten-3" thickness="2"></v-divider>
        <p class="text-subtitle-1 text-medium-emphasis">Все созданные вами букеты</p>
      </v-col>
    </v-row>

    <!-- Кнопка добавить новый -->
    <v-row class="mb-6">
      <v-col cols="12" class="text-right">
        <v-btn
          color="pink-darken-1"
          prepend-icon="mdi-plus"
          to="/new"
          class="text-white"
        >
          Добавить новый букет
        </v-btn>
      </v-col>
    </v-row>

    <!-- Список букетов -->
    <v-row>
      <v-col
        cols="12"
        v-for="bouquet in bouquets"
        :key="bouquet.id"
      >
        <v-card class="rounded-xl elevation-2 hover mb-4">
          <v-row no-gutters>
            <!-- Картинка слева -->
            <v-col cols="12" md="4">
              <v-img
                :src="bouquet.src"
                height="200px"
                cover
                class="rounded-t-xl rounded-md-l-0"
              ></v-img>
            </v-col>
            
            <!-- Информация справа -->
            <v-col cols="12" md="8">
              <v-card-text class="pa-4">
                <div class="d-flex align-center mb-2">
                  <h2 class="text-h5 font-weight-medium text-pink-darken-2">
                    {{ bouquet.title }}
                  </h2>
                  <v-chip
                    v-if="bouquet.promo"
                    class="ml-3"
                    color="pink-lighten-3"
                    size="small"
                  >
                    Хит
                  </v-chip>
                </div>
                
                <p class="text-body-1 mb-3">{{ bouquet.desc }}</p>
                
                <div class="text-h6 font-weight-bold text-pink-darken-2 mb-3">
                  {{ bouquet.price }} ₽
                </div>
                
                <v-divider class="my-3" color="pink-lighten-4"></v-divider>
                
                <!-- Кнопки действий -->
                <div class="d-flex justify-end ga-2">
                  <v-btn
                    variant="outlined"
                    color="pink-lighten-2"
                    :to="'/ad/' + bouquet.id"
                    size="small"
                  >
                    <v-icon start>mdi-eye</v-icon>
                    Просмотр
                  </v-btn>
                  <v-btn
                    color="pink-lighten-3"
                    variant="flat"
                    size="small"
                  >
                    <v-icon start>mdi-pencil</v-icon>
                    Редактировать
                  </v-btn>
                  <v-btn
                    color="grey-lighten-1"
                    variant="flat"
                    size="small"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      
      <!-- Если букетов нет -->
      <v-col cols="12" v-if="bouquets.length === 0">
        <v-card class="text-center pa-10 rounded-xl" elevation="2">
          <v-icon size="64" color="pink-lighten-3">mdi-flower-outline</v-icon>
          <h3 class="text-h5 mt-4 text-grey-darken-1">У вас пока нет букетов</h3>
          <p class="text-body-1 text-grey mt-2">Создайте свой первый букет!</p>
          <v-btn
            class="mt-4"
            color="pink-darken-1"
            to="/new"
          >
            Добавить букет
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import flower1 from '@/assets/flower1.jpg'
import flower2 from '@/assets/flower2.jpg'
import flower3 from '@/assets/flower3.jpg'
import flower4 from '@/assets/flower4.jpg'
import flower5 from '@/assets/flower5.jpg'
import flower6 from '@/assets/flower6.jpg'

export default {
  name: 'AdListView',
  data() {
    return {
      bouquets: [
        {
          title: "Нежность роз",
          desc: "11 роз кустовых нежно-розового оттенка",
          price: 3500,
          src: flower1,
          id: "1",
          promo: true
        },
        {
          title: "Весенний сон",
          desc: "Тюльпаны, гиацинты и веточка сирени",
          price: 2800,
          src: flower2,
          id: "2",
          promo: true
        },
        {
          title: "Пионовая фея",
          desc: "Букет из пионовидных роз и эвкалипта",
          price: 4200,
          src: flower3,
          id: "3",
          promo: true
        },
        {
          title: "Лавандовый рай",
          desc: "Лаванда, статица и сухоцветы",
          price: 3100,
          src: flower4,
          id: "4",
          promo: false
        },
        {
          title: "Розовое облако",
          desc: "Альстромерии и хризантемы",
          price: 2900,
          src: flower5,
          id: "5",
          promo: false
        },
        {
          title: "Невеста",
          desc: "Белые розы с жемчужной россыпью",
          price: 4800,
          src: flower6,
          id: "6",
          promo: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.text-pink-darken-2 {
  color: #d81b60 !important;
}

.rounded-md-l-0 {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

@media (max-width: 960px) {
  .rounded-md-l-0 {
    border-top-left-radius: 12px !important;
    border-top-right-radius: 12px !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
}

.hover {
  transition: transform 0.2s;
}

.hover:hover {
  transform: translateY(-4px);
}
</style>