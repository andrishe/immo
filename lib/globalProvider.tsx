import { createContext, PropsWithChildren, useContext } from 'react';
import { getCurrentUser } from './appwrite';
import { useAppwrite } from './useAppwrite';

type User = {
  $id: string;
  name: string;
  email: string;
  avatar: string;
};

type GlobalContextType = {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: (newParams: Record<string, string | number>) => Promise<void>;
};

const globalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const {
    data: user = null,
    loading,
    refetch,
  } = useAppwrite({
    fn: getCurrentUser,
  });

  const isLoggedIn = !!user;

  return (
    <globalContext.Provider value={{ isLoggedIn, user, loading, refetch }}>
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(globalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalProvider;
