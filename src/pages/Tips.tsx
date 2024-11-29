import React from 'react';

export default function Tips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-800 text-center mb-8">Tips for Healthy Blood</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">Nutrition Tips</h2>
              <ul className="space-y-3">
                <li>• Eat iron-rich foods (lean meats, spinach, beans)</li>
                <li>• Include vitamin C sources for better iron absorption</li>
                <li>• Consume B-vitamins through whole grains and eggs</li>
                <li>• Add antioxidant-rich foods (berries, nuts, dark chocolate)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">Lifestyle Habits</h2>
              <ul className="space-y-3">
                <li>• Stay hydrated with 8-10 glasses of water daily</li>
                <li>• Exercise regularly for better circulation</li>
                <li>• Get 7-9 hours of quality sleep</li>
                <li>• Manage stress through meditation or yoga</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">Things to Avoid</h2>
              <ul className="space-y-3">
                <li>• Limit alcohol consumption</li>
                <li>• Avoid smoking and tobacco products</li>
                <li>• Reduce processed food intake</li>
                <li>• Minimize exposure to environmental toxins</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-red-700 mb-4">Regular Monitoring</h2>
              <ul className="space-y-3">
                <li>• Schedule regular health check-ups</li>
                <li>• Monitor iron and hemoglobin levels</li>
                <li>• Track your blood pressure</li>
                <li>• Maintain a healthy weight</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <img 
            src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200"
            alt="Healthy Lifestyle"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}