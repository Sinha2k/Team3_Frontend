const productsList = [
  {
    id: 0,
    name: "BACKSÄLEN",
    price: 649.99,
    rating: 4,
    numOfReviews: 100,
    description: "Sofa, Katorp natural",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Full",
        subPrice: 0,
      },
      {
        name: "King",
        subPrice: 100.99,
      },
      {
        name: "Queen",
        subPrice: 200.99,
      },
    ],
    color: [
      {
        name: "White",
        image:
          "https://www.ikea.com/us/en/images/products/backsaelen-sofa-blekinge-white__0950634_pe800555_s5.jpg?f=xu",
      },
      {
        name: "Gray",
        image:
          "https://www.ikea.com/us/en/images/products/backsaelen-sofa-hallarp-gray__0950638_pe800559_s5.jpg?f=xu",
      },
      {
        name: "Natural",
        image:
          "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0950636_pe800560_s5.jpg?f=u",
      },
    ],
    material: [
      {
        name: "Da",
        subPrice: 50.99,
      },
      {
        name: "Vải",
        subPrice: 100.99,
      },
      {
        name: "Gỗ",
        subPrice: 200.99,
      },
    ],
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0950636_pe800560_s5.jpg?f=xxs",
  },
  {
    id: 1,
    name: "GLADOM",
    price: 24.99,
    rating: 4.5,
    numOfReviews: 100,
    description: "Tray table, black, 17 1/2x20 5/8",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/gladom-tray-table-black__0567223_pe664991_s5.jpg?f=xl",
  },
  {
    id: 2,
    name: "JAKOBSBYN",
    price: 32.99,
    rating: 4,
    numOfReviews: 100,
    description: "Pendant lamp shade, clear glass, 12",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/jakobsbyn-pendant-lamp-shade-clear-glass__0683771_pe720859_s5.jpg?f=xl",
  },
  {
    id: 3,
    name: "SKURUP",
    price: 57.99,
    rating: 5,
    numOfReviews: 100,
    description: "Floor/reading lamp with LED bulb, black",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/jakobsbyn-pendant-lamp-shade-clear-glass__0683771_pe720859_s5.jpg?f=xl",
  },
  {
    id: 4,
    name: "STORTIMJAN",
    price: 7.99,
    rating: 5,
    numOfReviews: 100,
    description: "Cushion cover, black/beige, 20x20",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/stortimjan-cushion-cover-black-beige__0980845_pe815121_s5.jpg?f=xl",
  },
  {
    id: 5,
    name: "TUVSÄV",
    price: 5.99,
    rating: 5,
    numOfReviews: 100,
    description: "Cushion cover, deep green/floral pattern, 20x20 ",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/tuvsaev-cushion-cover-deep-green-floral-pattern__1091599_pe862529_s5.jpg?f=xl",
  },
  {
    id: 6,
    name: "JÄMLIK",
    price: 6.99,
    rating: 5,
    numOfReviews: 100,
    description: "Scented candle in glass, Vanilla/light beige, 50 hr",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/jaemlik-scented-candle-in-glass-vanilla-light-beige__1060483_pe850037_s5.jpg?f=xl",
  },
  {
    id: 7,
    name: "FULLTALIG",
    price: 14.99,
    rating: 5,
    numOfReviews: 100,
    description: "Candlestick, set of 3, black",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/fulltalig-candlestick-set-of-3-black__0523288_pe643714_s5.jpg?f=xl",
  },
  {
    id: 8,
    name: "TOLKNING",
    price: 89.99,
    rating: 4,
    numOfReviews: 100,
    description: "Ottoman with storage, handmade rattan",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/tolkning-ottoman-with-storage-handmade-rattan__1098697_pe865490_s5.jpg?f=xl",
  },
  {
    id: 9,
    name: "KRAGSTA",
    price: 159.99,
    rating: 4.5,
    numOfReviews: 100,
    description: "Nesting tables, set of 2, black",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/kragsta-nesting-tables-set-of-2-black__0313789_pe517045_s5.jpg?f=xxs",
  },
  {
    id: 10,
    name: "EVALI",
    price: 12.99,
    rating: 4,
    numOfReviews: 100,
    description: "Throw, dark gray, 51x67",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/evali-throw-dark-gray__0963501_pe808544_s5.jpg?f=xxs",
  },
  {
    id: 11,
    name: "GUNNEMOR",
    price: 14.99,
    rating: 5,
    numOfReviews: 100,
    description: "Throw, off-white/gray-beige, 51x67 ",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/gunnemor-throw-off-white-gray-beige__1033633_pe837370_s5.jpg?f=xxs",
  },
  {
    id: 12,
    name: "VESTERVIG",
    price: 219.99,
    rating: 4.5,
    numOfReviews: 100,
    description: "Rug, flatwoven, handmade multicolor/diamond pattern,",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/vestervig-rug-flatwoven-handmade-multicolor-diamond-pattern__1014315_pe829609_s5.jpg?f=xxs",
  },
  {
    id: 13,
    name: "HOLMVI",
    price: 5.99,
    rating: 4.5,
    numOfReviews: 100,
    description: "Throw, light gray-green, 47x63",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/holmvi-throw-light-gray-green__1022852_pe832955_s5.jpg?f=xxs",
  },
  {
    id: 14,
    name: "DYTÅG",
    price: 12.99,
    rating: 5,
    numOfReviews: 100,
    description: "Cushion cover, dark beige, 20x20 ",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/dytag-cushion-cover-dark-beige__1052104_pe845935_s5.jpg?f=xxs",
  },
  {
    id: 15,
    name: "DYTÅG",
    price: 89.99,
    rating: 4.5,
    numOfReviews: 100,
    description: "Duvet cover and pillowcase(s), dark gray, Twin",
    gallery: [
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987372_pe817509_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987386_pe817514_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987383_pe817512_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__0987381_pe817511_s5.jpg?f=xxs",
      "https://www.ikea.com/us/en/images/products/backsaelen-sofa-katorp-natural__1012884_pe829043_s5.jpg?f=xxs",
    ],
    size: [
      {
        name: "Chiều rộng",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều dài",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều cao",
        value: { minimum: 0, maximum: 100 },
      },
      {
        name: "Chiều sâu",
        value: { minimum: 0, maximum: 100 },
      },
    ],
    color: "",
    material: "",
    category: "",
    stock: 100,
    attachment:
      "https://www.ikea.com/us/en/images/products/dytag-duvet-cover-and-pillowcase-s-dark-gray__1033230_pe837215_s5.jpg?f=xxs",
  },
];

export default productsList;
