
// // 5
// import React, { useContext} from 'react'
// import UserContext from '../context/Usercontext'


// function Profile() {
//     const {user}=useContext(UserContext)  //refer UserContextProvider
    
//     if (!user) return <div>please login</div>

//     return <div>Welcome {user.username}</div>
        
    
// }

// export default Profile
// // isme dekhnge data lene kese hai


import React, {useContext} from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile