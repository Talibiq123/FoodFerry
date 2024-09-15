import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {

  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id > 0]) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="item_image" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
        <div class="cart-bottom">
          <div class="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div class="cart-total-details">
                <p>Subtotal</p>
                <p>{0}</p>
              </div>
              <hr />
              <div class="cart-total-details">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr />
              <div class="cart-total-details">
                <b>Total</b>
                <b>{0}</b>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div class="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div class="cart-promo-code">
                <input type="text" placeholder="promo-code" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Cart;
