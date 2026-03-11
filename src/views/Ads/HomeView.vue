<template>
  <div>
    <!-- Карусель с нежными цветами -->
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="12">
          <v-carousel
            cycle
            height="400"
            show-arrows="hover"
            hide-delimiter-background
            delimiter-icon="mdi-flower"
          >
            <v-carousel-item
              v-for="(bouquet, i) in promoBouquets"
              :key="i"
              :src="bouquet.src"
              cover
            >
              <div class="carousel-overlay">
                <h2 class="text-h3 text-white font-weight-light">{{ bouquet.title }}</h2>
                <p class="text-h6 text-white mt-3">{{ bouquet.desc }}</p>
                <v-btn
                  class="mt-5"
                  color="pink-lighten-4"
                  variant="flat"
                  size="large"
                  :to="'/ad/' + bouquet.id"
                >
                  Смотреть букет
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <!-- Заголовок раздела -->
    <v-container class="mt-8">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h3 font-weight-light pink--text">Наши нежные букеты</h2>
          <v-divider class="my-4" color="pink-lighten-3" thickness="2"></v-divider>
          <p class="text-subtitle-1 text-medium-emphasis">Каждый букет создан с любовью специально для вас</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Сетка с букетами (в розовом стиле) -->
    <v-container class="mt-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="bouquet in bouquets"
          :key="bouquet.id"
        >
          <v-card
            class="mx-auto rounded-xl"
            max-width="400"
            elevation="4"
            hover
          >
            <v-img
              :src="bouquet.src"
              height="250px"
              cover
              class="rounded-t-xl"
            >
              <v-chip
                v-if="bouquet.promo"
                class="ma-3"
                color="pink-lighten-3"
                text-color="white"
                size="small"
              >
                Хит
              </v-chip>
            </v-img>

            <v-card-title class="text-h6 font-weight-medium pink--text">
              {{ bouquet.title }}
            </v-card-title>

            <v-card-text class="pt-0">
              <div class="text-body-2 mb-2">{{ bouquet.desc }}</div>
              <div class="text-h6 font-weight-bold text-pink-darken-2">
                {{ bouquet.price }} ₽
              </div>
            </v-card-text>

            <v-card-actions class="px-4 pb-4">
              <v-btn
                block
                variant="outlined"
                color="pink-lighten-2"
                :to="'/ad/' + bouquet.id"
              >
                Подробнее
              </v-btn>
              <v-btn
                block
                class="ml-2"
                color="pink-lighten-3"
                variant="flat"
              >
                В корзину
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import flower1 from '@/assets/flower1.jpg'
import flower2 from '@/assets/flower2.jpg'
import flower3 from '@/assets/flower3.jpg'
import flower4 from '@/assets/flower4.jpg'
import flower5 from '@/assets/flower5.jpg'
import flower6 from '@/assets/flower6.jpg'

export default {
  name: 'HomeView',
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
  },
  computed: {
    promoBouquets() {
      return this.bouquets.filter(b => b.promo === true)
    }
  }
}
</script>

<style scoped>
.carousel-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  color: white;
  padding: 40px 30px;
  text-align: center;
}

.pink--text {
  color: #f8bbd0 !important;
}

.text-pink-darken-2 {
  color: #d81b60 !important;
}

.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateY(-8px);
}
</style>