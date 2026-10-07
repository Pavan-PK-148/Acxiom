import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, Lock, Mail, User, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { validateEmail } from '../utils/validators';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  role: 'Sales Executive' // Changed from 'Sales Rep'
});
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, role } = formData;

    if (!name || !email || !password || !role) {
      toast.error('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const success = await register(formData);
      if (success) {
        toast.success('Account created successfully!');
        navigate('/dashboard');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/80 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Light Background Glows */}
      <div className="absolute top-10 -right-20 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10">
        
        {/* Left Hero/Branding Section */}
        <div className="lg:col-span-5 bg-gradient-to-br from-indigo-700 via-blue-700 to-slate-800 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold mb-8">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Onboarding Center</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-sm">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">AcxiomCRM</span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight mb-4">
              Join your team's unified CRM hub.
            </h1>
            <p className="text-blue-100 text-sm leading-relaxed">
              Create an account with role-based access control and collaborate on live deal pipelines.
            </p>
          </div>

          {/* Perks checklist */}
          <div className="space-y-3 my-8">
            <div className="flex items-center gap-3 text-xs text-blue-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Role-based permissions (Admin, Manager, Sales Rep)</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-blue-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Unified deal tracking & opportunity funnel</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-blue-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Audit logging & team activity feeds</span>
            </div>
          </div>

          <div className="text-xs text-blue-100/70 pt-4 border-t border-white/15 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Acxiom Inc.</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> SOC2 Compliant</span>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-12 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Create Account</h2>
                <p className="text-xs text-slate-500 mt-1">Set up your profile and workspace permissions</p>
              </div>
              <span className="text-xs text-slate-400 font-mono font-semibold">REGISTRATION</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@acxiom.com"
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Role Selector */}
              <div>
  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
    Role Designation
  </label>
  <div className="relative">
    <ShieldCheck className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 z-10 pointer-events-none" />
    <select
      value={formData.role}
      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all appearance-none cursor-pointer"
    >
      <option value="Sales Executive">Sales Executive</option>
      <option value="Manager">Manager</option>
      <option value="Admin">Admin</option>
    </select>
  </div>
</div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-3 group"
              >
                {loading ? (
                  'Creating Account...'
                ) : (
                  <>
                    <span>Complete Registration</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-bold ml-1 hover:underline inline-flex items-center gap-1">
                Sign In <ArrowRight className="w-3 h-3" />
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;