import React from 'react'
import {connect} from 'react-redux'
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, TOTAL } from "../acion";

const Listitem = ({cart = [], total, dispatch}) => {
    React.useEffect(() => {
       dispatch({type: TOTAL})
    }, [cart, dispatch])

    if(cart.length === 0) {
        return (
            <div className="kosong">
                <h1>cart anda kosong.....</h1>
            </div>
        )
    }
    return (
      <div className="list-item">
        <div className="title">
          <h5>your bag</h5>
        </div>
        {cart.map((dt) => {
          return (
            <div key={dt.id} className="list-produk">
              <img width="80px" src={dt.img} alt="" />
              <div className="information-produk">
                <p>{dt.title}</p>
                <p>{dt.price}</p>
                <p onClick={() => dispatch({ type: REMOVE, id: dt.id })}>
                  Remove
                </p>
              </div>
              <div className="totaL">
                <button
                  onClick={() =>
                    dispatch({ type: INCREASE, id: dt.id, amount: dt.amount })
                  }
                >
                  +
                </button>
                <span>{dt.amount}</span>
                <button onClick={() => dispatch({ type: DECREASE, id: dt.id, amount: dt.amount})}>-</button>
              </div>
            </div>
          );
        })}
        <div className="istotal">
          <h5>total:</h5>
          <span>{total}</span>
        </div>
        <div className="clearcartbtn">
          <button onClick={() => dispatch({ type: CLEAR_CART })}>
            clear cart
          </button>
        </div>
      </div>
    );
}

const mapStateToProps = (store) => {
    console.log(store)
    return {cart: store.cart, total: store.total}
}

export default connect(mapStateToProps)(Listitem)