import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

export interface Product {
  id: string;
  nameKz: string;
  nameRu: string;
  price: number;
  descriptionKz: string;
  descriptionRu: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    nameKz: 'Қара пальто',
    nameRu: 'Чёрное пальто',
    price: 89900,
    descriptionKz: 'Классикалық қара пальто. Жоғары сапалы мата, заманауи пішім. Күзгі-қысқы маусымға тамаша таңдау.',
    descriptionRu: 'Классическое чёрное пальто. Высококачественная ткань, современный крой. Отличный выбор для осенне-зимнего сезона.',
    image: product1,
    category: 'women',
  },
  {
    id: '2',
    nameKz: 'Ақ жібек блузка',
    nameRu: 'Белая шёлковая блузка',
    price: 34900,
    descriptionKz: 'Нәзік жібек блузка. Жеңіл және ыңғайлы, кез келген стильге сай келеді.',
    descriptionRu: 'Нежная шёлковая блузка. Лёгкая и удобная, подходит к любому стилю.',
    image: product2,
    category: 'women',
  },
  {
    id: '3',
    nameKz: 'Классикалық шалбар',
    nameRu: 'Классические брюки',
    price: 29900,
    descriptionKz: 'Ерлерге арналған классикалық қара шалбар. Кеңсеге және іскерлік кездесулерге тамаша.',
    descriptionRu: 'Классические чёрные брюки для мужчин. Идеальны для офиса и деловых встреч.',
    image: product3,
    category: 'men',
  },
  {
    id: '4',
    nameKz: 'Кашемир свитер',
    nameRu: 'Кашемировый свитер',
    price: 45900,
    descriptionKz: 'Жұмсақ кашемир свитер. Жылы және сәнді, күнделікті киімге тамаша.',
    descriptionRu: 'Мягкий кашемировый свитер. Тёплый и стильный, идеален для повседневной носки.',
    image: product4,
    category: 'new',
  },
  {
    id: '5',
    nameKz: 'Былғары күрте',
    nameRu: 'Кожаная куртка',
    price: 119900,
    descriptionKz: 'Стильді былғары күрте. Премиум сапа, мінсіз пішім. Кез келген бейнеге сәнді қосымша.',
    descriptionRu: 'Стильная кожаная куртка. Премиальное качество, безупречный крой. Стильное дополнение к любому образу.',
    image: product5,
    category: 'bestseller',
  },
  {
    id: '6',
    nameKz: 'Қара миди көйлек',
    nameRu: 'Чёрное миди-платье',
    price: 54900,
    descriptionKz: 'Талғампаз қара миди көйлек. Ерекше оқиғаларға және күнделікті өмірге тамаша.',
    descriptionRu: 'Элегантное чёрное миди-платье. Идеально для особых случаев и повседневной жизни.',
    image: product6,
    category: 'bestseller',
  },
];
