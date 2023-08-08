import { useEffect } from 'react'
import useSWR from 'swr'
import {useNavigate} from 'react-router-dom'
import clientAxios from "../config/axios";

export const useAuth = ({middleware, url}) => {

    const login = async (dataR, setErrors) => {
        try {
            const {data} = await clientAxios.post('/api/login', dataR)
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([])
            await mutate()
        } catch (error) {
            setErrors(Object.values(error.response.data.errors) )
        }
     }

     const registro = async (datos, setErrores) => {
        try {
            const {data} = await clienteAxios.post('/api/registro', datos)
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrores([])
            await mutate()
        } catch (error) {
            setErrores(Object.values(error.response.data.errors) )
        }
     }

     const logout = async () => {
        try {
            await clienteAxios.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
     }

     return {
        login,
        registro, 
        logout,
     }
    
    
}