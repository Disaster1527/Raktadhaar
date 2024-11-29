import React, { useState } from 'react';
import { getFromLocalStorage } from '../utils/storage';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

interface SearchResult {
  fullName: string;
  bloodType: string;
  address: string;
  phone: string;
  email: string;
}

export default function Search() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    bloodType: ''
  });
  
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const donors = getFromLocalStorage('donors') || [];
    const filtered = donors.filter((donor: any) => 
      (!searchParams.location || donor.address.toLowerCase().includes(searchParams.location.toLowerCase())) &&
      (!searchParams.bloodType || donor.bloodType === searchParams.bloodType)
    );
    setSearchResults(filtered);
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-800 text-center mb-8">Find Blood Donors</h1>

        <div className="max-w-4xl mx-auto">
          <Card>
            <form onSubmit={handleSearch} className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Location</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter city or area"
                    value={searchParams.location}
                    onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Blood Type</label>
                  <select
                    className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={searchParams.bloodType}
                    onChange={(e) => setSearchParams({...searchParams, bloodType: e.target.value})}
                  >
                    <option value="">Any Blood Type</option>
                    {BLOOD_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-6"
              >
                Search Donors
              </Button>
            </form>
          </Card>

          {searched && (
            <div className="mt-8">
              {searchResults.length > 0 ? (
                <div className="grid gap-4">
                  {searchResults.map((donor, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">{donor.fullName}</h3>
                          <p className="text-gray-600 mt-2">Blood Type: <span className="font-semibold">{donor.bloodType}</span></p>
                          <p className="text-gray-600">Location: {donor.address}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-600">Contact:</p>
                          <p className="font-semibold">{donor.phone}</p>
                          <p className="text-sm text-gray-500">{donor.email}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-6 text-center">
                  <p className="text-gray-600">No donors found matching your criteria. Try adjusting your search parameters.</p>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}