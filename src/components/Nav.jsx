import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ toggleMenu, toggleMenuDestinos, isMenuOpen, isDestinosOpen }) => {
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
                  {/* Add your button content */}
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
    </div>
  );
};

export default Nav;
