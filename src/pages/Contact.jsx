import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
      setTimeout(() => setError(null), 3000);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      setTimeout(() => setError(null), 3000);
      return;
    }

    // Simulate form submission
    try {
      setSubmitted(true);
      setError(null);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }, 3000);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-full max-w-md">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white/30 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-2xl w-full border border-white/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
            
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-white/50 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-white/50 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-white/50 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="bg-white/90 p-6 rounded-3xl text-center shadow-xl animate-fade-in">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Message Sent!</h2>
            <p className="text-gray-600">Thank you for contacting us. We'll respond soon.</p>
          </div>
        )}

        {/* Error Popup */}
        {error && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-xl shadow-xl max-w-xs md:max-w-md">
            <div className="flex items-center">
              <div className="text-xl mr-2">!</div>
              <span>{error}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;