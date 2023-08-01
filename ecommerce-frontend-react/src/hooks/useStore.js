import { useContext } from 'react'
import QuioscoContext from '../context/StoreProvider'

const useStore = () => {
    return useContext(QuioscoContext)
}

export default useStore