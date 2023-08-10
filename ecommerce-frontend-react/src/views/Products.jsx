import useSWR from 'swr'
import clientAxios from '../config/axios'
import { Product } from '../components/Product'

export const Products = () => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => clientAxios('/api/products', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(data => data.data)

    const { data, error, isLoading } = useSWR('/api/products', fetcher, { refreshInterval: 10000 })

    if (isLoading) return 'Loading...'
    if (error) return 'NOT FOUND 404...'

    return (
        <div>
            <h1 className='text-4xl font-black'>Orders</h1>
            <p className='text-2xl my-10'>
                Manage availability from here.
            </p>

            
        </div>
    )
}
