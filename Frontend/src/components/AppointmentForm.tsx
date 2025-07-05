import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { getDoctors, createAppointment } from '@/lib/api';


const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientFirstName: '',
    patientLastName: '',
    department: '',
    doctorId: '',
    date: '',
    time: '',
    email: '',
    phone: ''
  });
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getDoctors()
      .then(res => setDoctors(res.data))
      .catch((err) => {
        setDoctors([]);
        setError('Could not fetch doctors. Please try again later.');
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      // Find doctor object
      const doctor = doctors.find(d => d._id === formData.doctorId);
      // Compose appointment payload
      const payload = {
        patient: {
          first_name: formData.patientFirstName,
          last_name: formData.patientLastName,
          email: formData.email,
          phone: formData.phone
        },
        doctor_id: formData.doctorId,
        appointment_date: formData.date,
        appointment_time: formData.time,
        department: formData.department
      };
      await createAppointment(payload, undefined);
      setSuccess('Appointment booked successfully!');
      setFormData({
        patientFirstName: '',
        patientLastName: '',
        department: '',
        doctorId: '',
        date: '',
        time: '',
        email: '',
        phone: ''
      });
    } catch (err: any) {
      setError('The clinic will review if an appointment is available or not.');
    } finally {
      setLoading(false);
    }
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
        {success && <div className="text-green-600 font-medium">{success}</div>}
        {error && <div className="text-red-600 font-medium">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="patientFirstName">First Name *</Label>
            <Input
              id="patientFirstName"
              type="text"
              required
              value={formData.patientFirstName}
              onChange={(e) => setFormData({ ...formData, patientFirstName: e.target.value })}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="patientLastName">Last Name *</Label>
            <Input
              id="patientLastName"
              type="text"
              required
              value={formData.patientLastName}
              onChange={(e) => setFormData({ ...formData, patientLastName: e.target.value })}
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="department">Department *</Label>
            <Select value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select Department" />
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
            <Label htmlFor="doctorId">Doctor *</Label>
            <Select value={formData.doctorId} onValueChange={(value) => setFormData({ ...formData, doctorId: value })}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select Doctor" />
              </SelectTrigger>
              <SelectContent>
                {doctors.length === 0 ? (
                  <SelectItem value="no-doctors" disabled>No doctors found</SelectItem>
                ) : (
                  doctors.map((doc) => (
                    <SelectItem key={doc._id} value={doc._id}>{doc.first_name} {doc.last_name}</SelectItem>
                  ))
                )}
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
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-md font-medium mt-6"
          disabled={loading}
        >
          {loading ? 'Booking...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default AppointmentForm;
