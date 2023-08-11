import { Product } from '../components/Product'
import useStore from '../hooks/useStore'
import useSWR from 'swr'
import clientAxios from '../config/axios'

export const Home = () => {

  const { categorieCurrent } = useStore();

  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clientAxios('/api/products', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(data => data.data)

  const { data, error, isLoading } = useSWR('/api/products', fetcher, { refreshInterval: 1000 })

  if (isLoading) return 'Loading...'
  if (error) return 'NOT FOUND 404...'

  const products = data.data.filter(product => {
    if (categorieCurrent.name !== "All") {
      return product.category_id === categorieCurrent.id;
    } else {
      return product;
    }
  });

  return (
    <>
      <h1 className='text-4xl font-black'>{categorieCurrent.name}</h1>
      <p className=' text-2xl my-10'>
        Choose and customize your order
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            buttonAgree={true}
          />
        ))}
      </div>
    </>
  )
}
