import {useState, useEffect} from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../firebase/config';


export  function useCollection(collectionName , categoryId) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true)
        const collectionRef = collection(db, collectionName);
        const q = categoryId ? query(collectionRef, where('category', '==', categoryId)): collectionRef;
        getDocs(q)
            .then( (snapshot) =>{
                const items = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                setData(items)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [collectionName, categoryId])
    return {
        loading,
        data
    }
}
