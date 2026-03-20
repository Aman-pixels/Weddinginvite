import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Home from './pages/Home';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && <Loader onOpen={() => setIsLoaded(true)} />}
      </AnimatePresence>

      {isLoaded && <Home />}
    </>
  );
}

export default App;
