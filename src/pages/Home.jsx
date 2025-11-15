import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const featuredBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 12.99, image: "📚" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 14.99, image: "🦜" },
    { id: 3, title: "1984", author: "George Orwell", price: 13.99, image: "🔍" },
  ]

  const categories = [
    { name: "Fiction", count: "250+ Books", icon: "📖" },
    { name: "Science", count: "180+ Books", icon: "🔬" },
    { name: "History", count: "120+ Books", icon: "🏛️" },
    { name: "Biography", count: "90+ Books", icon: "👤" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hon aana el hero section*/}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Your Next Favorite Book</h1>
          <p className="text-xl mb-8 opacity-90">Thousands of books waiting to be explored</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/books" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Browse All Books
            </Link>
            <Link 
              to="/register" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map(book => (
              <div key={book.id} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-6xl text-center mb-4">{book.image}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{book.title}</h3>
                <p className="text-gray-600 text-center mb-2">by {book.author}</p>
                <p className="text-green-600 font-bold text-center text-lg mb-4">${book.price}</p>
                <Link 
                  to={`/book/${book.id}`}
                  className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg hover:bg-blue-600 transition"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition cursor-pointer">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="opacity-90">Books Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="opacity-90">Happy Readers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="opacity-90">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Reading?</h2>
          <p className="text-gray-600 mb-8 text-lg">Join our community of book lovers today</p>
          <Link 
            to="/register"
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition inline-block"
          >
            Sign Up Free
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home;