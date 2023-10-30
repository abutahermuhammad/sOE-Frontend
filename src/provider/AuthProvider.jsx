import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading ] = useState(true);
  const [error, setError] = useState('');
 
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      setUser({ isAuthenticated: true });
    }
    setLoading(false);
  

  }, []);
  console.log("from provide",user)

  // login system
  const login = (phone, password) => {
    setLoading(true);
    fetch('http://localhost:5000/logged', {
      
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ phone, password })
    })
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        if (data.status == "invalid User") {
          setLoading(false);
          setError('Something went wrong')
          setUser({ isAuthenticated: false })
        }
        else if (data.status == 'valid User') {
          setUser({isAuthenticated:true},data)
          localStorage.setItem("isAuthenticated", "true");
          setLoading(false);
          
        }

      })
  }
  // logout

  const logOut = () => {
    loading
    setUser({ isAuthencitaed: false })
    localStorage.removeItem('isAuthenticated')
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