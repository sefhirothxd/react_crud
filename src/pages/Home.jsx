import React, { useContext, useEffect } from 'react';
import { useAxios } from '../services/useAxios';
import { TodoContext } from '../context/UseTodoProvider';
import TodoList from '../components/TodoList';
import FormAddTodo from '../components/FormAddTodo';

const Home = () => {
  const { setTodos, todos, token, user } = useContext(TodoContext);
  const { fetchData, loading, error } = useAxios();

  const getTodos = async () => {
    const res = await fetchData({
      method: 'GET',
      url: '/todos',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {},
    });
    console.log(res);
    setTodos(res?.data);
  };
  const addTodo = async (name, description) => {
    await fetchData({
      method: 'POST',
      url: '/todos',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        description,
      },
    });
    await getTodos();
  };

  const deleteTodo = async (id) => {
    await fetchData({
      method: 'DELETE',
      url: `/todos/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {},
    });
    await getTodos();
  };

  const updateTodo = async (id, name, description) => {
    await fetchData({
      method: 'PUT',
      url: `/todos/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        description,
      },
    });
    await getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-2xl text-white font-bold">Cargando...</p>
      ) : (
        <div className="w-full bg-black rounded-lg border p-5 border-gray-200 shadow-md grid col-span-1 row-span-1  gap-5 pt-10">
          <FormAddTodo addTodo={addTodo} user={user} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </div>
      )}
    </>
  );
};

export default Home;
