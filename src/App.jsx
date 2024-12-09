import RoutesApp from "./routes/Routes"
import UserProvider from './contexts/UserContext'

import './styles/App.css'
function App() {
  
  return (
    <UserProvider>
      <RoutesApp />
    </UserProvider>
  )
}

export default App
