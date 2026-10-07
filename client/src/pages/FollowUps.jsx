import React, { useState, useEffect } from 'react';
import API from '../services/api';
import Table from '../components/Table';
import Modal from '../components/Modal';
import { Plus } from 'lucide-react';
import { validateFollowUpDate } from '../utils/validators';
import toast from 'react-hot-toast';

const FollowUps = () => {
  const [followups, setFollowups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ subject: '', followUpDate: '', status: 'Planned', notes: '' });

  const fetchFollowups = async () => {
    setLoading(true);
    try {
      const res = await API.get('/followups');
      setFollowups(res.data || []);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowups();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateFollowUpDate(formData.followUpDate);
    if (errorMsg) {
      toast.error(errorMsg);
      return;
    }

    try {
      await API.post('/followups', formData);
      toast.success('Follow-up scheduled.');
      setIsModalOpen(false);
      setFormData({ subject: '', followUpDate: '', status: 'Planned', notes: '' });
      fetchFollowups();
    } catch (err) {}
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Follow-Up Tasks</h1>
          <p className="text-sm text-slate-500">Schedule activities and maintain continuous touchpoints</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all"
        >
          <Plus className="w-4 h-4" /> Schedule Follow-Up
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <Table headers={['Subject', 'Follow-Up Date', 'Status', 'Notes']} isLoading={loading}>
          {followups.map((f) => (
            <tr key={f._id || f.id} className="hover:bg-slate-50/70 border-b border-slate-100 last:border-none transition">
              <td className="px-6 py-4 font-bold text-slate-900">{f.subject}</td>
              <td className="px-6 py-4 text-slate-600 font-medium">{new Date(f.followUpDate).toLocaleDateString()}</td>
              <td className="px-6 py-4">
                <span className="inline-block text-xs font-bold px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full">
                  {f.status}
                </span>
              </td>
              <td className="px-6 py-4 text-slate-600 max-w-xs truncate">{f.notes || 'N/A'}</td>
            </tr>
          ))}
        </Table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Schedule Follow-Up">
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Subject</label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Follow-Up Date</label>
            <input
              type="date"
              required
              value={formData.followUpDate}
              onChange={(e) => setFormData({ ...formData, followUpDate: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all mt-3"
          >
            Save Follow-Up
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default FollowUps;