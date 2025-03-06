import { Navigate } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"

const Logout = () => {
    const auth = getAuth()
    signOut(auth)
    localStorage.clear()

    return <Navigate to={'/'} />
}
export default Logout

