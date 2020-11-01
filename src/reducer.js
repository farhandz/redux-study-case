import { DECREASE, INCREASE, CLEAR_CART, REMOVE, TOTAL } from "./acion";
function reducer(state, action) {
  if(action.type ===  CLEAR_CART) {
    return {...state, cart: [], amount: 0}
  } 
  if (action.type === REMOVE) {
   return {...state,
     cart: state.cart.filter(item => item.id !== action.id)
    }
  }

  if(action.type === INCREASE) {
    let asu = state.cart.map(dt => {
      if(dt.id === action.id) {
        dt = {...dt, amount: dt.amount + 1}
      }
      return dt
    })
    return {...state, cart: asu}

  }

  if(action.type === DECREASE) {
    let data = []
    if(action.amount === 1) {
      data = state.cart.filter(dt => dt.id !== action.id)
    } else {
      data = state.cart.map(dt => {
        if(dt.id === action.id) {
          dt = {...dt, amount: dt.amount - 1}
        }
        return dt
      })
    }
     return {...state, cart: data}
  }
  if (action.type === TOTAL) {
     let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
       const {price, amount} = cartItem
       const itemtotal = price * amount
       cartTotal.total += itemtotal
       cartTotal.amount += amount
     return cartTotal
     }, {
       total: 0,
       amount: 0
     })
     total = parseFloat(total.toFixed(2))
     return {...state, total, amount}
  }
  return state;
}
export default reducer
