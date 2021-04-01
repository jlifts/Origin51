import React, { useContext, useEffect} from 'react'
import '../styles/BuyL.scss'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopProvider'
import { Row, Button, Col} from 'atomize'

//Smokable Id = 6551422795985
//Vape Id = 6551423058129
const Buy = () => {

    let { id } = useParams()

    const { fetchProductWithId, addItemToCheckout, product, products, increment, decrement } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId(id)
        return () => {

        };
    }, [ fetchProductWithId, id ])


    if(!product) return <div>Loading</div>
    return (
        <div className='add'>
            <Row>
                {products.map(product => (
                <Col key={product.id}>
                    <span className='price'>${product.variants[0].price}</span>
                    <div className='quantity-container'>
                        <button className='increase quantity' onClick={() => increment(product.id)} >+</button>
                        {/* <span className='quantity number'>{product.quantity}</span> */}
                        <button className='decrease quantity' onClick={() => decrement(product.id)} >-</button>
                    </div>
                    <Button  className='add-btn' onClick={() => addItemToCheckout(product.variants[0].id, 1)}> Add To Cart</Button>
                </Col>
                ))}
            </Row>
        </div>
    )
}

export default Buy
