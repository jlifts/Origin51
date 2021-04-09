import React, {useContext} from 'react';
import {ShopContext} from '../context/shopProvider';
import {SideDrawer, Row, Div, Anchor} from 'atomize';
import '../styles/Cart.scss'


const Cart = () => {

    const { isCartOpen, closeCart, checkout, increment, decrement, removelineItem, product } = useContext(ShopContext)

    if (checkout.lineItems){
        return (
            <SideDrawer className='side-drawer' isOpen={isCartOpen} onClose={closeCart}>
                <div className='side-container'>
                    <button onClick={closeCart} className='cart_exit'>X</button>
                        {checkout.lineItems.length < 1 ?
                            (<Row>
                                <p className='empty'> Your Cart is Empty... Let's fix that!</p>
                            </Row>) :
                            <>
                            {checkout.lineItems && checkout.lineItems.map(item => ( 
                            (<div key={item.id}>
                                <div onClick={() => removelineItem(product.quantity)} className='remove'>Remove</div>
                                <div className='item-img'>
                                    <Div bgImg={item.variant.image.src} bgSize='cover' bgPos='center center' h='5rem' w='4rem'/>
                                </div>
                                <div className='cart-wrap'>
                                    <p className='item'>{item.title}</p>
                                    <p className='item'>Flavor: {item.variant.title}</p>
                                    <p className='item quant'>Quantity: {item.quantity}</p><div onClick={increment} className='cart-quant'>+</div><div onClick={decrement} className='cart-quant'>-</div>
                                </div>
                                <div className='item-price'>
                                    <p >${item.variant.price}</p>
                                </div>
                                <div className='divide'></div>
                            </div>
                            )
                        ))}
                        </>
                    }
                    <div className='subtotal cartLabel'>Subtotal</div>
                    <div className='subtotal'>$ {checkout.subtotalPrice}</div>
                    <Anchor href={checkout.webUrl} target="_blank" className='checkout-btn'>Checkout</Anchor>
                </div>
            </SideDrawer>
        )
    }
    return null

}

export default Cart
