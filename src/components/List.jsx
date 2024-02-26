import React from "react";

// Datos de ejemplo (puedes obtener estos datos de una API o base de datos)
const destinationsData = [
  { id: 1, name: "Venezuela", region: "Asia", duration: "2  días", price: 300 },
  { id: 2, name: "Africa", region: "Africa", duration: "3  días", price: 400 },
  { id: 3, name: "Caribe", region: "Caribe", duration: "7  días", price: 1300 },
  { id: 4, name: "Moscu", region: "Rusia", duration: "5  días", price: 500 },
  { id: 5, name: "Hawai", region: "Hawai", duration: "5  días", price: 800 },
  { id: 6, name: "Alaska", region: "Alaska", duration: "6  días", price: 1500 },
  { id: 7, name: "Maldivas", region: "Maldivas", duration: "4  días", price: 1500 },
  { id: 8, name: "republicadominicana", region: "Mikonos", duration: "6  días", price: 1800 }
  
];

const Menu = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center border-4 border-solid border-blue-500 bg-gradient-to-r from-blue-900 to-gray-800 py-20 max-content bg-cover bg-center bg-no-repeat">
      
      <div className="px-10 grid grid-cols-4 gap-4 ">
        {destinationsData.map((destination) => (
          <div key={destination.id} className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
            <div className="bg-white rounded-lg">
              <img src={`https://source.unsplash.com/1600x900/?${destination.name}`} className="h-40 rounded-md" alt={`Destination ${destination.id}`} />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 px-5">
                <span className="font-bold text-gray-800 text-lg">{destination.name}</span>
                <div className="text-sm text-gray-600 font-light">Conoce {destination.region}</div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600 font-light">A partir de {destination.duration}</div>
                  <div className="text-2xl text-red-600 font-bold">Desde €{destination.price}</div>
                </div>
                <button className="mt-4 text-blue-300 bg-white hover:bg-yellow-500 hover:text-black uppercase py-2 px-4 border border-blue-300 transition-transform transform hover:scale-105 focus:outline-none">
                  Reserva Ahora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
