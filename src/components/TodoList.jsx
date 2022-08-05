import React, { useState } from 'react';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const [show, setShow] = useState(0);
  const [edit, setEdit] = useState(0);
  const [inputName, setInputName] = useState('');
  const [inputDes, setInputDes] = useState('');

  const handleUpdate = (id) => {
    console.log(id);
    console.log(inputName);
    console.log(inputDes);
    updateTodo(id, inputName, inputDes);
    setEdit(0);
  };

  return (
    <div className="">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className=" bg-white rounded-lg mb-5 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex justify-end px-4 pt-4 relative">
            <button
              onClick={() => (show === todo.id ? setShow(0) : setShow(todo.id))}
              data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700  focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </button>
            {/* Dropdown menu */}
            <div
              className={`z-10 w-24 top-16 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute ${
                show === todo.id ? 'block' : 'hidden'
              }`}
            >
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <button
                    onClick={() => {
                      setEdit(todo.id);
                      setInputName(todo.name);
                      setInputDes(todo.description);
                      setShow(false);
                    }}
                    className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="block w-full py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            {edit === todo.id ? (
              <>
                <input
                  type="text"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                />
                <input
                  type="text"
                  className="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={inputDes}
                  onChange={(e) => setInputDes(e.target.value)}
                />
                <div className="flex justify-content items-center gap-5">
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full md:w-40  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                      setEdit(0);
                      setShow(0);
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full md:w-40  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => handleUpdate(todo.id)}
                  >
                    Cambiar
                  </button>
                </div>
              </>
            ) : (
              <>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {todo.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {todo.description}
                </span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
