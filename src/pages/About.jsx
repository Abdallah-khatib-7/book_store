import React from 'react'

function About() {
  const team = [
    { 
      name: "Sarah Johnson", 
      role: "Founder & CEO", 
      image: "data:image/jpeg;base64,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" 
    },
    { 
      name: "Abdallah Khatib", 
      role: "Head of Collections", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
    },
    { 
      name: "Emily Davis", 
      role: "Customer Experience", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
    },
    { 
      name: "Alex Rodriguez", 
      role: "Tech Lead", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
    }
  ]

  const features = [
    { 
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop", 
      title: "Free Shipping", 
      desc: "On orders over $25" 
    },
    { 
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop", 
      title: "10,000+ Books", 
      desc: "Curated collection" 
    },
    { 
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=100&h=100&fit=crop", 
      title: "Gift Cards", 
      desc: "Perfect for readers" 
    },
    { 
      image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=100&h=100&fit=crop", 
      title: "Secure Payment", 
      desc: "Safe & encrypted" 
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Our Bookstore</h1>
          <p className="text-xl opacity-90">Your trusted partner in discovering great books since 2010</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, our bookstore began as a small neighborhood shop with a simple mission: 
              to connect readers with books they'll love. Today, we've grown into a trusted online destination 
              serving book lovers worldwide.
            </p>
            <p className="text-lg text-gray-600">
              We carefully curate our collection to include both timeless classics and exciting new releases, 
              ensuring there's something for every type of reader.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            To inspire a love of reading by making quality books accessible to everyone, 
            while providing exceptional service to our community of readers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About