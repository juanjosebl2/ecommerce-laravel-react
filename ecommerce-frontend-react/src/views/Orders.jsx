import useSWR from 'swr'
import clientAxios from '../config/axios'
import { formatMoney } from "../helpers";
import useStore from "../hooks/useStore"

export const Orders = () => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => clientAxios('/api/orders', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const { data, error, isLoading } = useSWR('/api/pedidos', fetcher, { refreshInterval: 1000 })

    const { handleCompleteOrder } = useStore();

    if (isLoading) return 'Loading...'
    if (error) return 'NOT FOUND 404...'

    return (
        <div>
            <h1 className='text-4xl font-black'>Orders</h1>
            <p className='text-2xl my-10'>
                Manage orders from here.
            </p>
            <div className='grid grid-cols-2 gap-5'>
                {data.data.data.map(order => (
                    <div key={order.id} className="p-5 bg-white shadow space-y-2 border-b">
                        <p className='text-xl font-bold text-slate-600'>
                            Order content:
                        </p>

                        {order.products.map(product => (
                            <div
                                key={product.id}
                                className='border-b border-b-slate-200 last-of-type:border-none py-4'
                            >
                                <p className='text-sm'>ID: {product.id}</p>
                                <p>{product.name}</p>
                                <p>
                                    Amount: {''}
                                    <span className='font-bold'>{product.pivot.amount}</span>
                                </p>

                            </div>
                        ))}

                        <p className='text-lg font-bold text-slate-600'>
                            Client: {''}
                            <span className='font-normal'>{order.user.name}</span>
                        </p>

                        <p className='text-lg font-bold text-amber-500'>
                            Total to pay: {''}
                            <span className='font-normal text-slate-600'>{formatMoney(order.total)}</span>
                        </p>

                        <button
                            type="button"
                            className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer'
                            onClick={() => handleCompleteOrder(order.id)}
                        >Complete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
