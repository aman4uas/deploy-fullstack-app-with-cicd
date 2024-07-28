import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FetchData = () => {
  const currentTime = new Date()
  const year = currentTime.getFullYear()
  const [data, setData] = useState('No data from server yet !!')
  const [disableButton, setDisableButton] = useState(false)

  const clickHandler = async () => {
    try {
      setDisableButton(true)
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/data`)
      const data = response.data
      setData(data)
    } catch (error) {
      console.log(error)
      setData('Error getting data from server !!')
    } finally {
      setDisableButton(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      <header className="w-full p-4 bg-blue-500 text-white text-center text-3xl">
        Welcome to My Website
      </header>
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-gray-700">{data}</h1>
        <button
          onClick={clickHandler}
          disabled={disableButton}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Get Data from Server
        </button>
      </div>
      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        &copy; {year} My Website
        <Link className="mx-3 underline" to="/">
          Home
        </Link>
      </footer>
    </div>
  )
}

export default FetchData
