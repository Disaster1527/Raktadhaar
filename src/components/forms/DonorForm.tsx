import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { useForm } from '../../hooks/useForm';
import { saveToLocalStorage } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export function DonorForm() {
  const navigate = useNavigate();
  
  const { formData, handleChange, handleSubmit, errors } = useForm({
    initialValues: {
      fullName: '',
      dateOfBirth: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      bloodType: '',
      lastDonation: '',
      medicalConditions: ''
    },
    onSubmit: (values) => {
      const success = saveToLocalStorage('donors', values);
      if (success) {
        alert('Registration successful! Thank you for registering as a donor.');
        navigate('/thanks');
      } else {
        alert('There was an error saving your registration. Please try again.');
      }
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.fullName) errors.fullName = 'Name is required';
      if (!values.email) errors.email = 'Email is required';
      if (!values.bloodType) errors.bloodType = 'Blood type is required';
      if (!values.phone) errors.phone = 'Phone number is required';
      if (!values.address) errors.address = 'Address is required';
      return errors;
    }
  });

  return (
    <Card className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />
          
          <Input
            label="Date of Birth"
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Blood Type
            </label>
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            >
              <option value="">Select Blood Type</option>
              {BLOOD_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.bloodType && (
              <p className="text-sm text-red-600">{errors.bloodType}</p>
            )}
          </div>

          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
            rows={3}
            required
          />
          {errors.address && (
            <p className="text-sm text-red-600">{errors.address}</p>
          )}
        </div>

        <Input
          label="Last Donation Date"
          type="date"
          name="lastDonation"
          value={formData.lastDonation}
          onChange={handleChange}
        />

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Medical Conditions
          </label>
          <textarea
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
            className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
            rows={3}
            placeholder="List any medical conditions or medications..."
          />
        </div>

        <Button type="submit" className="w-full">
          Register as Donor
        </Button>
      </form>
    </Card>
  );
}