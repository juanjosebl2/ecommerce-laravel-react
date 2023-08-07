import React from 'react'
import { Category } from './Category'
import useStore from '../hooks/useStore'

export const Sidebar = () => {

    const { categories } = useStore();

    return (
        <aside className='md:w-72'>
            <div className='p-4'>
                <img
                    className='w-40'
                    src="img/logo.svg"
                    alt="image logo"
                />
            </div>
            <div className='mt-10'>
                {categories.map(category => (
                    <Category
                        key={category.id}
                        category={category}
                    />
                ))}
            </div>
            <div className='my-5 px-5'>
                <button
                    type='button'
                    className='text-center bg-red-500 w-full p-3 font-bold text-white truncate'
                >
                    Cancel order
                </button>
            </div>
        </aside>
    )
}
