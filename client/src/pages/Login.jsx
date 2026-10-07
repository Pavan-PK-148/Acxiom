import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, Lock, Mail, ArrowRight, ShieldCheck, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { validateEmail } from '../utils/validators';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all required fields.');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/80 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Light Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10">
        
        {/* Left Hero/Branding Section */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold mb-8">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>AcxiomCRM Enterprise v2.0</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/20 shadow-sm">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">AcxiomCRM</span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight mb-4">
              Accelerate your entire sales pipeline.
            </h1>
            <p className="text-blue-100 text-sm leading-relaxed">
              Real-time customer analytics, lead tracking, and deal forecasting engineered for high-performing teams.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="space-y-3 my-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold">Real-time Revenue Analytics</p>
                <p className="text-blue-200/80">Live updates across all pipeline stages</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15">
              <div className="p-2 rounded-lg bg-blue-400/20 text-blue-200">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-bold">Automated Follow-ups</p>
                <p className="text-blue-200/80">Never miss a critical client touchpoint</p>
              </div>
            </div>
          </div>

          <div className="text-xs text-blue-100/70 pt-4 border-t border-white/15 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Acxiom Inc.</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" /> Encrypted Workspace</span>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-12 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome Back</h2>
                <p className="text-xs text-slate-500 mt-1">Sign in to access your sales workspace</p>
              </div>
              <span className="text-xs text-slate-400 font-mono font-semibold">SECURE AUTH</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@acxiom.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); toast('Contact system admin to reset credentials.', { icon: 'ℹ️' }); }} className="text-xs text-blue-600 hover:text-blue-700 font-semibold transition-colors">Forgot?</a>
                </div>
                <div className="relative">
                  <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-4 group"
              >
                {loading ? (
                  'Authenticating...'
                ) : (
                  <>
                    <span>Sign In to Workspace</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              Don't have an account yet?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-bold ml-1 hover:underline inline-flex items-center gap-1">
                Create an Account <ArrowRight className="w-3 h-3" />
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;