import React from 'react';
import Image from 'next/image'

const Prices = () => {
  return (
    <div className='container flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold text-center mb-8'>Precios</h1>
      <h2 className='text-4xl font-semibold mb-6'>Una Docena</h2>
      <div className="flex gap-4 my-4 bg-[#D5B89A] p-4 rounded-lg max-w-md">
        <div className="w-1/3">
          <Image
            src="/images/simples.png"
            layout="responsive"
            width={500}
            height={500}
            className='rounded-xl'
            alt="Picture of the author"
          />
        </div>
        <div className='text-center flex flex-col justify-between'>
          <h1 className='text-4xl'>Simples</h1>
          <h1 className='text-4xl font-bold'>$4000</h1>
        </div>
      </div>
      <div className="flex gap-4 my-4 bg-[#D5B89A] p-4 rounded-lg max-w-md">
        <div className="w-1/2">
          <Image
            src="/images/simples.png"
            layout="responsive"
            width={500}
            height={500}
            className='rounded-xl'
            alt="Picture of the author"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/images/dulce.png"
            layout="responsive"
            width={500}
            height={500}
            className='rounded-xl'
            alt="Picture of the author"
          />
        </div>
        <div className='text-center flex flex-col justify-between'>
          <h1 className='text-xl'>Dulce de leche</h1>
          <h1 className='text-4xl font-bold'>$4500</h1>
        </div>
      </div>
      <h2 className='text-4xl font-semibold my-6'>Media Docena</h2>
      <div className="flex gap-4 my-4 bg-[#D5B89A] p-4 rounded-lg max-w-md">
        <div className="w-1/3">
          <Image
            src="/images/simples.png"
            layout="responsive"
            width={500}
            height={500}
            className='rounded-xl'
            alt="Picture of the author"
          />
        </div>
        <div className='text-center flex flex-col justify-between'>
          <h1 className='text-4xl'>Simples</h1>
          <h1 className='text-4xl font-bold'>$3000</h1>
        </div>
      </div>
      <div className="flex gap-4 my-4 bg-[#D5B89A] p-4 rounded-lg max-w-md">
        <div className="w-1/2">
          <Image
            src="/images/simples.png"
            layout="responsive"
            width={500}
            height={500}
            className='rounded-xl'
            alt="Picture of the author"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/images/dulce.png"
            layout="responsive"
            width={500}
            height={500}
            className='rounded-xl'
            alt="Picture of the author"
          />
        </div>
        <div className='text-center flex flex-col justify-between'>
          <h1 className='text-xl'>Dulce de leche</h1>
          <h1 className='text-4xl font-bold'>$3500</h1>
        </div>
      </div>
    </div>
  );
};

export default Prices;
