import React from 'react'
import { Category } from './Category'
import useStore from '../hooks/useStore'
import { useAuth } from '../hooks/useAuth'

export const Sidebar = () => {

    const { categories } = useStore();
    const {logout, user} = useAuth({middleware: 'auth'})

    // Change array for put in first place category All
    const allCategoryIndex = categories.findIndex(category => category.name === 'All');

    if (allCategoryIndex !== -1) {
        const allCategory = categories.splice(allCategoryIndex, 1)[0];
        categories.unshift(allCategory);
    }

    return (
        <aside className='md:w-72'>
            <div className='p-4'>
                <img
                    className='w-40'
                    src="img/logo.svg"
                    alt="image logo"
                />
            </div>
            <p className='my-10 text-xl text-center'>Hello: {user?.name}</p>
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
                    onClick={logout}
                >
                    LOG OUT
                </button>
            </div>
        </aside>
    )
}
