import React from 'react'
import { toast } from 'react-toastify'

const Read = ({ todos, settodos }) => {
  const DeleteHandler = (id) => {
    const filtertodos = todos.filter((todo) => todo.id !== id)
    settodos(filtertodos)
    toast.error("Todo deleted!") // delete toast
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-200 mb-6">
        📋 Your Tasks
      </h2>
      <ol className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <span className="text-lg">{todo.title}</span>
            <button
              onClick={() => DeleteHandler(todo.id)}
              className="px-4 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Read
