import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <marquee className="text-3xl font-bold text-red-700 mb-4">
            One Click Apart From Saving A Life
          </marquee>
          <h1 className="text-5xl font-bold text-red-800 mb-6">रक्तADAHAAR</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-700">
              रक्तADAHAAR plays a vital role in connecting blood donors with those in need. 
              We maintain a comprehensive database of donors and their blood types, making it 
              easier to find matches during emergencies.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">Our Mission</h2>
              <ul className="space-y-3 text-gray-700">
                <li>• Maintain updated donor information</li>
                <li>• Track blood type availability</li>
                <li>• Connect donors with recipients</li>
                <li>• Facilitate emergency blood requests</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=600"
              alt="Blood Donation Process"
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600"
              alt="Blood Bank Storage"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}