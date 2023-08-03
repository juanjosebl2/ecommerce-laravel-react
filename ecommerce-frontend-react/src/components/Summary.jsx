import { React, useState } from 'react'
import useStore from '../hooks/useStore';
import { SummaryProduct } from './SummaryProduct';
import { formatMoney } from '../helpers';

export const Summary = () => {

  const { order } = useStore();
  const [numOrder, setNumOrder] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    
  };
  const dropdownContent = isOpen ? (
    <div className='w-72 h-screen overflow-y-scroll p-5'>
      <h1 className='text-4xl font-black'>Summary</h1>
      <p className='text-lg my-5'>
        Here you will see the summary and total of your order
      </p>
      <div className='py-10'>
        {order.length === 0 ? (
          <p className='text-cente text-2xl'>
            Dont there are elements in your order
          </p>
        ) : (
          order.map(product => (
            <SummaryProduct
              key={product.id}
              product={product}
            />
          ))
        )}
      </div>

      <p className='text-xl mt-10'>
        Total: {''}
      </p>

      <form className='w-full'>
        <div className='mt-5'>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"
          >Send</button>
        </div>
      </form>
    </div>
  ) : null;



  return (
    <aside>
      <button
        className={`${isOpen ? "bg-amber-400" : 'bg-white'} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
        onClick={handleClick}
      >
        <img
          className='w-12'
          src="img/buy.png"
          alt="image logo"
        />
        <p className=' text-lg font-bold cursor-pointer truncate'>
          {numOrder}
        </p>
      </button>
      {dropdownContent}
    </aside>
  )
}