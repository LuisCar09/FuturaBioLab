import { createContext, useState, useEffect } from "react";
import axios from "axios";

//creamos en contexto

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        const fetchUser = async () => {

            setLoading(true)
            const token = localStorage.getItem('authToken')


            if (token) {
                try {
                    const response = await axios.get(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'users/' + token, {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                    setUser(response.data)
                } catch (error) {
                    console.error('Error fetching user:', error.message);
                }
            }else{
                setUser(null)
            }
            setLoading(false)

        }
        fetchUser()

    }, [])

    return(
        <UserContext.Provider value={{user,setUser,loading}} >
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider