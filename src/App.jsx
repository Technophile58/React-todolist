import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
  const [todos, settodos] = useState([])

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      {/* Main Todo Box */}
      <div className="bg-gray-900 text-white shadow-2xl rounded-2xl p-10 w-full max-w-lg text-center border border-gray-700 mt-10">
        <h1 className="text-4xl font-extrabold mb-8 tracking-wide">
          ✅ Todo App
        </h1>

        <Create todos={todos} settodos={settodos} />

        <hr className="my-6 border-gray-700" />

        <Read todos={todos} settodos={settodos} />
      </div>

      {/* Footer */}
      <footer className="text-gray-400 text-sm py-6">
        Made with ❤️ by <span className="text-indigo-400 font-semibold">Tushar Pant</span>
      </footer>
    </div>
  )
}

export default App
