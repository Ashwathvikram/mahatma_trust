import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CauseCard } from '../components/causes/CauseCard';
import { Cause } from '../types';
import { Testimonials } from '../components/sections/Testimonials';
import { Newsletter } from '../components/sections/Newsletter';
import { QuickDonate } from '../components/home/QuickDonate';
import { MissionSummary } from '../components/home/MissionSummary';
import { GetInvolved } from '../components/home/GetInvolved';

// Mock data for preview
const featuredCauses: Cause[] = [
  {
    id: '1',
    title: 'Clean Water for All',
    description: 'Help us provide sustainable clean water solutions to remote villages in need.',
    goalAmount: 50000,
    raisedAmount: 32500,
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&q=80&w=800',
    category: 'Environment'
  },
  {
    id: '2',
    title: 'Education for Children',
    description: 'Providing books, uniforms, and tuition for underprivileged children.',
    goalAmount: 25000,
    raisedAmount: 15000,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    category: 'Education'
  },
  {
    id: '3',
    title: 'Emergency Medical Aid',
    description: 'Delivering critical medical supplies and care to conflict zones.',
    goalAmount: 100000,
    raisedAmount: 85000,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
    category: 'Healthcare'
  }
];

export function Home() {
  return (
    <div className="space-y-0 pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000" 
                alt="Background" 
                className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="container relative mx-auto px-4 pt-20 pb-32 text-center md:px-6">
          <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm border border-white/20 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            Urgent: Flood Relief Campaign Active
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg">
            Hope Starts With <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-300">Your Action</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-200 md:text-xl leading-relaxed">
            Join a global community dedicated to transforming lives. From clean water to education, your support builds a brighter future.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link to="/donate">
              <Button size="lg" className="w-full sm:w-auto min-w-[160px] text-lg h-14 shadow-lg shadow-primary/25">
                Donate Now
              </Button>
            </Link>
            <Link to="/mission">
              <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[160px] h-14 border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm bg-white/5">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Donate Widget */}
      <QuickDonate />

      {/* Mission Summary */}
      <MissionSummary />

      {/* Stats / Trust Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Impact in Numbers</h2>
            <p className="mt-4 text-slate-600">Transparency is at our core. Here is how your contributions are making a real-world difference.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="mb-6 rounded-full bg-primary-50 p-4 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
              <h3 className="text-lg font-semibold text-slate-700">Secure Donations</h3>
              <p className="mt-2 text-sm text-slate-500">Every transaction is encrypted and safe.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="mb-6 rounded-full bg-secondary-50 p-4 text-secondary">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">50k+</div>
              <h3 className="text-lg font-semibold text-slate-700">Lives Impacted</h3>
              <p className="mt-2 text-sm text-slate-500">Across 20+ countries worldwide.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
              <div className="mb-6 rounded-full bg-orange-50 p-4 text-orange-500">
                <Heart className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">$2M+</div>
              <h3 className="text-lg font-semibold text-slate-700">Funds Raised</h3>
              <p className="mt-2 text-sm text-slate-500">Directly funding critical projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Causes Preview */}
      <section className="container mx-auto px-4 py-24 md:px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Urgent Causes</h2>
            <p className="mt-2 text-slate-600">Support our most critical fundraising campaigns today.</p>
          </div>
          <Link to="/causes" className="hidden md:flex items-center text-primary font-medium hover:underline group">
            View all causes <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCauses.map(cause => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/causes">
            <Button variant="outline" className="w-full">View All Causes</Button>
          </Link>
        </div>
      </section>

      {/* Get Involved Section */}
      <GetInvolved />

      <Testimonials />
      
      <Newsletter />
    </div>
  );
}
