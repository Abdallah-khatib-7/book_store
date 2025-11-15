import React from 'react'
import BookCard from '../components/BookCard'

function Books() {
  const books = [
    { 
      id: 1, 
      title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald", 
      price: 12.99,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop"
    },
    { 
      id: 2, 
      title: "To Kill a Mockingbird", 
      author: "Harper Lee", 
      price: 14.99,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop"
    },
    { 
      id: 3, 
      title: "1984", 
      author: "George Orwell", 
      price: 13.99,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop"
    },
    { 
      id: 4, 
      title: "Pride and Prejudice", 
      author: "Jane Austen", 
      price: 11.99,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop"
    },
    { 
      id: 5, 
      title: "The Hobbit", 
      author: "J.R.R. Tolkien", 
      price: 16.99,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=500&fit=crop"
    },
    { 
      id: 6, 
      title: "Harry Potter", 
      author: "J.K. Rowling", 
      price: 15.99,
      image: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855713.jpg"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Book Collection</h1>
          <p className="text-gray-600 text-lg">Discover amazing books for every reader</p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition">
            Load More Books
          </button>
        </div>
      </div>
    </div>
  )
}

export default Books