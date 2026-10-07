import React, { useEffect, useState } from 'react';
import API from '../services/api';
import Table from '../components/Table';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await API.get('/users');
        setUsers(res.data || []);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">User Administration</h1>
        <p className="text-sm text-slate-500">Manage registered system accounts and permissions</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <Table headers={['Name', 'Email', 'Role', 'Status']} isLoading={loading}>
          {users.map((u) => (
            <tr key={u._id || u.id} className="hover:bg-slate-50/70 border-b border-slate-100 last:border-none transition">
              <td className="px-6 py-4 font-bold text-slate-900">{u.name}</td>
              <td className="px-6 py-4 text-slate-600">{u.email}</td>
              <td className="px-6 py-4">
                <span className="inline-block text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                  {u.role}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className="inline-block text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                  Active
                </span>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Users;