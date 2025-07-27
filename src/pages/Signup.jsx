import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      console.log(`${isLogin ? "Login" : "Signup"} Success!`);
    }, 1500);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519751138087-5e79faf5e5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        backgroundColor: "#0f172a" // fallback
      }}
    >
      <div className="bg-gray-900/80 backdrop-blur-lg shadow-2xl rounded-3xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden border border-white/10">
        {/* Left: Form */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
          {success ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {isLogin ? "Login Successful!" : "Account Created!"}
              </h2>
              <p className="text-gray-300">
                {isLogin ? "Redirecting to dashboard..." : "Welcome to our community!"}
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>
              <p className="text-gray-300 text-center mb-6">
                {isLogin ? "Login to continue your journey" : "Join us today and get started"}
              </p>
              
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                )}
                
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                    required
                    minLength="6"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-medium transition-all ${isSubmitting 
                    ? 'bg-purple-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'} 
                    text-white shadow-lg hover:shadow-xl`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : isLogin ? "Sign In" : "Sign Up"}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-700"></div>
                <span className="px-3 text-gray-400 text-sm">OR</span>
                <div className="flex-1 border-t border-gray-700"></div>
              </div>

              {/* Social login */}
              <div className="flex justify-center space-x-4">
                <button 
                  className="p-3 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition"
                  aria-label="Sign in with Google"
                >
                  <FcGoogle size={20} />
                </button>
                <button 
                  className="p-3 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition"
                  aria-label="Sign in with GitHub"
                >
                  <FaGithub size={20} className="text-gray-300" />
                </button>
                <button 
                  className="p-3 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition"
                  aria-label="Sign in with LinkedIn"
                >
                  <FaLinkedin size={20} className="text-blue-400" />
                </button>
              </div>

              {/* Toggle */}
              <p className="text-gray-400 mt-6 text-center text-sm">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-purple-400 font-medium hover:text-purple-300 focus:outline-none"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </>
          )}
        </div>

        {/* Right: Background */}
        <div 
          className="hidden md:flex flex-1 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="w-full h-full bg-purple-900/20 backdrop-blur-sm flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Welcome to Our Platform</h3>
              <p className="text-gray-300">
                {isLogin 
                  ? "Continue your journey with us" 
                  : "Join thousands of happy users today"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;