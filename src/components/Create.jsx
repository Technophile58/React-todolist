import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

const Create = ({ todos, settodos }) => {
  const [title, settitle] = useState("")

  const addTodo = () => {
    if (!title.trim()) return
    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    }
    settodos([...todos, newTodo])
    toast.success("Todo added successfully!") // success toast
    settitle("")
  }

  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        placeholder="Enter your todo..."
        className="flex-1 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={addTodo}
        className="px-5 py-2 bg-indigo-500 text-white font-medium rounded-lg shadow hover:bg-indigo-600 transition text-base"
      >
        Add
      </button>
    </div>
  )
}

export default Create
