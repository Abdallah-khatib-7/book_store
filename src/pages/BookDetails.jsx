import React from 'react'
import { useParams } from 'react-router-dom'

function BookDetails() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Book Details</h1>
        <p>Details for book ID: {id}</p>
      </div>
    </div>
  )
}

export default BookDetails