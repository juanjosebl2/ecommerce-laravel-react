import React from 'react'
import { formatMoney } from "../helpers"
import useStore from "../hooks/useStore"

export const Product = ({product, buttonAgree = false, buttonAvailable = false}) => {

    const { handleClickModal, handleClickProduct, handleProductExhausted } = useStore();
    const {name, price, image} = product

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

                {buttonAgree && (
                    <button
                        type='button'
                        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
                        onClick={() => {
                            handleClickModal();
                            handleClickProduct(product);
                        }}
                    >
                        Agree
                    </button>
                )}

                {buttonAvailable && (
                    <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
                    onClick={() => handleProductExhausted(product.id)}
                >
                    Product exhausted
                </button>
                )}
            </div>
        </div>
    )
}
