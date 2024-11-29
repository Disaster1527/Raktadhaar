import React from 'react';
import { DonorForm } from '../components/forms/DonorForm';

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-800 text-center mb-8">Donor Registration</h1>
        <DonorForm />
      </div>
    </div>
  );
}