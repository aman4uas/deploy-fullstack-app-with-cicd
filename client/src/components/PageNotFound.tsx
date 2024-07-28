import { Link } from 'react-router-dom'

const PageNotFound = () => {
  const currentTime = new Date()
  const year = currentTime.getFullYear()
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      <header className="w-full p-4 bg-blue-500 text-white text-center text-3xl">
        Welcome to My Website
      </header>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold text-gray-700">404</h1>
        <h2 className="text-4xl text-gray-600 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2">Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Home
        </Link>
      </div>
      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        &copy; {year} My Website
      </footer>
    </div>
  )
}

export default PageNotFound
