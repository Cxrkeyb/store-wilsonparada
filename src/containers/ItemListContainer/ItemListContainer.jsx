import React from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css"
import Loader from '../../components/Loader/Loader';
import { useCollection} from '../../hooks/useCollection';

export default function ItemListContainer(){
    const {categoryId} = useParams();
    const { loading, data:products} = useCollection("products" ,categoryId)
    return (
        <div className='containerItemList'>
            <div className='slider'></div>
            {
            loading ? <Loader /> : <ItemList products={products}/>
            }
        </div>
    );
}
