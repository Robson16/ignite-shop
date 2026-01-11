export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  quantity?: number
  description: string | null
  defaultPriceId: string
}

export const CartActionsType = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  HYDRATE_CART: 'HYDRATE_CART',
  CLEAR_CART: 'CLEAR_CART',
} as const

interface AddToCart {
  type: typeof CartActionsType.ADD_TO_CART
  payload: {
    product: Product
  }
}

interface RemoveFromCart {
  type: typeof CartActionsType.REMOVE_FROM_CART
  payload: {
    productId: string
  }
}

interface HydrateCart {
  type: typeof CartActionsType.HYDRATE_CART
  payload: {
    cartItems: Product[]
  }
}

interface ClearCart {
  type: typeof CartActionsType.CLEAR_CART
}

export type CartActions = AddToCart | RemoveFromCart | HydrateCart | ClearCart
