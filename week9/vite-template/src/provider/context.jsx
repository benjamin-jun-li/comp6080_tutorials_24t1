import { useState, createContext } from 'react';

const InitialStates = {
  token: localStorage.getItem('token') || null,
  store: JSON.parse(localStorage.getItem('store')) || {},
};

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState('bg-cyan-200');
  const [pageNum, setPageNum] = useState(1);

  //   const combinedStates = {
  //     bgColor,
  //     pageNum,
  //   };
  //   const setAllStates = {
  //     setBgColor,
  //     setPageNum,
  //   };
  //   }
  const [global, setGlobal] = useState(InitialStates);

  return (
    <Context.Provider value={{ global, setGlobal }}>
        {children}
    </Context.Provider>
  )
}
