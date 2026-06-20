import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from '../components/layout/PageLoader';

const LoaderContext = createContext({
  isLoading: true,
  setLoading: () => {},
  loaderText: "Crafting Your Experience... Please Hold On!",
  setLoaderText: () => {},
});

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderText, setLoaderText] = useState("Crafting Your Experience... Please Hold On!");
  const location = useLocation();

  // Reset loader on route change
  useEffect(() => {
    setIsLoading(true);
    setLoaderText("Crafting Your Experience... Please Hold On!");
    
    // Safety timeout in case a page forgets to call setLoading(false)
    // Or in case a video fails to load on a slow mobile connection
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 second absolute maximum load screen time
    
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <LoaderContext.Provider value={{ isLoading, setLoading: setIsLoading, loaderText, setLoaderText }}>
      {children}
      {/* Global Page Loader Overlay */}
      <PageLoader isLoading={isLoading} text={loaderText} />
    </LoaderContext.Provider>
  );
};
