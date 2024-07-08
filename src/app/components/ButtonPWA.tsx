import React from 'react';

interface ButtonPWAProps {
  deferredPrompt: any;
}

const ButtonPWA: React.FC<ButtonPWAProps> = ({ deferredPrompt }) => {
  const handleInstallClick = () => {
    if (deferredPrompt) {
      console.log("deferredPrompt");
      
      deferredPrompt.prompt(); // Mostrar el prompt de instalación
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó la instalación');
        } else {
          console.log('El usuario canceló la instalación');
        }
        deferredPrompt(null); // Limpiar el evento almacenado
      });
    } else {
      console.log("not deferred");
    }
  };

  return (
    <button onClick={handleInstallClick} className='group relative overflow-hidden bg-[#9aabd5] focus:ring-4 focus:ring-[#e0e6ff] inline-flex items-center px-10 py-4 rounded-lg text-lg justify-center'>
      Instalar en el dispositivo
    </button>
  );
};

export default ButtonPWA;
