import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';

export function MissionSummary() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-primary-100 mix-blend-multiply blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-4 h-72 w-72 rounded-full bg-secondary-100 mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000" 
                alt="Volunteers helping community" 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-xl bg-white p-6 shadow-xl">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm font-medium text-slate-600">Years of Service</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold uppercase tracking-wide text-primary">Our Mission</h2>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Empowering Communities, <br />
              <span className="text-slate-500">Restoring Hope.</span>
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We believe that every person deserves access to clean water, education, and healthcare. Our mission is to bridge the gap between resources and need, creating sustainable change that lasts for generations.
            </p>
            
            <ul className="mt-8 space-y-4">
              {['Direct Community Engagement', 'Transparent Resource Allocation', 'Sustainable Development Goals'].map((item) => (
                <li key={item} className="flex items-center text-slate-700">
                  <CheckCircle2 className="mr-3 h-5 w-5 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link to="/mission">
                <Button variant="outline" size="lg">
                  Read Our Full Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
