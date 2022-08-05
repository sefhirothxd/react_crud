import React from 'react';

const FormAddTodo = ({ addTodo, user }) => {
  const addDataTodo = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const description = e.target[1].value;
    console.log(name, description);
    addTodo(name, description);
    e.target[0].value = '';
    e.target[1].value = '';
  };

  return (
    <form onSubmit={addDataTodo} className="mb-5">
      <div>
        <div>
          <label className="text-md text-blue-500 font-bold mb-2">
            Username
          </label>
          <p className="text-lg text-white font-bold mb-2">{user.username}</p>
        </div>
        <div>
          <label className="text-md text-blue-500 font-bold mb-2">Email</label>
          <p className="text-lg text-white font-bold mb-5">{user.email}</p>
        </div>
      </div>
      <div className="grid gap-6 mb-6 grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Titulo
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Lavar ropa"
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Descripcion
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Usar Ace como detergente"
          />
        </div>
      </div>
      <div className="flex justify-center item-flex">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default FormAddTodo;
