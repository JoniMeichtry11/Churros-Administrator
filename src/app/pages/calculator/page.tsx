import Button from '@/app/components/Button';
import React from 'react';

const Calculator = () => {
  return (
    <div className="container p-4 h-screen">
      <div className='flex flex-col justify-center gap-8 items-center'>
        <h1 className='text-5xl font-bold text-center mb-8'>Calculadora</h1>
        <Button href="/pages/calculator/docena">
          Calcular por docena
        </Button>
        <Button href="/pages/calculator/media-docena">
          Calcular por media docena
        </Button>
        <Button href="/pages/calculator/unidad">
          Calcular por unidad
        </Button>
        <h2 className='font-bold text-red-500 text-4xl'>¡¡¡IMPORTANTE!!!</h2>
        <h3 className='text-2xl'>Recordar al cliente que la oferta <strong>SIEMPRE</strong> es comprando la docena de churros.</h3>
      </div>
    </div>
  );
};

export default Calculator;
