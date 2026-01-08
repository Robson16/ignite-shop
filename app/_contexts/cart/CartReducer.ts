import { produce } from 'immer'

import { CartActions, CartActionsType, Product } from './CartTypes'

interface CartState {
  cartItems: Product[]
}

export function cartReducer(state: CartState, action: CartActions) {
  switch (action.type) {
    case CartActionsType.ADD_TO_CART: {
      const { product } = action.payload
      const { id } = product

      return produce(state, (draft) => {
        const productIndex = draft.cartItems.findIndex(
          (product) => product.id === id,
        )

        if (productIndex < 0) {
          draft.cartItems.push(product)
        }
      })
    }

    case CartActionsType.REMOVE_FROM_CART: {
      const { productId } = action.payload

      return produce(state, (draft) => {
        const productToRemoveIndex = draft.cartItems.findIndex(
          (product) => product.id === productId,
        )

        if (productToRemoveIndex >= 0) {
          draft.cartItems.splice(productToRemoveIndex, 1)
        }
      })
    }

    case CartActionsType.HYDRATE_CART: {
      const { cartItems } = action.payload

      return produce(state, (draft) => {
        draft.cartItems = cartItems ?? []
      })
    }

    default:
      return state
  }
}
