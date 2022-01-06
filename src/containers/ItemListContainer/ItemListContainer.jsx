import React, {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import Loader from '../../components/Loader/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';

export default function ItemListContainer(){
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {categoryId} = useParams();
    useEffect(()=> {
        setLoading(true)

        const productsRef = collection(db, "products");
        const q = categoryId ? query(productsRef, where('category', '==', categoryId)): productsRef;
        
        getDocs(q)
            .then( (snapshot) =>{
                const items = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                setProduct(items)
                console.log(items)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [categoryId])
    return (
        <div className='containerItemList'>
            {
            loading ? <Loader /> : <ItemList products={product}/>
            }
        </div>
    );
}
