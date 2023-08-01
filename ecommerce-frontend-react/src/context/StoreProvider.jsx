import { createContext, useState } from 'react'
import { categories as categoriesBD } from '../data/categories';

const StoreContext = createContext();

export const StoreProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesBD);
    const [categorieCurrent, setCategorieCurrent] = useState(categories[0]);

    const handleClickCategorie = id => {
        const categorie = categories.filter(categorie => categorie.id === id)[0];
        setCategorieCurrent(categorie);        
    } 

    return(
        <StoreContext.Provider
            value={{
                categories,
                categorieCurrent,
                handleClickCategorie
            }}
        >{children}</StoreContext.Provider>
    )

}

export default StoreContext