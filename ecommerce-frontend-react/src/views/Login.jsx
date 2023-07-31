import React from 'react'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <>
            <h1 className='text-4xl font-black'>Sign in</h1>
            <p> Fill email and password for entry </p>

            <div className=' bg-white shadow-md rounded-md mt-10 px-5 py-10'>
                <form>
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
                    <input
                        type='submit'
                        value='Sign in'
                        className=' bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
                    />
                </form>
            </div>
            <nav className='mt-5'>
              <Link className=' hover:text-indigo-800' to='/auth/register'>
                Dont you have account? Create here
              </Link>
            </nav>
        </>
  )
}
