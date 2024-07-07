import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next'
import Button from './components/Button';
 
export const metadata: Metadata = {
  title: 'Next.js',
}

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4 h-screen">
      <h1 className='text-2xl font-bold'>CHURROS ADMINISTRATOR</h1>
      <Button href="/pages/prices">
        Precios
      </Button>
      <Button href="/pages/calculator">
        Calculadora
      </Button>
    </div>
  );
};

export default Home;
