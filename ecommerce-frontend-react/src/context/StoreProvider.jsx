import { createContext, useState } from 'react'
import { categories as categoriesBD } from '../data/categories';
import { Product } from '../components/Product';

const StoreContext = createContext();

export const StoreProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesBD);
    const [categorieCurrent, setCategorieCurrent] = useState(categories[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});

    const handleClickCategorie = id => {
        const categorie = categories.filter(categorie => categorie.id === id)[0];
        setCategorieCurrent(categorie);        
    } 

    const handleClickModal = () => {
        setModal(!modal);    
    } 

    const handleClickProduct = product => {
        setProduct(product);
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
                handleClickProduct
            }}
        >{children}</StoreContext.Provider>
    )

}

export default StoreContext