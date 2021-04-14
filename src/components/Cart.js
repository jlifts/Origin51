import React, { useContext } from "react";
import { ShopContext } from "../context/shopProvider";
import { SideDrawer, Div, Anchor } from "atomize";
import "../styles/Cart.scss";
// import { useState } from "react";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItems } = useContext(
    ShopContext
  );
  // const [quantity, setQuantity] = useState(1);
  // const increment = async () => setQuantity(quantity + 1);
  // const decrement = async () =>
  //   setQuantity(quantity > 1 ? quantity - 1 : quantity + 0);
  // const handleChange = async (e) => {
  //   const { value } = e.target;
  //   setQuantity(parseInt(value, 0));
  // };

  if (checkout.lineItems) {
    return (
      <SideDrawer
        className="side-drawer"
        isOpen={isCartOpen}
        onClose={closeCart}
      >
        <div className="side-container">
          <button onClick={closeCart} className="cart_exit">
            X
          </button>
          {checkout.lineItems < 1 ? (
            <>
              <p className="empty">
                {" "}
                Your Cart is Empty...
                <br /> Let's Fix That!{" "}
              </p>
            </>
          ) : (
            <>
              {checkout.lineItems &&
                checkout.lineItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => removeLineItems(item.id)}
                      className="remove"
                    >
                      Remove
                    </button>
                    <div className="item-img">
                      <Div
                        bgImg={item.variant.image.src}
                        bgSize="cover"
                        bgPos="center center"
                        h="5rem"
                        w="4rem"
                        marginLeft="2rem"
                      />
                    </div>
                    <div className="cart-wrap">
                      <p className="item">{item.title}</p>
                      <p className="item">Flavor: {item.variant.title}</p>
                      <p className="item quant">Quantity: {item.quantity}</p>
                      {/* <button onClick={increment} className="cart-quant">
                        +
                      </button>
                      <button onClick={decrement} className="cart-quant">
                        -
                      </button> */}
                    </div>
                    <div className="item-price">
                      <p>${item.variant.price * item.quantity}</p>
                    </div>
                    <div className="divide"></div>
                  </div>
                ))}
            </>
          )}
          <div className="bottum">
            <div className="subtotal cartLabel">Subtotal</div>
            <div className="subtotal">$ {checkout.subtotalPrice}</div>
            <a
              href={checkout.webUrl}
              target="_blank"
              rel="noreferrer"
              className="checkout-btn"
            >
              Checkout
            </a>
          </div>
        </div>
      </SideDrawer>
    );
  }
  return null;
};

export default Cart;
