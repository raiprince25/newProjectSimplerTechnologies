import React from "react";
import { FiTarget, FiEye, FiUsers, FiAward, FiBriefcase, FiHeart } from "react-icons/fi";

const About = () => {
  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50+", label: "Countries" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Satisfaction" }
  ];

  const teamMembers = [
    { name: "Alex Johnson", role: "CEO & Founder", fact: "Loves skydiving on weekends" },
    { name: "Sarah Chen", role: "CTO", fact: "Former chess champion" },
    { name: "Marcus Lee", role: "Lead Designer", fact: "Avid photographer" },
    { name: "Elena Rodriguez", role: "Community Manager", fact: "Polyglot speaking 5 languages" }
  ];

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundColor: "#0f172a" // fallback
      }}
    >
      {/* Hero Section */}
      <div className="bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10 max-w-6xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          About <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">SimplerTechnologies</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We're revolutionizing how people connect and grow in the digital age through innovative technology and human-centered design.
        </p>
      </div>

      {/* Core Values */}
      <div className="mt-16 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all hover:-translate-y-1">
            <div className="bg-pink-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-400">
              <FiTarget className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-gray-300">
              To bridge gaps between communities through cutting-edge technology that feels human, accessible, and joyful to use.
            </p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all hover:-translate-y-1">
            <div className="bg-purple-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-400">
              <FiEye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
            <p className="text-gray-300">
              A world where technology fosters genuine human connection across all borders, cultures, and backgrounds.
            </p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-1">
            <div className="bg-blue-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
              <FiHeart className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Values</h2>
            <p className="text-gray-300">
              Integrity, innovation, and inclusivity drive everything we do. We believe technology should empower, not isolate.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 w-full max-w-4xl bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-white/10">
        <h2 className="text-3xl font-bold text-white mb-10">By The Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-12">Meet The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:shadow-lg transition-all hover:-translate-y-2"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-purple-400 mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm italic">"{member.fact}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 w-full max-w-4xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Be part of something bigger. Together, we're building the future of human connection.
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default About;