import React, { useEffect, useState } from 'react';
import API from '../services/api';
import Table from '../components/Table';

const Audit = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAudit = async () => {
      setLoading(true);
      try {
        const res = await API.get('/audit');
        setLogs(res.data || []);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchAudit();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Audit Trail</h1>
        <p className="text-sm text-slate-500">System-wide operational and administrative activity logs</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <Table headers={['User', 'Action', 'Entity', 'Timestamp']} isLoading={loading}>
          {logs.map((l) => (
            <tr key={l._id || l.id} className="hover:bg-slate-50/70 border-b border-slate-100 last:border-none transition">
              <td className="px-6 py-4 font-bold text-slate-900">{l.user?.name || l.userId || 'System'}</td>
              <td className="px-6 py-4 font-mono text-xs text-blue-600 bg-blue-50/50 rounded-md w-max px-2 py-1">
                {l.action}
              </td>
              <td className="px-6 py-4 text-slate-600">{l.entityName || 'N/A'}</td>
              <td className="px-6 py-4 text-slate-500 text-xs">{new Date(l.createdDate || Date.now()).toLocaleString()}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Audit;