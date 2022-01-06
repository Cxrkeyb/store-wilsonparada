import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react'

export function useDetailProducts(id) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

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
    return {
        loading,
        product
    }
}
