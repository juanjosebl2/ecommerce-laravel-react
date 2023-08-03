import { createContext, useState, useEffect } from 'react'
import { categories as categoriesBD } from '../data/categories';

const StoreContext = createContext();

export const StoreProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesBD);
    const [categorieCurrent, setCategorieCurrent] = useState(categories[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState([]);

    const handleClickCategorie = id => {
        const category = categories.filter(categorie => categorie.id === id)[0];
        setCategorieCurrent(category);        
    } 

    const handleClickModal = () => {
        setModal(!modal);    
    } 

    const handleClickProduct = product => {
        setProduct(product);
    }

    // In params before three points for delete elements in array, in this case
    // delete categorie_id and image
    // ... order, product, it have a copy of order and add product
    const handleAgreeOrderd = ({category_id, image, ...product}) => {
        setOrder([...order, product])
    }

    return(
        <StoreContext.Provider
            value={{
                categories,
                categorieCurrent,
                handleClickCategorie,
                modal,
                handleClickModal,
                product,
                handleClickProduct,
                order,
                handleAgreeOrderd
            }}
        >{children}</StoreContext.Provider>
    )

}

export default StoreContext