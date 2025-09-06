import React from 'react'
import { toast } from 'react-toastify'

const Read = ({ todos, settodos }) => {
  const DeleteHandler = (id) => {
    const filtertodos = todos.filter((todo) => todo.id !== id)
    settodos(filtertodos)
    toast.error("Todo deleted!") 
  }

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
    settodos(updatedTodos)
    toast.info("Todo updated!")
  }

  return (
    <div className="mt-6 w-full">
      <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-center md:text-left">
        📋 Your Tasks
      </h2>
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">No tasks yet. Add one!</p>
      ) : (
        <ol className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex flex-col md:flex-row md:justify-between md:items-center bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col">
                <span
                  className={`text-lg ${
                    todo.isCompleted ? "line-through text-gray-400" : "text-white"
                  }`}
                >
                  {todo.title}
                </span>
                <span className="text-sm text-gray-400">
                  📅 {todo.date}
                </span>
              </div>
              <div className="flex gap-2 mt-3 md:mt-0">
                <button
                  onClick={() => toggleComplete(todo.id)}
                  className={`px-3 py-1 rounded-md text-sm ${
                    todo.isCompleted
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white transition`}
                >
                  {todo.isCompleted ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => DeleteHandler(todo.id)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default Read
