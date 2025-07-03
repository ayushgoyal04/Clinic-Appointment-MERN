import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Make an appointment</h2>
      <p className="text-gray-600 mb-6">
        Our healthcare professionals are dedicated to providing the best possible care
        for patients and are supported by complete radiology and imaging services 
        provided at Care point.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-gray-500 mb-4">Fields marked with an * are required</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="department">Department *</Label>
            <Select value={formData.department} onValueChange={(value) => setFormData({...formData, department: value})}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Cardiology" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="gynecology">Gynecology</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="radiology">Radiology</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="doctor">Doctor *</Label>
            <Select value={formData.doctor} onValueChange={(value) => setFormData({...formData, doctor: value})}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Christopher Barnes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="christopher-barnes">Christopher Barnes</SelectItem>
                <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                <SelectItem value="michael-davis">Michael Davis</SelectItem>
                <SelectItem value="emma-wilson">Emma Wilson</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date">When *</Label>
            <Input
              id="date"
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="time">What time *</Label>
            <Input
              id="time"
              type="time"
              required
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="mt-1"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-md font-medium mt-6"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AppointmentForm;