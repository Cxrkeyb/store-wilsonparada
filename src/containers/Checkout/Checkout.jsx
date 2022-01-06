import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'
import { collection, getDocs, query, addDoc, Timestamp, writeBatch, where, documentId } from 'firebase/firestore/lite'
import Loader from '../../components/Loader/Loader'
import './Checkout.css'
import CheckoutFinish from '../../components/CheckoutFinish/CheckoutFinish'
import CartEmpty from '../../components/CartEmpty/CartEmpty'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

export default function Checkout() {

    const { cart, totalPriceCart, emptyCart, isInCart, emptyQuantity } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errorItems, setErrorItems] = useState([])

    const goToCart = () => {
        setErrorItems([])
    }

    const handleSubmit = (values) => {
        const order = {
            buyer: values,
            items: cart,
            total: totalPriceCart().toFixed(2),
            date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db)
        const orderRef = collection(db, "orders")
        const productsRef = collection(db, "products")
        const q = query(productsRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const outOfStock = []
        setLoading(true)
        getDocs(q)
            .then((res)=> {
                res.docs.forEach((doc)=> {
                    const itemInCart = cart.find((prod)=> prod.id === doc.id)
                    if(doc.data().stock >= itemInCart.quantityitem){
                        batch.update(doc.ref, {
                            stock: doc.data().stock - itemInCart.quantityitem
                        })
                    }else{
                        outOfStock.push(itemInCart)
                    }
                })
                if(outOfStock.length === 0){
                    addDoc(orderRef, order)
                        .then((res)=>{
                            batch.commit()
                            setOrderId(res.id)
                            emptyQuantity()
                            emptyCart()
                            setLoading(false)
                        })
                }else{
                    setErrorItems(outOfStock)
                    setLoading(false)
                }
            })
        }
    
    return ( 
        /* Detectar si la compra se finalizó */
        orderId ? <CheckoutFinish orderId={orderId}/>:
        // Detectar si el carrito está vacío
        isInCart() ? loading ? <Loader /> : <CheckoutForm goToCart={goToCart} errorItems={errorItems} handleSubmit={handleSubmit} />
        // Si no hay nada en el carrito mostrar CartEmpty para volver al home
        :  <CartEmpty />
    )
}