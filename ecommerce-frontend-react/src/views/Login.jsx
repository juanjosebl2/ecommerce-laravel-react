import { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert } from '../components/Alert'
import { useAuth } from '../hooks/useAuth'

export const Login = () => {

    const emailRef = createRef()
    const passwordRef = createRef()

    const [errors, setErrors] = useState([])
    const {login} = useAuth({
        middleware: 'guest',
        url: '/'
    }) 

    const handleSubmit = async e => {
        e.preventDefault()

        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        login(data,setErrors)
    }

    return (
        <>
            <h1 className='text-4xl font-black'>Sign in</h1>
            <p> Fill email and password for entry </p>

            <div className=' bg-white shadow-md rounded-md mt-10 px-5 py-10'>
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {errors ? errors.map((error, i) => <Alert key={i}>{error}</Alert>)  : null }
                    
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
                            ref={emailRef}
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
                            ref={passwordRef}
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
