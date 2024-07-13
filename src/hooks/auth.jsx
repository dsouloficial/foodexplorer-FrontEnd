import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useLocalStorage } from './localStorage';
import { decodeJwt } from '../utils/jwt';
import { toast } from 'react-hot-toast';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  const [storedToken, setStoredToken, delStoredToken] = useLocalStorage('@foodexplorer:token');
  const [storedUser, setStoredUser, delStoredUser] = useLocalStorage('@foodexplorer:user');

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });

      const { token, user } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user });

      setStoredToken(token);
      setStoredUser(user);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, { id: 'error' });
      } else {
        toast.error('Não foi possível fazer login', { id: 'error' });
      }
    }
  }

  function signOut() {
    delStoredToken();
    delStoredUser();
    setData({});
  }

  useEffect(() => {
    if (storedToken && storedUser) {
      const { expiration: tokenExpiration } = decodeJwt(storedToken);

      if (tokenExpiration < new Date()) {
        alert('login expirado!');
        signOut();
      }

      api.defaults.headers.authorization = `Bearer ${storedToken}`;
      setData({ token: storedToken, user: storedUser });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook useAuth - authentication hook
 * @returns {{ signIn(), signOut(), user }} return func signIn, signOut & user data
 */
function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
