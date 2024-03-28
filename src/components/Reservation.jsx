import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const Reservation = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [hotel, setHotel] = useState('');
  const [reservationAdded, setReservationAdded] = useState(false);

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSearchOptions();
    setReservationAdded(true);
  };

  const handleSearchOptions = async () => {
    // Simular búsqueda de opciones
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  

  const calculateNumberOfDays = (startDate, endDate) => {
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return Math.ceil(diffInDays);
  };

  const calculateNumberOfNights = (startDate, endDate) => {
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    return Math.floor(diffInDays);
  };

  return (
    <div className='bg-gradient-to-r from-blue-900 to-gray-800'>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mt-20 mb-4 text-gray-200">Reserva de Hotel</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="destination" className="block text-gray-200 font-medium mb-1">
                Destino:
              </label>
              <input
                type="text"
                id="destination"
                className="border rounded px-3 py-2 w-1/2"
                value={destination}
                onChange={handleDestinationChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="hotel" className="text-gray-200 block font-medium mb-1">
                Hotel:
              </label>
              <select
                id="hotel"
                className="border rounded px-3 py-2 w-1/2"
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
                required
              >
                <option value="">Selecciona un hotel</option>
                <option value="Hotel A">Hotel A</option>
                <option value="Hotel B">Hotel B</option>
                <option value="Hotel C">Hotel C</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="checkInDate" className="block font-medium mb-1 text-gray-200">
                Fecha de entrada:
              </label>
              <DatePicker
                id="checkInDate"
                className="border rounded px-3 py-2 w-full"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="checkOutDate" className="block font-medium mb-1 text-gray-200">
                Fecha de salida:
              </label>
              <DatePicker
                id="checkOutDate"
                className="border rounded px-3 py-2 w-full"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                minDate={checkInDate || new Date()}
                dateFormat="dd/MM/yyyy"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Añadir
            </button>
          </form>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="p-4 bg-gray-100 rounded-lg lg:mt-40 max-h-96 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-2">Resumen de la reserva:</h3>
            <p>
              <span className="font-semibold">Destino:</span> {destination}
            </p>
            <p>
              <span className="font-semibold">Fecha de entrada:</span>{' '}
              {checkInDate && checkInDate.toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Fecha de salida:</span>{' '}
              {checkOutDate && checkOutDate.toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold ">Hotel:</span> {hotel}
            </p>
            {reservationAdded && (
              <>
                <p>
                  <span className="font-semibold">Número de días:</span>{' '}
                  {checkInDate &&
                    checkOutDate &&
                    calculateNumberOfDays(checkInDate, checkOutDate)}
                </p>
                <p>
                  <span className="font-semibold">Número de noches:</span>{' '}
                  {checkInDate &&
                    checkOutDate &&
                    calculateNumberOfNights(checkInDate, checkOutDate)}
                </p>
                <div className="mt-4">
                  <Link
                    to="/pago"
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-4"
                  >
                    Confirmar
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
