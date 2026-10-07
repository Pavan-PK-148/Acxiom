import React from 'react';

const StatCard = ({ title, value, icon: Icon, trend, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border border-blue-100',
    emerald: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
    amber: 'bg-amber-50 text-amber-600 border border-amber-100',
    purple: 'bg-purple-50 text-purple-600 border border-purple-100',
    rose: 'bg-rose-50 text-rose-600 border border-rose-100',
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between hover:border-slate-300 transition-all group">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">{title}</p>
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{value}</h3>
        {trend && (
          <div className="flex items-center gap-1 mt-2">
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              {trend}
            </span>
          </div>
        )}
      </div>
      <div className={`p-3.5 rounded-xl transition-transform group-hover:scale-105 ${colorClasses[color] || colorClasses.blue}`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default StatCard;