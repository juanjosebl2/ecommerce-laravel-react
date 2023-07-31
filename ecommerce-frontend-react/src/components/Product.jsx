import React from 'react'
import { formatMoney } from "../helpers"

export const Product = (props) => {

    const {name, price, image} = props.product

    return (
        <div className=' border p-3 shadow bg-white'>
            <img
                alt={`image ${name}`}
                className='w-full'
                src={`/img/${image}.jpg`}
            />

            <div className='p-5'>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='mt-5 font-black text-4xl text-amber-500'>
                    {formatMoney(price)}
                </p>
                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
                >
                    Agree
                </button>
            </div>
        </div>
    )
}
