import React, { useState, useEffect } from 'react';
import API from '../services/api';
import Table from '../components/Table';
import Modal from '../components/Modal';
import { Plus } from 'lucide-react';
import { validateEmail, validatePhone } from '../utils/validators';
import toast from 'react-hot-toast';

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', source: 'Web', expectedValue: 0 });

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await API.get('/leads');
      setLeads(res.data || []);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Lead Name, email, and phone are mandatory.');
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
      await API.post('/leads', formData);
      toast.success('Lead created successfully.');
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '', source: 'Web', expectedValue: 0 });
      fetchLeads();
    } catch (err) {}
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Lead Lifecycle</h1>
          <p className="text-sm text-slate-500">Capture and qualify incoming business leads</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all"
        >
          <Plus className="w-4 h-4" /> Add Lead
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <Table headers={['Lead Name', 'Email', 'Phone', 'Source', 'Expected Value', 'Status']} isLoading={loading}>
          {leads.map((l) => (
            <tr key={l._id || l.id} className="hover:bg-slate-50/70 border-b border-slate-100 last:border-none transition">
              <td className="px-6 py-4 font-bold text-slate-900">{l.name}</td>
              <td className="px-6 py-4 text-slate-600">{l.email}</td>
              <td className="px-6 py-4 text-slate-600">{l.phone}</td>
              <td className="px-6 py-4 text-slate-600 font-medium">{l.source}</td>
              <td className="px-6 py-4 text-slate-900 font-bold">${Number(l.expectedValue).toLocaleString()}</td>
              <td className="px-6 py-4">
                <span className="inline-block text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                  {l.status || 'New'}
                </span>
              </td>
            </tr>
          ))}
        </Table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Lead">
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Lead Name</label>
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
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number</label>
            <input
              type="text"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Expected Value ($)</label>
            <input
              type="number"
              value={formData.expectedValue}
              onChange={(e) => setFormData({ ...formData, expectedValue: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all mt-3"
          >
            Save Lead
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Leads;