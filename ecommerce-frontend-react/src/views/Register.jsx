import React from 'react'

export const Register = () => {
    return (
        <>
            <h1 className='text-4xl font-black'>Create account</h1>
            <p> Create you account, fill the form </p>

            <div className=' bg-white shadow-md rounded-md mt-10 px-5 py-10'>
                <form>
                    <div className=' mb-4'>
                        <label
                            className="text-slate-800"
                            htmlFor="name"
                        >Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="name"
                            placeholder="You name"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
