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

    const { data, error, isLoading } = useSWR('/api/products', fetcher, { refreshInterval: 1000 })

    if (isLoading) return 'Loading...'
    if (error) return 'NOT FOUND 404...'

    return (
        <div>
            <h1 className='text-4xl font-black'>Orders</h1>
            <p className='text-2xl my-10'>
                Manage availability from here.
            </p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {data.data.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        buttonAvailable={true}
                    />
                ))}
            </div>

        </div>
    )
}
