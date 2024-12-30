// 3
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    
    <UserContextProvider> 
      {/* wraping all the childrens */}
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
