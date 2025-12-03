import { Users, HandHeart, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function GetInvolved() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Get Involved</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            You don't have to be a millionaire to make a difference. Join our movement in a way that suits you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 transition-all hover:bg-slate-700">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
              <HandHeart className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Volunteer</h3>
            <p className="mb-6 text-slate-400">
              Join our team on the ground or remotely. Your time and skills are valuable assets to our cause.
            </p>
            <Link to="/contact" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
              Apply to Volunteer &rarr;
            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 transition-all hover:bg-slate-700">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary-500/10 text-secondary-400 group-hover:bg-secondary-500 group-hover:text-white transition-colors">
              <Megaphone className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Advocate</h3>
            <p className="mb-6 text-slate-400">
              Spread the word. Use your voice on social media to raise awareness about critical issues.
            </p>
            <Link to="/contact" className="text-secondary-400 hover:text-secondary-300 font-medium inline-flex items-center">
              Download Media Kit &rarr;
            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 transition-all hover:bg-slate-700">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-xl font-bold">Partner</h3>
            <p className="mb-6 text-slate-400">
              Corporate partnerships allow us to scale our impact. Let's work together for a better world.
            </p>
            <Link to="/contact" className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center">
              Become a Partner &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
