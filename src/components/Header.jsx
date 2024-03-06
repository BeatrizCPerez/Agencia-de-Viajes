import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinosOpen, setIsDestinosOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuDestinos = () => {
    setIsDestinosOpen(!isDestinosOpen);
  };

  return (
    <div className="relative w-full">
      <nav className="fixed z-20 w-full bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <a href="http://localhost:5173/" aria-label="logo" className="flex space-x-2 items-center">
                <img src="../src/img/sol.png" className="w-12" alt="tailus logo" width="144" height="133" />
                <span className="text-2xl font-bold text-white">Viaja<span className="text-yellow-300">Disfruta</span></span>
              </a>

              <button
                aria-label="hamburger"
                id="hamburger"
                className="relative w-10 h-10 -mr-2 lg:hidden"
                onClick={toggleMenu}
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transition duration-300"
                ></div>
              </button>
            </div>

            <div
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-blue-700 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12`}
            >
              <div className="text-white lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                  <li>
                    <a href="#" className="block md:px-4 transition hover:text-yellow-700 font-bold">
                      <span>Destinos</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block md:px-4 transition hover:text-yellow-700">
                      <span>Ofertas</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block md:px-4 transition hover:text-yellow-700">
                      <span>Experiencias</span>
                    </a>
                  </li>
                  <li className="md:hidden">
                    <button
                      className="block md:px-4 transition hover:text-yellow-700 focus:outline-none"
                      onClick={toggleMenuDestinos}
                    >
                      <span>Destinos</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`bi bi-chevron-down w-4 h-4 ml-1 transition transform ${isDestinosOpen ? 'rotate-180' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 5l7 7 7-7H1z" />
                      </svg>
                    </button>
                  </li>
                </ul>
                {isDestinosOpen && (
                  <ul className="space-y-6 tracking-wide font-medium text-sm md:hidden">
                    <li>
                      <a href="#" className="block md:px-4 transition hover:text-yellow-700 font-bold">
                        <span>Europa</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block md:px-4 transition hover:text-yellow-700">
                        <span>Caribe</span>
                      </a>
                    </li>
                    {/* Agrega más destinos si es necesario */}
                  </ul>
                )}
              </div>
              <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                >
                </button>
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                >
                 <Link to="/Loginpage"><span className="block text-yellow-900 font-bold text-sm">Iniciar sesión</span></Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='flex  items-center justify-center  bg-fixed bg-parallax bg-cover'>
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <div className="bg-opacity-20 p-6 rounded-md border-2  flex flex-col items-center justify-center text-center">
                <h1 className="font-bold text-4xl text-white md:text-3.8xl lg:w-14/18">
                  Tu aventura comienza aquí
                </h1>
                <form action="" className="w-full mt-12">
                  <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
                    <select className="w-2/4 p-3 rounded-full bg-transparent md:block md:p-4 mr-4" name="domain" id="domain">
                      <option value="design">Destinos</option>
                      <option value="development">Europa</option>
                      <option value="marketing">Caribe</option>
                      <option value="marketing">Asia</option>
                      <option value="marketing">África</option>
                    </select>
                    <input placeholder="Busca tu destino" className="w-full p-4 rounded-full" type="text" />
                    <button
                      type="button"
                      title="Start buying"
                      className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                    >
                      <span className="hidden text-yellow-900 font-semibold md:block">Buscar</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="bi bi-search w-5 mx-auto text-white md:hidden"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
              <img
                src="./src/img/piña-colada1.png"
                className="relative animate-bounce animate-infinite"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
