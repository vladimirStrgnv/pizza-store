export const promoCardsData = [
  {
    title: "Закажи 2 пиццы – 3-я в подарок",
    text: "При заказе 2-х больших пицц – средняя пицца в подарок",
    img: "",
  },
  {
    title: "Напиток в подарок",
    text: "Скидка на заказ от 3 000 рублей + напиток в подарок",
    img: "",
  },
  {
    title: "25% при первом заказе",
    text: "Скидка новым клиентам!",
    img: "",
  },
];

export const pizzaListData = [
  {
    title: "Итальянская",
    composition: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizes: [20, 30, 40],
    currentSize: {
      value: 30,
      type: "medium",
    },
    cost: 699,
    type: "spicy",
    imgIndex: 0
  },
  {
    title: "Маргарита",
    composition: "Тесто со шпинатом, молодой сыр и колбаски, много колбасок",
    sizes: [20, 30, 40],
    currentSize: {
      value: 40,
      type: "big",
    },
    cost: 479,
    type: "meat",
    imgIndex: 1

  },
  {
    title: "Барбекю",
    composition: "Циплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    sizes: [20, 30, 40],
    currentSize: {
      value: 30,
      type: "medium",
    },
    cost: 699,
    type: "meat",
    imgIndex: 2

  },
  {
    title: "Вегетарианская",
    composition: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizes: [20, 30, 40],
    currentSize: {
      value: 20,
      type: "small",
    },
    cost: 399,
    type: "vegetable",
    imgIndex: 3
  },
  {
    title: "Мясная",
    composition: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizes: [20, 30, 40],
    currentSize: {
      value: 30,
      type: "medium",
    },
    cost: 699,
    type: "spicy",
    imgIndex: 4
  },
  {
    title: "Овощная",
    composition: "Тесто со шпинатом, молодой сыр и колбаски, много колбасок",
    sizes: [20, 30, 40],
    currentSize: {
      value: 30,
      type: "medium",
    },
    cost: 479,
    type: "vegetable",
    imgIndex: 5
  },
  {
    title: "Римская",
    composition: "Циплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    sizes: [20, 30, 40],
    currentSize: {
      value: 30,
      type: "medium",
    },
    cost: 699,
    type: "spicy",
    imgIndex: 6
  },
  {
    title: "С грибами",
    composition: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizes: [20, 30, 40],
    currentSize: {
      value: 30,
      type: "medium",
    },
    cost: 399,
    type: "cheese",
    imgIndex: 7
  },
  {
    title: "Сырная",
    composition: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizes: [20, 30, 40],
    currentSize: {
      value: 30,
      type: "medium",
    },
    cost: 699,
    type: "cheese",
    imgIndex: 8
  },
  {
    title: "Четыре сыра",
    composition: "Тесто со шпинатом, молодой сыр и колбаски, много колбасок",
    sizes: [20, 30, 40],
    currentSize: {
      value: 30,
      type: "medium",
    },
    cost: 479,
    type: "cheese",
    imgIndex: 9
  },
  {
    title: "Пепперони Фреш с томатами",
    composition: "Циплёнок (маленький кура), оливки, моцарелла, соус барбекю",
    sizes: [20, 30, 40],
    currentSize: {
      value: 30,
      type: "medium",
    },
    cost: 699,
    type: "meat",
    imgIndex: 10
  },
  {
    title: "Ветчина и сыр",
    composition: "Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик",
    sizes: [20, 30, 40],
    currentSize: {
      value: 30,
      type: "medium",
    },
    cost: 399,
    type: "meat",
    imgIndex: 11
  },
];

export const filterTypesList = [
  {
    title: "все",
    img: "all",
  },
  {
    title: "Острые",
    img: "spicy",
  },
  {
    title: "Мясные",
    img: "meat",
  },
  {
    title: "Сырные",
    img: "cheese",
  },
  {
    title: "Веганские",
    img: "vegetable",
  },
];

export const deliveryStagesData = [
  {
    title: "Заказ",
    text: "После оформления заказа мы свяжемся с вами для уточнения деталей.",
  },
  {
    title: "Доставка курьером",
    text: "Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.",
  },
  {
    title: "Оплата",
    text: "Оплатить можно наличными или картой курьеру. И золотом тоже можно.",
  },
];

export const advantagesCardsData = [
  {
    title: "Изготавливаем пиццу по своим рецептам в лучших традициях",
    text: "Наша пицца получается сочной, вкусной и главное хрустящей с нежной и аппетитной начинкой, готовим по своим итальянским рецептам",
    isReverse: false,
  },
  {
    title: "Используем только свежие ингридиенты",
    text: "Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем все сроки хранения",
    isReverse: true,
  },
  {
    title: "Доставка в течение 60 минут или заказ за нас счёт",
    text: "Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally Championship и World Superbike во всех категориях",
    isReverse: false,
  },
];

export const galleryImagesData = [
  {
    imgIndex: 1,
  },
  {
    imgIndex: 2,
  },
  {
    imgIndex: 3,
  },
  {
    imgIndex: 4,
  },
  {
    imgIndex: 5,
  },
  {
    imgIndex: 6,
  },
  {
    imgIndex: 7,
  },
  {
    imgIndex: 8,
  },
  {
    imgIndex: 9,
  },
  {
    imgIndex: 10,
  },
];
