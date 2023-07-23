import {createContext, useState} from 'react'

export const LoginContext = createContext({
    login: () => { },
})

export function LoginProvider({ children }) {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState("admin");
    const [isLogin, setIsLogin] = useState(false)
    
    function login(user, pass) {
        if (user === username && pass === password) setIsLogin(true)
        else alert('username or password is wrong')
    }    

    const contextValue = {
        login,
        isLogin: isLogin,        
    }

    return (
      <LoginContext.Provider value={contextValue}>
        {children}
      </LoginContext.Provider>
    );
}