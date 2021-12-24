import products from './products'

export const getProducts = () => {
    console.log("soy productos general")
    return new Promise ((res)=> {
            setTimeout(() => res(products), 3000)
        })
}

export const getProductById = (id) => {
    console.log(id)
    console.log("soy productos id")
    let myProduct = products.find(product => product.id === id)
    return new Promise ((res)=> {
            setTimeout(() => res(myProduct), 3000)
        })
}

export const getProductByCategory = (category) =>{
    console.log("Soy productos categoria")
    console.log(category)
    return new Promise((resolve,reject)=>{
            setTimeout(() => 
                resolve(products.filter(product => product.category === category)),3000)
        })
}
