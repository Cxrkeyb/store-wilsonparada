import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from '../../components/Loader/Loader'
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore/lite';
import './ItemDetailContainer.css'


function DetailPage() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    useEffect(()=> {
        setLoading(true)
        const docRef = doc(db, "products", id)
        getDoc(docRef)
            .then((doc)=>{
                const product = {
                    id: doc.id, 
                    ...doc.data()
                }
                setProduct(product)
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [id])
    return (
        <div className='containerItemDetail'>
            {
                loading ? <Loader /> : <ItemDetail product={product}/>
            }
        </div>
    )
}
export default DetailPage;
