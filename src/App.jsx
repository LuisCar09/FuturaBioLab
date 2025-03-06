import RoutesApp from "./routes/Routes"
import UserProvider from './contexts/UserContext'
import AutoLogout from "./pages/AutoLogOut"
import './styles/App.css'
function App() {
  
  return (
    <UserProvider>
      <AutoLogout />
      <RoutesApp />
      
    </UserProvider>
  )
}

export default App
