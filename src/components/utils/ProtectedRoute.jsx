import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const isLogged = localStorage.getItem('authToken')
    
    
    return !isLogged ? <Navigate to={'/login'} /> : children
}


export default ProtectedRoute