import jwtDecode from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const userLoad = async () => {

            try {
                
            const token = localStorage.getItem('kenziehub:token')

            if (!token) {
                return
            }

            const { sub } = jwtDecode(token)

            const response = await api.get(`users/${sub}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            setUser(response.data)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }

        userLoad()

    }, [])

    const signIn = async (data) => {
        const response = await api.post('sessions', data)

        const { user: userResponse, token } = response.data

        localStorage.setItem('kenziehub:token', token)

        setUser(userResponse)

        navigate('/dashboard')
    }

    return (
        <AuthContext.Provider value={{ signIn, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}