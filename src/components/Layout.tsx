import React from 'react';
import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-red-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Heart className="h-8 w-8" />
            <span>रक्तADAHAAR</span>
          </Link>
          <nav className="space-x-6">
            <Link to="/" className={`hover:text-red-200 ${location.pathname === '/' ? 'text-red-200' : ''}`}>Home</Link>
            <Link to="/register" className={`hover:text-red-200 ${location.pathname === '/register' ? 'text-red-200' : ''}`}>Register</Link>
            <Link to="/search" className={`hover:text-red-200 ${location.pathname === '/search' ? 'text-red-200' : ''}`}>Search</Link>
            <Link to="/tips" className={`hover:text-red-200 ${location.pathname === '/tips' ? 'text-red-200' : ''}`}>Health Tips</Link>
            <Link to="/thanks" className={`hover:text-red-200 ${location.pathname === '/thanks' ? 'text-red-200' : ''}`}>Thank You</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-red-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2024 रक्तADAHAAR. One Click Apart From Saving A Life.</p>
        </div>
      </footer>
    </div>
  );
}