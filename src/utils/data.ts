import { Item, TService, NavType } from "./models";

export const serviceData: TService[] = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/ddaoml7e8/image/upload/v1699199784/yf4bhzcoteok8fgi61sd.webp",
    title: "Laundry",
    description:
      "We use state-of-the-art front loading washing machines and premium detergents for wash fold and laundry services to give your clothes that special care it needs.",
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/ddaoml7e8/image/upload/v1699199748/zo7xmpcd2bb8p0oez45y.webp",
    title: "Step Press",
    description:
      "We use state-of-the-art front loading washing machines and premium detergents for wash fold and laundry services to give your clothes that special care it needs.",
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/ddaoml7e8/image/upload/v1699199696/vlmuqekzedlerixf1esg.webp",
    title: "Dry Cleaning",
    description:
      "We use state-of-the-art front loading washing machines and premium detergents for wash fold and laundry services to give your clothes that special care it needs.",
  },
];

export const clothingItems: Item[] = [

  { id: 1, price: 500, type: "Shirt (Coloured)" },  
  { id: 2, price: 650, type: "Shirt (White)" },  
  { id: 3, price: 450, type: "Trouser (Coloured)" },  
  { id: 4, price: 550, type: "Trouser (White)" },  
  { id: 5, price: 450, type: "Skirt (Coloured)" },
  { id: 6, price: 550, type: "Skirt (White)" },
  { id: 7, price: 400, type: "Inner Top (Coloured)" },
  { id: 8, price: 500, type: "Inner Top (White)" },
  { id: 9, price: 450, type: "T-Shirt (Coloured)" },
  { id: 10, price: 550, type: "T-Shirt (White)" },
  { id: 11, price: 1000, type: "Native (Coloured)" },
  { id: 12, price: 1200, type: "Native (White)" },
  { id: 13, price: 800, type: "jacket (Suit) (Coloured)" },
  { id: 14, price: 1000, type: "jacket (Suit) (White)" },
  { id: 15, price: 500, type: "Towel (Coloured)" },
  { id: 16, price: 650, type: "Towel (White)" },
  { id: 17, price: 500, type: "Agbada Top (Coloured)" },
  { id: 18, price: 700, type: "Agbada Top (White)" },
  { id: 19, price: 1200, type: "Duvet (Coloured)" },
  { id: 20, price: 1500, type: "Duvet (White)" },
  { id: 21, price: 500, type: "Jalamia (Coloured)" },
  { id: 21, price: 650, type: "Jalamia (White)" },
  { id: 22, price: 600, type: "Bed Spread (Coloured)" },
  { id: 23, price: 750, type: "Bed Spread (White)"  },
  { id: 24, price: 1000, type: "Shoe (Coloured)" },
  { id: 25, price: 1500, type: "Shoes (White)" },
  { id: 26, price: 1500, type: "Agbada (3pcs) (Coloured)" },
  { id: 27, price: 1700, type: "Agbada (3pcs) (White)" },
  { id: 28, price: 500, type: "Gown (Coloured)" },
  { id: 29, price: 650, type: "Gown (White)" },
  { id: 30, price: 450, type: "Blouse (Coloured)" },
  { id: 31, price: 550, type: "Blouse  (White)" },
  { id: 32, price: 1200, type: "Suit (Coloured)" },
  { id: 33, price: 1000, type: "Suit (White)" },
];

export const sideNavigation: NavType[] = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Orders",
    link: "/orders",
  },
  {
    id: 3,
    name: "Profile",
    link: "/profile",
  },
  {
    id: 4,
    name: "Pricing",
    link: "/pricing",
  },
  {
    id: 5,
    name: "Suscription",
    link: "/suscription",
  },
];
