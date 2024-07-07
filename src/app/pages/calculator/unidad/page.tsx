"use client";

import React, { useState } from 'react';
import CustomNumberInput from '@/app/components/CustomNumberInput';

const Unidad = () => {

  const [simplesValue, setSimplesValue] = useState<number>(0);
  const [dulceDeLecheValue, setDulceDeLecheValue] = useState<number>(0);

  const precioSimples = 500;
  const precioDulceDeLeche = 600;

  const totalPrice = ((simplesValue * precioSimples) + (dulceDeLecheValue * precioDulceDeLeche)).toFixed(2);

  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="flex flex-col justify-center gap-8 items-center bg-gray-100 rounded-lg shadow-md p-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-brown">Unidad</h1>
        <div className='flex flex-col items-center'>
          <h3 className="text-lg md:text-2xl text-center text-brown">Churros Simples</h3>
          <CustomNumberInput value={simplesValue} onValueChange={setSimplesValue} />
        </div>
        <div className='flex flex-col items-center'>
          <h3 className="text-lg md:text-2xl text-center text-brown">Churros Dulce de Leche</h3>
          <CustomNumberInput value={dulceDeLecheValue} onValueChange={setDulceDeLecheValue} />
        </div>
        <div className="text-lg md:text-xl text-center mt-4">
          <h4>Precio Total: <strong>${totalPrice}</strong></h4>
        </div>
      </div>
    </div>
  );
};

export default Unidad;
