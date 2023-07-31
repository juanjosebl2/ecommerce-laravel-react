import React from 'react'
import { Link } from 'react-router-dom'

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
                    <div className=' mb-4'>
                        <label
                            className="text-slate-800"
                            htmlFor="email"
                        >Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="You email"
                        />
                    </div>
                    <div className=' mb-4'>
                        <label
                            className="text-slate-800"
                            htmlFor="password"
                        >Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password"
                            placeholder="You password"
                        />
                    </div>
                    <div className=' mb-4'>
                        <label
                            className="text-slate-800"
                            htmlFor="password_confirm"
                        >Repeat Password:</label>
                        <input
                            type="password"
                            id="password_confirm"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password_confirm"
                            placeholder="Repeat password"
                        />
                    </div>
                    <input
                        type='submit'
                        value='Create account'
                        className=' bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
                    />
                </form>
            </div>
            <nav className='mt-5'>
              <Link className=' hover:text-indigo-800' to='/auth/login'>
                Already have an account? Sign in
              </Link>
            </nav>
        </>
    )
}
