import React, { useContext, useEffect } from 'react'
import '../styles/Buy.scss'
import { ShopContext } from '../context/shopProvider'
import { Row, Button, Col} from 'atomize'
import { useParams } from 'react-router-dom'
// import Variant from '../components/VariantSelector'

//Smokable Id = 6551422795985
//Vape Id = 6551423058129
const Buy = () => {

    let { id } = useParams()

    const { fetchProductWithId, addItemToCheckout, product, products, increment, decrement} = useContext(ShopContext)

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
                    {/* <Variant /> */}
                    <div className='quantity-container'>
                        <button className='increase quantity' onClick={() => increment(product.variants[0].id, 1)} >+</button>
                        <span className='quantity number' min= '1'>{product.quantity}</span>
                        <button className='decrease quantity' onClick={() => decrement(product.variants[0].id, -1)} >-</button>
                    </div>
                    <Button  className='add-btn' onClick={() => addItemToCheckout(product.variants[0].id, 1)}> Add To Cart</Button>
                </Col>
                ))}
            </Row>
        </div>
    )
}

export default Buy
