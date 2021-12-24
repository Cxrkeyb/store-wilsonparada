import React, {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import { getProductByCategory, getProducts } from '../../services/getProducts';

export default function ItemListContainer(){

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const {categoryId} = useParams();

    useEffect(()=> {
        setLoading(true)
        if(categoryId === undefined){
            const promise =  getProducts();
            promise.then(data => setProduct(data)).finally(()=> setLoading(false));
        }
        else {
            const promise =  getProductByCategory(categoryId);
            promise.then(data => setProduct(data)).finally(()=> setLoading(false));
        }
    }, [categoryId])


    return (
        <div className='containerItemList'>
            {
            loading ? <h3>Cargando...</h3> : 
            // <div className="flex padding justify-center">
                <ItemList products={product}/>
            // </div>
            }
        </div>
    );
}
