import { createContext, useContext } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ isAuthenticated: true }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext();
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
