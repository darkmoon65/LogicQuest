import React, { createContext, useState, useContext } from "react";

const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(1);

  const updateNumber = (newNumber) => {
    setNumber(newNumber);
  };

  return (
    <NumberContext.Provider value={{ number, updateNumber }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumber = () => {
  return useContext(NumberContext);
};
