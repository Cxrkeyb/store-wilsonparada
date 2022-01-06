import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({children}) {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const changeCartCounter = (sign) => {
        // Cambiar el valor de el carrito
        switch(sign){
            case '+': setQuantity(quantity + 1);
            break;
            case '-': setQuantity(quantity - 1);
            break;
            default: setQuantity(quantity)
            break;
        }
    }
    const totalPriceCart = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantityitem, 0)
    }
    const modifyItem = (product, quantityItem) => {
        // Modificar la cantidad de objetos del carrito
        cart[cart.indexOf(product)].quantityitem = quantityItem
        setCart(cart)
    }
    const addItem = (item, quantityitem) => {
        // Añadir el producto al carrito
        setQuantity(quantity+quantityitem)
        setCart([...cart, {quantityitem, ...item}])
    }
    const removeItem = (productid) => {
        const newCart = cart.filter(element => element.id !== productid)
        const product = cart.filter(element => element.id === productid)
        setQuantity(quantity-product[0].quantityitem)
        setCart(newCart)
    }
    const emptyCart = () => {
        setCart([])
        setQuantity(0)
    }
    const isInCart = () => {
        // Detectar si hay productos en el carrito
        if(cart.length > 0){
            return true
        }else{
            return false
        }
    }
    
    const emptyQuantity = ()=> {
        setQuantity(0)
    }

    const productCheck = (productid) =>{
        // Chequear si el producto está en el carrito
        return cart.some(element => element.id === productid)
    }
    return (
        <CartContext.Provider value={{quantity, cart, isInCart, addItem, productCheck, removeItem, modifyItem, changeCartCounter, emptyCart, emptyQuantity, totalPriceCart}}>
             {children}
        </CartContext.Provider>
    )
}
