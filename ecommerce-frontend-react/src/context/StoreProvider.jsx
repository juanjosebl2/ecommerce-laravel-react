import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import clientAxios from '../config/axios';

const StoreContext = createContext();

export const StoreProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [categorieCurrent, setCategorieCurrent] = useState({});
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState(0);
    const [numOrder, setNumOrder] = useState(0);

    useEffect(() => {
        const newTotal = order.reduce((total,product) => (product.price * product.amount) + total, 0)
        setTotal(newTotal)

        const newNumOrder = order.reduce((numOrder,product) => (product.amount) + numOrder, 0)
        setNumOrder(newNumOrder)

    }, [order])

    const getCategory = async() => {
        try {
            const response = await clientAxios('/api/categories')
            const {data} = await response.data;
            setCategories(data)
            const categoryAll = data.find(item => item.name === 'All');
            setCategorieCurrent(categoryAll)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategory();
    }, [])

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

    const handleSubmitNewOrder = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const {data} = await clientAxios.post('/api/orders', 
            {
                total,
                products: order.map(product => {
                    return {
                        id: product.id,
                        amount: product.amount
                    }
                })
            }, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message);
            setTimeout(() => {
                setOrder([])
            }, 1000);

            // Log out user
            /*setTimeout(() => {
                localStorage.removeItem('AUTH_TOKEN');
                logout();
            }, 3000);*/

            
        } catch (error) {
            console.log(error)
        }
    }

    // In params before three points for delete elements in array, in this case
    // delete categorie_id 
    // ... order, product, it have a copy of order and add product
    const handleAgreeOrderd = ({category_id, ...product}) => {
        if(order.some( orderState => orderState.id === product.id )) {
            const orderUpdated = order.map( orderState => orderState.id === product.id ? product : orderState)
            setOrder(orderUpdated)
            toast.success('Saved successfully')
        } else {
            setOrder([...order, product])
            toast.success('Added to order')
        }
        
    }

    const handleEditAmount = productEdit => {
        const productUpdated = order.filter(product => product.id === productEdit.id)[0]
        setProduct(productUpdated)
        setModal(!modal)
    }   

    const handleDeleteOrder = productDelete => {
        const orderUpdated = order.filter(product => product.id !== productDelete.id)
        setOrder(orderUpdated)
        toast.success('Deleted succesfully')
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
                handleAgreeOrderd,
                handleEditAmount,
                handleDeleteOrder,
                total,
                numOrder,
                handleSubmitNewOrder
            }}
        >{children}</StoreContext.Provider>
    )

}

export default StoreContext