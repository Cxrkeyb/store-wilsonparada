import products from './products'

export const getProducts = () => {
    return new Promise ((res)=> {
            setTimeout(() => res(products), 3000)
        })
}

export const getProductById = (id) => {
    let myProduct = products.find(product => product.id === id)
    return new Promise ((res)=> {
            setTimeout(() => res(myProduct), 3000)
        })
}

export const getProductByCategory = (category) =>{
    return new Promise((resolve,reject)=>{
            setTimeout(() => 
                resolve(products.filter(product => product.category === category)),3000)
        })
}
