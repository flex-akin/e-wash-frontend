import { Item, TService, NavType } from "./models";

export const serviceData: TService[] = [
  { id : 1,
    icon: "https://res.cloudinary.com/ddaoml7e8/image/upload/v1699199784/yf4bhzcoteok8fgi61sd.webp",
    title: "Laundry",
    description:
      "We use state-of-the-art front loading washing machines and premium detergents for wash fold and laundry services to give your clothes that special care it needs.",
  },
  { id : 2,
    icon: "https://res.cloudinary.com/ddaoml7e8/image/upload/v1699199748/zo7xmpcd2bb8p0oez45y.webp",
    title: "Step Press",
    description:
      "We use state-of-the-art front loading washing machines and premium detergents for wash fold and laundry services to give your clothes that special care it needs.",
  },
  {id : 3,
    icon: "https://res.cloudinary.com/ddaoml7e8/image/upload/v1699199696/vlmuqekzedlerixf1esg.webp",
    title: "Dry Cleaning",
    description:
      "We use state-of-the-art front loading washing machines and premium detergents for wash fold and laundry services to give your clothes that special care it needs.",
  },
  
];


export const clothingItems : Item[] =[
  {id : 1,
    price: 3000,
    type: "Native",
  },
  {id : 2,
    price: 3500,
    type: "Other Native",
  },
  {id : 3,
    price: 2000,
    type: "Shirt",
  },
  {id : 4,
    price: 1500,
    type: "Trouser",
  },
  {id : 5,
    price: 3500,
    type: "Bed Spread",
  },
  {id : 6,
    price: 3500,
    type: "Jacket",
  },
  {id : 7,
    price: 2500,
    type: "Bags",
  },
  
]

export const sideNavigation : NavType[] = [
  {
    id : 1,
    name : "Dashboard",
    link : "/dashboard"
  },
  {
    id : 2,
    name : "Orders",
    link : "/orders"
  },
  {
    id : 3,
    name : "Profile",
    link : "/profile"
  },
  {
    id : 4,
    name : "Pricing",
    link : "/pricing"
  },
  {
    id : 5,
    name : "Suscription",
    link : "/suscription"
  }
]