import React, { useState, useEffect } from 'react';
import API from '../services/api';
import Table from '../components/Table';
import Modal from '../components/Modal';
import { Plus } from 'lucide-react';
import { validateOpportunity } from '../utils/validators';
import toast from 'react-hot-toast';

const Opportunities = () => {
  const [opps, setOpps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', amount: 0, probability: 50, expectedCloseDate: '', stage: 'Qualification' });

  const fetchOpps = async () => {
    setLoading(true);
    try {
      const res = await API.get('/opportunities');
      setOpps(res.data || []);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOpps();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateOpportunity(formData);
    if (errorMsg) {
      toast.error(errorMsg);
      return;
    }

    try {
      await API.post('/opportunities', formData);
      toast.success('Opportunity created successfully.');
      setIsModalOpen(false);
      setFormData({ name: '', amount: 0, probability: 50, expectedCloseDate: '', stage: 'Qualification' });
      fetchOpps();
    } catch (err) {}
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Sales Opportunities</h1>
          <p className="text-sm text-slate-500">Track and manage high-value deal pipelines</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all"
        >
          <Plus className="w-4 h-4" /> Add Opportunity
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <Table headers={['Opportunity', 'Amount', 'Probability', 'Stage', 'Close Date']} isLoading={loading}>
          {opps.map((o) => (
            <tr key={o._id || o.id} className="hover:bg-slate-50/70 border-b border-slate-100 last:border-none transition">
              <td className="px-6 py-4 font-bold text-slate-900">{o.name}</td>
              <td className="px-6 py-4 text-slate-900 font-bold">${Number(o.amount).toLocaleString()}</td>
              <td className="px-6 py-4 text-slate-600 font-medium">{o.probability}%</td>
              <td className="px-6 py-4">
                <span className="inline-block text-xs font-bold px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                  {o.stage}
                </span>
              </td>
              <td className="px-6 py-4 text-slate-600 font-medium">{new Date(o.expectedCloseDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </Table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Opportunity">
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Opportunity Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Amount ($ &gt; 0)</label>
            <input
              type="number"
              required
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Probability (0-100%)</label>
            <input
              type="number"
              required
              value={formData.probability}
              onChange={(e) => setFormData({ ...formData, probability: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Expected Close Date</label>
            <input
              type="date"
              required
              value={formData.expectedCloseDate}
              onChange={(e) => setFormData({ ...formData, expectedCloseDate: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all mt-3"
          >
            Save Opportunity
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Opportunities;