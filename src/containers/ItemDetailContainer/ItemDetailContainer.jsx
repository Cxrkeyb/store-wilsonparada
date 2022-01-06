import React from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from '../../components/Loader/Loader'
import { useDetailProducts } from '../../hooks/useDetailProducts';
import './ItemDetailContainer.css'


function DetailPage() {

    const {id} = useParams();
    const { loading, product } = useDetailProducts(id)
    
    return (
        <div className='containerItemDetail'>
            {
                loading ? <Loader /> : <ItemDetail product={product}/>
            }
        </div>
    )
}
export default DetailPage;
