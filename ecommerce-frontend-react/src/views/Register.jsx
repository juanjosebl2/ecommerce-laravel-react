import { createRef, useState} from 'react'
import { Link } from 'react-router-dom'
import clientAxios from '../config/axios'
import { Alert } from '../components/Alert'


export const Register = () => {

    const nameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const passwordConfirmationRef = createRef()

    const [errors, setErrors] = useState([])
    
    const handleSubmit = async e => {
        e.preventDefault()
        
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }

        try {
            const res = await clientAxios.post('/api/register', data)
            //console.log(res.data.token)

        } catch (error) {
            setErrors(Object.values(error.response.data.errors))
        }
    }

    return (
        <>
            <h1 className='text-4xl font-black'>Create account</h1>
            <p> Create you account, fill the form </p>

            <div className=' bg-white shadow-md rounded-md mt-10 px-5 py-10'>
                <form
                    onSubmit={handleSubmit}
                >
                    {errors ? errors.map((error, i) => <Alert key={i}>{error}</Alert>)  : null }
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
                            ref={nameRef}
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
                            ref={passwordConfirmationRef}
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
