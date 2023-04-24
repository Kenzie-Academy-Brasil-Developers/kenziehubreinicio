import { createContext, useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { api } from "../services/api"
import jwtDecode from "jwt-decode"

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem("kenziehub:token")
    if (token) {
      const { sub } = jwtDecode(token)
      api
        .get(`users/${sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data)
        })
        .catch((error) => {
          console.log(error)
          localStorage.removeItem("kenziehub:token")
          navigate("/")
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [navigate])

  const signIn = async (data) => {
    const response = await api.post("sessions", data)
    const { user: userResponse, token } = response.data
    api.defaults.headers.common.authorization = `Bearer ${token}`
    localStorage.setItem("kenziehub:token", token)
    setUser(userResponse)
    navigate("/dashboard")
  }

  const signOut = () => {
    localStorage.removeItem("kenziehub:token")
    setUser(null)
    navigate("/")
  }

  const isAuthenticated = () => {
    return !!user
  }

  const handleRestrictedRoutes = () => {
    if (isAuthenticated()) {
      navigate("/dashboard")
    }
  }

  useEffect(() => {
    handleRestrictedRoutes()
  }, [user])

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}