import {
  faShirt,
  faGem,
  faLaptop,
  faSocks,
} from "@fortawesome/free-solid-svg-icons";

export const products = [
  // Fashion
  {
    id: 1,
    title: "Classic Leather Jacket",
    description:
      "A timeless piece, perfect for any season. Made from premium leather.",
    price: 99.0,
    category: "Fashion",
    rating: 3.5,
    images: [
      "./images/products-imgs/fashion/jacket1.webp",
      "./images/products-imgs/fashion/jacket2.webp",
      "./images/products-imgs/fashion/jacket3.webp",
    ],
  },
  {
    id: 2,
    title: "Designer Handbag",
    description: "Elegant designer handbag, perfect for any occasion.",
    price: 69.0,
    category: "Fashion",
    rating: 3.5,
    images: [
      "./images/products-imgs/fashion/bag1.jpg",
      "./images/products-imgs/fashion/bag2.jpg",
      "./images/products-imgs/fashion/bag3.jpg",
    ],
  },
  {
    id: 3,
    title: "Luxury Watch",
    description: "A luxury watch with a classic design.",
    price: 999.0,
    category: "Fashion",
    rating: 5,
    images: [
      "./images/products-imgs/fashion/watch1.jpg",
      "./images/products-imgs/fashion/watch2.jpg",
      "./images/products-imgs/fashion/watch3.jpg",
    ],
  },
  {
    id: 4,
    title: "Leather Boots",
    description: "Durable leather boots for all occasions.",
    price: 99.0,
    category: "Fashion",
    rating: 2.5,
    images: [
      "./images/products-imgs/fashion/boot1.jpg",
      "./images/products-imgs/fashion/boot2.jpg",
      "./images/products-imgs/fashion/boot3.jpg",
    ],
  },
  {
    id: 5,
    title: "Silk Scarf",
    description: "Elegant silk scarf with a beautiful pattern.",
    price: 80.0,
    category: "Fashion",
    rating: 4,
    images: [
      "./images/products-imgs/fashion/scarf1.jpg",
      "./images/products-imgs/fashion/scarf2.jpg",
      "./images/products-imgs/fashion/scarf3.jpg",
    ],
  },

  // Jewelry
  {
    id: 6,
    title: "Gold Necklace",
    description: "Elegant gold necklace with a timeless design.",
    price: 499.0,
    category: "Jewelry",
    rating: 4.5,
    images: [
      "./images/products-imgs/jewlery/gold-necklace1.jpg",
      "./images/products-imgs/jewlery/gold-necklace2.jpg",
      "./images/products-imgs/jewlery/gold-necklace3.jpg",
    ],
  },
  {
    id: 7,
    title: "Diamond Ring",
    description: "Stunning diamond ring with a brilliant cut.",
    price: 390.0,
    category: "Jewelry",
    rating: 2.5,
    images: [
      "./images/products-imgs/jewlery/diamond-ring1.jpg",
      "./images/products-imgs/jewlery/diamond-ring2.jpg",
      "./images/products-imgs/jewlery/diamond-ring3.jpg",
    ],
  },
  {
    id: 8,
    title: "Silver Bracelet",
    description: "Stylish silver bracelet with intricate design.",
    price: 161.0,
    category: "Jewelry",
    rating: 3.5,
    images: [
      "./images/products-imgs/jewlery/bracelet1.jpg",
      "./images/products-imgs/jewlery/bracelet2.jpg",
      "./images/products-imgs/jewlery/bracelet3.jpg",
    ],
  },
  {
    id: 9,
    title: "Pearl Earrings",
    description: "Elegant pearl earrings with a classic look.",
    price: 80.0,
    category: "Jewelry",
    rating: 1.5,
    images: [
      "./images/products-imgs/jewlery/earrings1.jpg",
      "./images/products-imgs/jewlery/earrings2.jpg",
      "./images/products-imgs/jewlery/earrings3.jpg",
    ],
  },
  {
    id: 10,
    title: "Platinum Watch",
    description: "Luxury platinum watch with a sleek design.",
    price: 666.0,
    category: "Jewelry",
    rating: 3,
    images: [
      "./images/products-imgs/jewlery/paltinum-watch1.jpg",
      "./images/products-imgs/jewlery/paltinum-watch2.jpg",
      "./images/products-imgs/jewlery/paltinum-watch3.jpg",
    ],
  },

  // Clothes
  {
    id: 11,
    title: "Summer Beach Dress",
    description: "Lightweight and airy, perfect for summer beach outings.",
    price: 45.99,
    category: "Clothes",
    rating: 4,
    images: [
      "./images/products-imgs/clothes/dress1.jpg",
      "./images/products-imgs/clothes/dress2.jpg",
      "./images/products-imgs/clothes/dress3.jpg",
    ],
  },
  {
    id: 12,
    title: "Men's Business Suit",
    description: "A sharp, tailored suit for business professionals.",
    price: 250.0,
    category: "Clothes",
    rating: 5,
    images: [
      "./images/products-imgs/clothes/suit1.jpg",
      "./images/products-imgs/clothes/suit2.jpg",
      "./images/products-imgs/clothes/suit3.jpg",
    ],
  },
  {
    id: 13,
    title: "Winter Coat",
    description: "Warm and stylish coat for the winter season.",
    price: 110.0,
    category: "Clothes",
    rating: 3.5,
    images: [
      "./images/products-imgs/clothes/coat1.jpg",
      "./images/products-imgs/clothes/coat2.jpg",
      "./images/products-imgs/clothes/coat3.jpg",
    ],
  },
  {
    id: 14,
    title: "Casual T-Shirt",
    description: "Comfortable t-shirt made from organic cotton.",
    price: 20.0,
    category: "Clothes",
    rating: 3.5,
    images: [
      "./images/products-imgs/clothes/shirt1.jpg",
      "./images/products-imgs/clothes/shirt2.jpg",
      "./images/products-imgs/clothes/shirt3.jpg",
    ],
  },
  {
    id: 15,
    title: "Jeans",
    description: "Classic denim jeans with a modern fit.",
    price: 60.0,
    category: "Clothes",
    rating: 0.5,
    images: [
      "./images/products-imgs/clothes/jeans1.jpg",
      "./images/products-imgs/clothes/jeans2.jpg",
      "./images/products-imgs/clothes/jeans3.jpg",
    ],
  },

  // Electronics
  {
    id: 16,
    title: "Gaming Laptop",
    description:
      "High-performance laptop with the latest graphics card for gaming.",
    price: 1300.0,
    category: "Electronics",
    rating: 2.5,
    images: [
      "./images/products-imgs/electronics/game-laptop1.jpg",
      "./images/products-imgs/electronics/game-laptop2.jpg",
      "./images/products-imgs/electronics/game-laptop3.jpg",
    ],
  },
  {
    id: 17,
    title: "Smartphone",
    description: "Latest model smartphone with all the newest features.",
    price: 121.99,
    category: "Electronics",
    rating: 2.5,
    images: [
      "./images/products-imgs/electronics/smartphone1.jpg",
      "./images/products-imgs/electronics/smartphone2.jpg",
      "./images/products-imgs/electronics/smartphone3.jpg",
    ],
  },
  {
    id: 18,
    title: "Smart Home Speaker",
    description: "Voice-controlled speaker with high-quality sound.",
    price: 29.99,
    category: "Electronics",
    rating: 1.5,
    images: [
      "./images/products-imgs/electronics/speaker1.jpg",
      "./images/products-imgs/electronics/speaker2.jpg",
      "./images/products-imgs/electronics/speaker3.jpg",
    ],
  },
  {
    id: 19,
    title: "4K Television",
    description: "Ultra HD 4K television with vibrant colors and deep blacks.",
    price: 1199.0,
    category: "Electronics",
    rating: 3.5,
    images: [
      "./images/products-imgs/electronics/4k-tv1.jpg",
      "./images/products-imgs/electronics/4k-tv2.jpg",
      "./images/products-imgs/electronics/4k-tv3.jpg",
    ],
  },
  {
    id: 20,
    title: "Bluetooth Headphones",
    description: "Wireless headphones with excellent sound quality.",
    price: 50.0,
    category: "Electronics",
    rating: 0,
    images: [
      "./images/products-imgs/electronics/bluetooth-head1.jpg",
      "./images/products-imgs/electronics/bluetooth-head2.jpg",
      "./images/products-imgs/electronics/bluetooth-head3.jpg",
    ],
  },
];

export const categories = [
  "All Categories",
  "Fashion",
  "Jewelry",
  "Clothes",
  "Electronics",
];

export const categoriesWithIcons = [
  { title: "Fashion", ic: faShirt },
  { title: "Jewelry", ic: faGem },
  { title: "Clothes", ic: faSocks },
  { title: "Electronics", ic: faLaptop },
];

export const countries = [
  { value: "", label: "Select your country", disabled: true, selected: true },

  { value: "ca", label: "Canada" },
  { value: "cn", label: "China" },

  { value: "de", label: "Germany" },

  { value: "it", label: "Italy" },

  { value: "uk", label: "United Kingdom" },
  
  { value: "us", label: "United States" },
];
