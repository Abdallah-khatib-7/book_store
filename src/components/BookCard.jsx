import React from 'react'
import { Link } from 'react-router-dom'

function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
      <div className="h-64 overflow-hidden">
        <img 
          src={book.image} 
          alt={book.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
     
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-3">by {book.author}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-bold text-lg">${book.price}</span>
          <Link 
            to={`/book/${book.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookCard