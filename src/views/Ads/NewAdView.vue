<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <!-- Заголовок -->
        <div class="text-center mb-6">
          <h1 class="text-h3 font-weight-light text-pink-darken-2">Добавить новый букет</h1>
          <v-divider class="my-4" color="pink-lighten-3" thickness="2"></v-divider>
          <p class="text-subtitle-1 text-medium-emphasis">Расскажите о вашем новом творении</p>
        </div>

        <!-- Форма -->
        <v-card class="pa-6 rounded-xl" elevation="4">
          <v-form v-model="valid" ref="form" lazy-validation>
            <!-- Название букета -->
            <v-text-field
              v-model="title"
              :rules="titleRules"
              label="Название букета"
              placeholder="Например: Нежность роз"
              prepend-inner-icon="mdi-flower"
              variant="outlined"
              color="pink-lighten-2"
              class="mb-4"
              required
            ></v-text-field>

            <!-- Описание -->
            <v-textarea
              v-model="description"
              :rules="descriptionRules"
              label="Описание букета"
              placeholder="Из каких цветов состоит, особенности, повод..."
              prepend-inner-icon="mdi-text"
              variant="outlined"
              color="pink-lighten-2"
              class="mb-4"
              rows="4"
              required
            ></v-textarea>

            <!-- Цена -->
            <v-text-field
              v-model="price"
              :rules="priceRules"
              label="Цена"
              placeholder="3500"
              prepend-inner-icon="mdi-currency-rub"
              variant="outlined"
              color="pink-lighten-2"
              type="number"
              class="mb-4"
              required
            ></v-text-field>

            <!-- Загрузка фото (пока заглушка) -->
            <v-row class="mb-4">
              <v-col cols="12">
                <v-btn
                  block
                  color="pink-lighten-3"
                  variant="outlined"
                  height="56"
                  prepend-icon="mdi-camera"
                >
                  Загрузить фото букета
                </v-btn>
                <p class="text-caption text-grey mt-1">* пока используется тестовое фото</p>
              </v-col>
            </v-row>

            <!-- Превью фото (тестовое) -->
            <v-row class="mb-4" v-if="imagePreview">
              <v-col cols="12">
                <v-img
                  :src="imagePreview"
                  height="200px"
                  cover
                  class="rounded-lg"
                ></v-img>
              </v-col>
            </v-row>

            <!-- Переключатель "Хит продаж" -->
            <v-row class="mb-4">
              <v-col cols="12">
                <v-switch
                  v-model="promo"
                  label="Сделать хитом продаж (показывать в карусели)"
                  color="pink-darken-1"
                  inset
                ></v-switch>
              </v-col>
            </v-row>

            <!-- Кнопка создания -->
            <v-row>
              <v-col cols="12">
                <v-btn
                  block
                  color="pink-darken-1"
                  size="large"
                  height="56"
                  @click="createBouquet"
                  :disabled="!valid"
                  class="text-white"
                >
                  <v-icon start>mdi-check</v-icon>
                  Добавить букет
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NewAdView',
  data() {
    return {
      valid: false,
      title: '',
      description: '',
      price: '',
      promo: false,
      imagePreview: 'https://cdn.vuetifyjs.com/images/cards/cooking.png', // тестовое фото
      
      // Правила валидации
      titleRules: [
        v => !!v || 'Название обязательно',
        v => (v && v.length >= 3) || 'Название должно быть не короче 3 символов'
      ],
      descriptionRules: [
        v => !!v || 'Описание обязательно',
        v => (v && v.length >= 10) || 'Описание должно быть не короче 10 символов'
      ],
      priceRules: [
        v => !!v || 'Цена обязательна',
        v => (!isNaN(parseFloat(v)) && v >= 0) || 'Введите корректную цену'
      ]
    }
  },
  methods: {
    createBouquet() {
      if (this.$refs.form.validate()) {
        // Здесь потом будет отправка в хранилище
        const newBouquet = {
          title: this.title,
          desc: this.description,
          price: this.price,
          promo: this.promo,
          src: this.imagePreview,
          id: Date.now().toString() // временный id
        }
        
        console.log('Новый букет:', newBouquet)
        
        // Пока просто покажем сообщение
        alert('Букет создан! (проверь консоль)')
        
        // Очистим форму
        this.title = ''
        this.description = ''
        this.price = ''
        this.promo = false
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style scoped>
.text-pink-darken-2 {
  color: #d81b60 !important;
}

.v-btn--color-pink-darken-1 {
  background-color: #c2185b !important;
}
</style>