import React from 'react';
import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <div className='productsContainer'>
            {products.map(element => 
               <Item key={element.id} {...element}/>
            )}
        </div>
     );
}
export default ItemList;