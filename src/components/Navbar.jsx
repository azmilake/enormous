import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [offcanvas, setOffCanvas] = useState(false)

  return (
    <>
      <nav className="container mx-auto py-10 flex items-center px-5 lg:px-0">
        <div className="w-full lg:w-2/12">
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" />
            <h1 className="text-2xl font-bold">
              <a href="/">Enormous</a>
            </h1>
          </div>
        </div>
        <div className="lg:hidden inline-block text-right">
          <button onClick={() => setOffCanvas(!offcanvas)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:w-9/12 lg:flex justify-center">
          <ul className="text-base flex space-x-12">
            <Link to="/service">
              <li>Services</li>
            </Link>
            <Link to="/howwework">
              <li>How We Work</li>
            </Link>
            <Link to="/project">
              <li>Projects</li>
            </Link>
            <Link to="/blogs">
              <li>Blog</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:block w-1/12">
          <Link to="/contact">
            <button className="px-7 py-2 bg-white/20 text-white font-semibold text-sm rounded">
              Contact
            </button>
          </Link>
        </div>
      </nav>

      <div
        className={`fixed bg-default z-10 top-0 h-full w-full text-white p-10 lg:hidden -right-full transition-all duration-300 ${
          offcanvas ? 'left-0' : '-left-full'
        }`}
      >
        <div className="flex">
          <ul className="flex flex-col space-y-5 text-xl font-semibold">
            <Link to="/service">
              <li>Services</li>
            </Link>
            <Link to="/howwework">
              <li>How We Work</li>
            </Link>
            <Link to="/project">
              <li>Projects</li>
            </Link>
            <Link to="/blogs">
              <li>Blog</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <li>
              <button className="px-7 py-2 bg-white/20 text-white font-semibold text-sm rounded mt-5 lg:mt-0">
                Contact
              </button>
            </li>
          </ul>
          <button
            className="absolute right-10"
            onClick={() => setOffCanvas(!offcanvas)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
