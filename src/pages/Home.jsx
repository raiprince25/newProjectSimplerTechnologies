import React, { useState } from "react";
import UserCard from "../components/UserCard";
import { FiArrowRight, FiUsers, FiGlobe, FiTrendingUp } from "react-icons/fi";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Sample user data
  const users = [
    { name: "John Doe", email: "john@example.com", role: "Frontend Developer" },
    { name: "Jane Smith", email: "jane@example.com", role: "UX Designer" },
    { name: "Robert Brown", email: "robert@example.com", role: "Backend Engineer" },
  ];

  const features = [
    { icon: <FiUsers className="w-6 h-6" />, title: "Global Network", description: "Connect with professionals worldwide" },
    { icon: <FiGlobe className="w-6 h-6" />, title: "Diverse Community", description: "Join people from all backgrounds" },
    { icon: <FiTrendingUp className="w-6 h-6" />, title: "Growth Focused", description: "Tools to help you succeed" },
  ];

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519751138087-5e79faf5e5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundColor: "#0f172a" // fallback
      }}
    >
      {/* Hero Section */}
      <div className="bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Welcome to SimplerTechnologies
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore new opportunities, connect with people, and grow together in our vibrant community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 transition-all flex items-center justify-center">
            Get Started <FiArrowRight className="ml-2" />
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full border border-white/20 hover:bg-white/20 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Why Choose SimplerTechnologies?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all hover:-translate-y-1"
            >
              <div className="bg-purple-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20 w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {users.map((user, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="transition-all duration-300"
            >
              <UserCard 
                name={user.name} 
                email={user.email}
                role={user.role}
                isHovered={hoveredCard === index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied members who are already growing with SimplerTechnologies.
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Home;