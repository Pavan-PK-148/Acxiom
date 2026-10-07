import React from 'react';
import StatCard from '../components/StatCard';
import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Reports Analytics</h1>
        <p className="text-sm text-slate-500">Conversion statistics and operational summary</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Lead Conversion" value="68%" icon={Target} color="emerald" trend="Up 12% from last month" />
        <StatCard title="Win Rate" value="42%" icon={TrendingUp} color="blue" trend="Stable performance" />
        <StatCard title="Avg Deal Size" value="$18,500" icon={BarChart3} color="amber" trend="Quarterly growth" />
        <StatCard title="Active Execs" value="8" icon={Users} color="purple" trend="Full capacity" />
      </div>
    </div>
  );
};

export default Reports;