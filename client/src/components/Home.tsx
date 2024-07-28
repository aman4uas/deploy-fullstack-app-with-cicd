import { Link } from 'react-router-dom'

const Home = () => {
  const currentTime = new Date()
  const year = currentTime.getFullYear()
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <header className="w-full p-4 bg-blue-500 text-white text-center text-3xl">
        Welcome to My Website
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-800">Hello, World!</h1>
        <p className="text-gray-600 mt-4">
          This is an example of an attractive home page using React, TypeScript, and Tailwind CSS.
        </p>
        <Link to="/data">
          <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Get Data from Server
          </button>
        </Link>
      </main>
      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        &copy; {year} My Website
      </footer>
    </div>
  )
}
export default Home
