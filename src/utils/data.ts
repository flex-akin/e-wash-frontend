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

  { id: 3, price: 500, type: "Shirt (Coloured)" },  
  { id: 3, price: 650, type: "Shirt (White)" },  
  { id: 3, price: 450, type: "Trouser (Coloured)" },  
  { id: 3, price: 550, type: "Trouser (White)" },  
  { id: 4, price: 450, type: "Skirt (Coloured)" },
  { id: 4, price: 550, type: "Skirt (White)" },
  { id: 6, price: 400, type: "Inner Top (Coloured)" },
  { id: 6, price: 500, type: "Inner Top (White)" },
  { id: 7, price: 450, type: "T-Shirt (Coloured)" },
  { id: 7, price: 550, type: "T-Shirt (White)" },
  { id: 8, price: 1000, type: "Native (Coloured)" },
  { id: 8, price: 1200, type: "Native (White)" },
  { id: 8, price: 800, type: "jacket (Suit) (Coloured)" },
  { id: 8, price: 1000, type: "jacket (Suit) (White)" },
  { id: 8, price: 500, type: "Towel (Coloured)" },
  { id: 8, price: 650, type: "Towel (White)" },
  { id: 8, price: 500, type: "Agbada Top (Coloured)" },
  { id: 8, price: 700, type: "Agbada Top (White)" },
  { id: 5, price: 1200, type: "Duvet (Coloured)" },
  { id: 5, price: 1500, type: "Duvet (White)" },
  { id: 8, price: 500, type: "Jalamia (Coloured)" },
  { id: 8, price: 650, type: "Jalamia (White)" },
  { id: 8, price: 600, type: "Bed Spread (Coloured)" },
  { id: 8, price: 750, type: "Bed Spread (White)"  },
  { id: 8, price: 1000, type: "Shoe (Coloured)" },
  { id: 8, price: 1500, type: "Shoes (White)" },
  { id: 8, price: 1500, type: "Agbada (3pcs) (Coloured)" },
  { id: 8, price: 1700, type: "Agbada (3pcs) (White)" },
  { id: 8, price: 500, type: "Gown (Coloured)" },
  { id: 8, price: 650, type: "Gown (White)" },
  { id: 8, price: 450, type: "Blouse (Coloured)" },
  { id: 8, price: 550, type: "Blouse  (White)" },
  { id: 8, price: 1200, type: "Suit (Coloured)" },
  { id: 8, price: 1000, type: "Suit (White)" },
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
