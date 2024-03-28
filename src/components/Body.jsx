import React from "react";
import { Link } from 'react-router-dom';

const Body = () => (
  <div className="bg-gradient-to-r from-blue-900 to-gray-800 flex  border-4 border-solid border-blue-500  py-20 bg-opacity-80 bg-cover bg-no-repeat">
    <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center border-4 border-yellow-300 rounded-md p-8">
      <div className="max-w-xl text-center md:text-left mb-4 md:mb-0 md:mr-4">
        <h2 className="font-black text-white text-3xl mb-4">Haz tu reserva con nosotros</h2>
        <p className="text-base text-white">Haz de cada viaje una historia para contar. Con nuestra agencia de viajes, te llevamos más allá de las expectativas, ofreciéndote aventuras auténticas y oportunidades para explorar el mundo de una manera que nunca imaginaste.</p>
      </div>
      <div className="md:flex md:flex-col">
       <Link to="/ReservationPage"><button className="text-blue-600 bg-yellow-300 hover:bg-white hover:text-black uppercase py-3 text-base px-10 border border-blue-300 transform transition-transform hover:scale-105 focus:outline-none mt-40 md:mt-0">Reservar</button></Link>
      </div>
    </div>
  </div>
);

export default Body;
