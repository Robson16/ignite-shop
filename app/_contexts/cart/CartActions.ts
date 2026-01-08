import { CartActionsType, Product } from './CartTypes'

export function addToCartAction(product: Product) {
  return {
    type: CartActionsType.ADD_TO_CART,
    payload: {
      product,
    },
  }
}

export function removeFromCartAction(productId: string) {
  return {
    type: CartActionsType.REMOVE_FROM_CART,
    payload: {
      productId,
    },
  }
}

export function hydrateCartAction(cartItems: Product[]) {
  return {
    type: CartActionsType.HYDRATE_CART,
    payload: {
      cartItems,
    },
  }
}
