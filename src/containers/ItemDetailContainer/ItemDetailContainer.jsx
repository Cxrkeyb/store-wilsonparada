import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from '../../components/Loader/Loader'
import {getProductById} from '../../services/getProducts'
import './ItemDetailContainer.css'


function DetailPage() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(()=> {
        setLoading(true)
        getProductById(id).then(product => setProduct(product))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='containerItemDetail'>
            {
                loading ? <Loader /> : <ItemDetail product={product}/>
            }
        </div>
    )
}
export default DetailPage;
