import React, { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    // const [currentUsers, setCurrentUsers] = useState({
    //   name: "",
    //   age: null,
    //   token: "",
    //   reservas: [],
    // });
     const [loginData, setLoginData] = useState({
        token: null,
     });
    // const [nuevasReservas, setNuevasReservas] = useState();
  
    const memorizedValues = useMemo(
      () => ({
        //datos utilizados
        loginData,
        setLoginData
      }),
      [
        //datos utilizados
        loginData,
        setLoginData
      ]
    );
  
    return (
      <AppContext.Provider value={memorizedValues}>
        {children}
      </AppContext.Provider>
    );
  };

  const AppConsumerHook = () => useContext(AppContext);

  const AppConsumerHOC = (WrappedComponent) => () =>
  (
    <AppProvider>
      <WrappedComponent />
    </AppProvider>
  );

export { AppProvider, AppConsumerHook, AppConsumerHOC };