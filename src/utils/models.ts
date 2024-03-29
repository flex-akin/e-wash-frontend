type TService = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

interface Item {
  id: number;
  price: number;
  type: string;
  image?: string;
}

export type { TService, Item };

export type singleCartState = {
  item: Item;
  quantity: number;
};

export type NavType = {
  id: number;
  link: string;
  name: string;
};

export type TOrderData = {
  clotheType : string;
  quantity : number;
  amount: string,
  isDelivered : boolean;
  isCompleted : boolean;
  orderCode : string;
  pickUpDate : string;
}
