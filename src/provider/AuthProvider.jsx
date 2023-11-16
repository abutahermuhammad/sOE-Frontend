import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [error, setError] = useState('');
 
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  
    if (isAuthenticated === "true" && storedUserInfo) {
      setUser({ isAuthenticated: true });
      setUserInfo(storedUserInfo);
    }
    setLoading(false);
  }, []);
  
  // console.log("from provide",user)

  // login system
  const login = (phone, password) => {
    setLoading(true);
    fetch('http://localhost:5000/logged', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ phone, password }),
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === "invalid User") {
        setLoading(false);
        setError('Invalid credentials');
        setUser({ isAuthenticated: false });
      } else if (data.status === 'valid User') {
        // Store user information in local storage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        
        // Update state or perform other actions based on successful login
        setUser({ isAuthenticated: true });
        setUserInfo(data.user); 
        console.log("user",data.user); 
        setLoading(false);
      }
    })
    .catch(error => {
      setLoading(false);
      setError('Something went wrong');
      console.error('Error:', error);
    });
  };
  
  // logout

  const logOut = () => {
    loading
    setUser({ isAuthenticated: false })
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userInfo')
  }


  const authInfo = {
    user,
    userInfo,
    error,
    login,
    logOut,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;