import React from 'react';

const Form = ({ getDataProfile, error }) => {
  const getDataFrom = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const discord = e.target[1].value;
    getDataProfile(email, discord);
  };

  return (
    <form
      onSubmit={getDataFrom}
      className="flex justify-center items-center w-80 flex-col gap-3 bg-gray-700 rounded-lg p-3"
    >
      <h1 className="text-center text-2xl text-white ">Larnu Porfil</h1>
      <h2 className="text-center text-md text-red-400">
        {error.response?.data?.message}
      </h2>
      <div className="relative mb-2 w-full ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@larnu.com"
        />
      </div>
      <div className="relative mb-2 w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <p className=" text-gray-500 dark:text-gray-400">ID</p>
        </div>
        <input
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="123456789"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Buscar
      </button>
    </form>
  );
};

export default Form;
