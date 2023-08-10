import { useEffect } from 'react'
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'
import clientAxios from "../config/axios";

export const useAuth = ({ middleware, url }) => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate();

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        clientAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.data)
            .catch(error => {
                throw Error(error?.response?.data?.errors)
            })
    )

    const login = async (dataR, setErrors) => {
        try {
            const { data } = await clientAxios.post('/api/login', dataR)
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([])
            //force validation with mutate
            await mutate()
        } catch (error) {
            setErrors(Object.values(error.response.data.errors))
        }
    }

    const register = async (dataR, setErrors) => {
        try {
            const { data } = await clientAxios.post('/api/register', dataR)
            //console.log(data.token)
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([])
            await mutate()
        } catch (error) {
            setErrors(Object.values(error.response.data.errors))
        }
    }

    const logout = async () => {
        try {
            await clientAxios.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            //same but dont call useSWR
            await mutate(undefined)
        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
    }

    useEffect(() => {
        if(middleware === 'guest' && url && user) {
            navigate(url)
        }

        if(middleware === 'guest' && user && user.admin) {
            navigate('/admin')
        }

        if(middleware === 'admin' && user && !user.admin) {
            navigate('/')
        }
        
        if(middleware === 'auth' && error) {
            navigate('/auth/login')
        }
     }, [user, error]) 

    return {
        login,
        register,
        logout,
        user,
        error
    }

}