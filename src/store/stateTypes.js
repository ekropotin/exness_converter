// @flow

export type Product = {
    id: number,
    title: string,
    price: number
};

export type ShoppingCartItem = {
    id: number,
    title: string,
    price: number,
    qty: number
};

export type NotificationState = {
  +info: string,
  +error: string
};

export type ShoppingCartState = {
  +itemsList: Array<ShoppingCartItem>,
  +sortKey: string,
    +sortAscending: boolean
};

export type State = {
  +pending: boolean,
  +notification: NotificationState,
  +avaliableItemsList: Array<Product>,
  +shoppingCart: ShoppingCartState
}
