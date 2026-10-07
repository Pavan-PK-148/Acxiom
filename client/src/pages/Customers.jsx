import React, { useState, useEffect } from 'react';
import API from '../services/api';
import Table from '../components/Table';
import Modal from '../components/Modal';
import { Plus } from 'lucide-react';
import { validateEmail, validatePhone } from '../utils/validators';
import toast from 'react-hot-toast';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const res = await API.get('/customers');
      setCustomers(res.data || []);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Name, email, and phone are mandatory.');
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error('Enter a valid email address.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      toast.error('Enter a valid 10-digit phone number.');
      return;
    }

    try {
      await API.post('/customers', formData);
      toast.success('Customer created successfully.');
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '', company: '' });
      fetchCustomers();
    } catch (err) {}
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Customer Management</h1>
          <p className="text-sm text-slate-500">View and manage customer master data</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all"
        >
          <Plus className="w-4 h-4" /> Add Customer
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <Table headers={['Name', 'Email', 'Phone', 'Company', 'Status']} isLoading={loading}>
          {customers.map((c) => (
            <tr key={c._id || c.id} className="hover:bg-slate-50/70 border-b border-slate-100 last:border-none transition">
              <td className="px-6 py-4 font-bold text-slate-900">{c.name}</td>
              <td className="px-6 py-4 text-slate-600">{c.email}</td>
              <td className="px-6 py-4 text-slate-600">{c.phone}</td>
              <td className="px-6 py-4 text-slate-600">{c.company || 'N/A'}</td>
              <td className="px-6 py-4">
                <span className="inline-block text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                  Active
                </span>
              </td>
            </tr>
          ))}
        </Table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Customer">
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Customer Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number (10 Digits)</label>
            <input
              type="text"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all mt-3"
          >
            Save Customer
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Customers;