import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">BookStore</Link>
          <nav className="flex gap-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/books" className="hover:underline">Books</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header