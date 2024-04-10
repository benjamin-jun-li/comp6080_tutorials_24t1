import { useContext } from 'react';
import { Context } from '@/provider/context';

const useGlobalState = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useGlobalState must be used in a ContextProvider')
  }
  return context;
}

export default useGlobalState;
