import { createContext, useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { api } from "../services/api"
import jwtDecode from "jwt-decode"

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [technologys, setTechnologys] = useState([])
  
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("kenziehub:token");
        if (token) {
          const { sub } = jwtDecode(token);
          const response = await api.get(`users/${sub}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setTechnologys(response.data.techs);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("kenziehub:token");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [navigate]);


  const signIn = async (data) => {
    try {
      const response = await api.post("sessions", data)
      const { user: userResponse, token } = response.data
      api.defaults.headers.common.authorization = `Bearer ${token}`
      localStorage.setItem("kenziehub:token", token)
      setUser(userResponse)
      setTechnologys(userResponse.techs)
      navigate("/dashboard")
    } catch (error) {
      console.error(error)
      toast.error("Erro ao fazer login!")
    }
  }

  const signOut = () => {
    localStorage.removeItem("kenziehub:token")
    setUser(null)
    setTechnologys(null)
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
    <AuthContext.Provider value={{ user, setUser, loading, signIn, signOut, technologys, setTechnologys }}>
      {children}
    </AuthContext.Provider>
  )
}