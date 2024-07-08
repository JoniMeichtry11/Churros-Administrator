"use client";

import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import ButtonPWA from './components/ButtonPWA';

const Home = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4 h-screen">
      <h1 className='text-2xl font-bold'>CHURROS ADMINISTRATOR</h1>
      <Button href="/pages/prices">
        Precios
      </Button>
      <Button href="/pages/calculator">
        Calculadora
      </Button>
      <ButtonPWA deferredPrompt={deferredPrompt} />
    </div>
  );
};

export default Home;
