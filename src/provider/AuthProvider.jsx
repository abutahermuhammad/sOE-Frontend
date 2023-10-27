import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuthencitaed: false })
  const [error, setError] = useState('');
 

  // login system
  const login = (phone, password) => {
    fetch('http://localhost:5000/logged', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ phone, password })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.status == "invalid User") {
          setError('Something went wrong')
          setUser({ isAuthencitaed: false })
        }
        else if (data.status == 'valid User') {
          setUser({ isAuthencitaed: true })
          
        }

      })
  }
  // logout

  const logOut = () => {
    setUser({ isAuthencitaed: false })
  }


  const authInfo = {
    user,
    error,
    login,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;