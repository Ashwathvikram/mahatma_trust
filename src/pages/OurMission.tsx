import { Target, Globe, HandHeart } from 'lucide-react';

export function OurMission() {
  return (
    <div className="pb-20">
      <div className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Our Mission</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            We are dedicated to creating lasting change by empowering communities and providing essential resources to those in need.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-16 px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000" 
              alt="Volunteers working" 
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why We Exist</h2>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2010, HopeTrust began with a simple idea: that everyone deserves a chance at a dignified life. We witnessed the disparity in access to basic necessities like water, education, and healthcare, and decided to act. Today, we operate in over 20 countries, bridging the gap between generosity and need.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Focused Impact</h3>
                  <p className="mt-2 text-slate-600">We identify specific, solvable problems within communities and channel resources directly to fix them.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Global Reach</h3>
                  <p className="mt-2 text-slate-600">From local neighborhoods to international borders, our network of volunteers ensures help arrives where it's needed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <HandHeart className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Human Connection</h3>
                  <p className="mt-2 text-slate-600">We believe in the power of empathy. Every donation creates a bond between the giver and the receiver.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
