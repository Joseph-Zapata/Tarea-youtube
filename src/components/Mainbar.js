import React from "react";

const Mainbar = () => {
  return (
    <header class="text-gray-700 body-font">
      <div class="container mx-auto flex flex-wrap mt-2 flex-col md:flex-row items-center">
        <a
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          <span class="ml-3 mb-1 text-xl">Youtube</span>
        </a>

        <nav class="inline-flex items-center border-0 px-3 focus:outline-none rounded text-base  w-2/4 mt-4">
          {/* Inicio barra de busqueda */}
          <div>
            <div className="inline-flex items-center border-0 px-3 focus:outline-none rounded text-base  w-4/4">
              <label className="flex mb-4 items-center relative">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 absolute text-gray-500 ml-2"
                >
                  <circle cx={11} cy={11} r={8} />
                  <line x1={21} y1={21} x2="16.65" y2="16.65" />
                </svg>
                <input
                  className="py-0 pr-4 pl-8 bg-gray-300 focus:border-transparent form-input rounded shadow-lg shadow-none text-gray-900 w-full"
                  type="text"
                  placeholder="Search..."
                />
              </label>
            </div>
          </div>
          {/* Fin barra de busqueda */}
        </nav>

        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
          <a class="mr-5 hover:text-gray-900">Iniciar sesion</a>
          <button class="inline-flex items-center bg-red-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base md:mt-0">
            Registrese Gratis
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Mainbar;
