import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  UserPlus, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Star,
  Lock,
  PieChart
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* Landing Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20">
            A
          </div>
          <div>
            <h1 className="font-extrabold text-lg text-slate-900 tracking-tight leading-none">ACXIOMCRM</h1>
            <p className="text-[10px] text-blue-600 font-medium tracking-wider uppercase">Sales Intelligence Platform</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="text-blue-600 font-semibold hover:text-blue-700 transition">Home</a>
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#modules" className="hover:text-blue-600 transition">Modules</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-md shadow-blue-600/20 hover:bg-blue-700 transition flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-20 px-6 lg:px-16 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100/70 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              CRM for Modern Sales Teams
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Manage Customers, Leads and Opportunities Smarter with <span className="text-blue-600">ACXIOMCRM</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              A complete CRM solution to streamline your sales workflow, improve team productivity, and drive sustainable business growth.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/login"
                className="px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#how-it-works"
                className="px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold hover:bg-slate-50 transition flex items-center gap-2 shadow-sm"
              >
                <Play className="w-4 h-4 text-blue-600 fill-blue-600" /> Watch Demo
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                <span>Role-based Access</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Powerful Reporting</span>
              </div>
            </div>
          </div>

          {/* Hero Laptop Preview Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-2xl rounded-2xl bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-900/10">
              <div className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
                {/* Mock UI Banner inside Laptop */}
                <div className="bg-slate-900 text-white px-4 py-2 flex items-center justify-between text-xs border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-semibold text-slate-300">AcxiomCRM Dashboard</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Pankaj Kumar (Sales Executive)</span>
                </div>

                <div className="p-4 bg-slate-50 text-slate-800 space-y-4 text-xs">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Customers</p>
                      <p className="text-base font-bold text-slate-900">248</p>
                      <span className="text-[10px] text-emerald-600 font-semibold">+12%</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Open Leads</p>
                      <p className="text-base font-bold text-slate-900">84</p>
                      <span className="text-[10px] text-emerald-600 font-semibold">+8%</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Opportunities</p>
                      <p className="text-base font-bold text-slate-900">36</p>
                      <span className="text-[10px] text-amber-600 font-semibold">+15%</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                      <p className="text-[10px] text-slate-500 uppercase font-semibold">Follow-Ups</p>
                      <p className="text-base font-bold text-slate-900">17</p>
                      <span className="text-[10px] text-rose-600 font-semibold">5 Due</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2 bg-white p-3 rounded-lg border border-slate-200 shadow-sm h-28 flex flex-col justify-between">
                      <p className="font-bold text-slate-800">Sales Pipeline</p>
                      <div className="w-full h-16 bg-blue-50/60 rounded flex items-end p-2 gap-1.5">
                        <div className="w-1/5 bg-blue-300 h-1/2 rounded-t" />
                        <div className="w-1/5 bg-blue-400 h-3/4 rounded-t" />
                        <div className="w-1/5 bg-blue-500 h-2/3 rounded-t" />
                        <div className="w-1/5 bg-blue-600 h-full rounded-t" />
                        <div className="w-1/5 bg-indigo-600 h-4/5 rounded-t" />
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm h-28 flex flex-col justify-between">
                      <p className="font-bold text-slate-800">Lead Sources</p>
                      <div className="flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full border-4 border-blue-500 border-t-amber-400 border-r-emerald-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Capabilities Section */}
      <section id="modules" className="py-20 px-6 lg:px-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900">
              What You Can Do with <span className="text-blue-600">ACXIOMCRM</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              End-to-end CRM capabilities to manage your entire sales cycle efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Customer Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Centralize customer data, contacts, interaction history, and active client statuses in one place.
              </p>
              <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <UserPlus className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Lead Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Capture, qualify, assign, and track prospective leads through every stage of the sales funnel.
              </p>
              <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Opportunity Pipeline</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Track business opportunities, deal value, pipeline stages, probability, and expected close dates.
              </p>
              <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Follow-Up Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Schedule, manage, and track sales follow-ups with automated reminders and meeting notes.
              </p>
              <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Reports & Analytics</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Gain actionable insights with real-time role dashboards, KPI tracking, and pipeline distribution charts.
              </p>
              <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/80 hover:border-blue-200 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">User & Role Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Manage system users, roles, permissions, security lockouts, and comprehensive audit logs.
              </p>
              <Link to="/login" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Workflow */}
      <section id="how-it-works" className="py-20 px-6 lg:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900">How It Works</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A simple and structured workflow to manage your entire sales journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-start space-y-3">
              <span className="text-2xl font-black text-blue-600">01</span>
              <h4 className="font-bold text-slate-900 text-base">Add Customers</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Store customer information and contacts in one place.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-start space-y-3">
              <span className="text-2xl font-black text-emerald-600">02</span>
              <h4 className="font-bold text-slate-900 text-base">Manage Leads</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Capture, qualify, and assign leads to your sales reps.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-start space-y-3">
              <span className="text-2xl font-black text-amber-600">03</span>
              <h4 className="font-bold text-slate-900 text-base">Create Opportunities</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Track pipeline stages, expected close date, and deal value.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-start space-y-3">
              <span className="text-2xl font-black text-purple-600">04</span>
              <h4 className="font-bold text-slate-900 text-base">Schedule Follow-Ups</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Set reminders and never miss a key touchpoint with clients.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-start space-y-3">
              <span className="text-2xl font-black text-rose-600">05</span>
              <h4 className="font-bold text-slate-900 text-base">Close & Grow</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Convert qualified leads into revenue and scale your sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Every Role */}
      <section className="py-20 px-6 lg:px-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900">Built for Every Role</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Custom experiences and access based on user roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-blue-50/50 to-white p-6 rounded-2xl border border-blue-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Admin</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manage users, roles, system configuration, CRM data, reports, and security audit logs.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Full System Access
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-b from-emerald-50/50 to-white p-6 rounded-2xl border border-emerald-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                <PieChart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Manager</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monitor team performance, sales pipeline, leads, opportunities, and follow-ups.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Team Insights & Reporting
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-b from-purple-50/50 to-white p-6 rounded-2xl border border-purple-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Sales Executive</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Manage assigned customers, leads, opportunities, and follow-up activities.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Focused Sales Workspace
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Metrics */}
      <section className="py-16 px-6 lg:px-16 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Trusted by Growing Sales Teams</h3>
            <p className="text-xs text-slate-500">Real results with better visibility and stronger customer relationships.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <p className="text-3xl font-extrabold text-blue-600">500+</p>
              <p className="text-xs font-semibold text-slate-600 mt-1">Customers Managed</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <p className="text-3xl font-extrabold text-emerald-600">1,200+</p>
              <p className="text-xs font-semibold text-slate-600 mt-1">Leads Tracked</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <p className="text-3xl font-extrabold text-amber-600">350+</p>
              <p className="text-xs font-semibold text-slate-600 mt-1">Opportunities Closed</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <p className="text-3xl font-extrabold text-purple-600">40%</p>
              <p className="text-xs font-semibold text-slate-600 mt-1">Average Growth</p>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center space-y-3">
            <div className="flex justify-center text-amber-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm italic text-slate-700">
              "ACXIOMCRM has simplified our sales process. The dashboards and follow-up tracking help our team stay organized and productive."
            </p>
            <div>
              <p className="text-xs font-bold text-slate-900">Rohit Sharma</p>
              <p className="text-[10px] text-slate-500">Sales Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 px-6 lg:px-16 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Get started with ACXIOMCRM today and manage your customers, leads, opportunities, and follow-ups in one unified place.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-6 py-3 rounded-xl bg-white text-blue-600 font-bold text-sm shadow-md hover:bg-blue-50 transition flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Landing Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-400 px-6 lg:px-16 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-base">
              A
            </div>
            <div>
              <p className="font-bold text-slate-200 text-sm">ACXIOMCRM</p>
              <p className="text-[10px] text-slate-500">Sales Intelligence Platform</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#modules" className="hover:text-white transition">Modules</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <p>© 2026 ACXIOMCRM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;