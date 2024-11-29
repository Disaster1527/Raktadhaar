import React from 'react';
import { Heart } from 'lucide-react';

export default function Thanks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <Heart className="h-16 w-16 text-red-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-red-800 mb-6">Thank You for Your Life-Saving Donation!</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-xl text-gray-700 mb-6">
            Your generous donation today is a gift of hope for those in need. You've made a difference 
            in the lives of many, and we couldn't be more grateful for your selflessness.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">Stay Safe</h3>
              <p className="text-gray-600">Make sure to rest and hydrate. Your well-being is important to us.</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">Track Your Impact</h3>
              <p className="text-gray-600">We'll notify you once your donation has helped someone in need.</p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">Spread the Word</h3>
              <p className="text-gray-600">Encourage others to join you in giving the gift of life.</p>
            </div>
          </div>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200"
          alt="Thank You"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
}