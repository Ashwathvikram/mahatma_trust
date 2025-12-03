import { History } from 'lucide-react';
import { TeamMember } from '../types';
import { Timeline } from '../components/sections/Timeline';

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Executive Director',
    bio: 'Sarah has over 20 years of experience in non-profit management and international development.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'Head of Operations',
    bio: 'A former WHO consultant, Michael oversees all our field operations and medical camps.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Amara Okafor',
    role: 'Community Outreach',
    bio: 'Amara specializes in building relationships with local leaders to ensure sustainable impact.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'David Ross',
    role: 'Finance Director',
    bio: 'David ensures transparency and efficiency in how every dollar of donation is utilized.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  }
];

export function About() {
  return (
    <div className="pb-20">
      {/* Hero / History Split Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary">
                <History className="mr-2 h-4 w-4" />
                Established 2010
              </div>
              <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
                A Decade of Dedication
              </h1>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  HopeTrust began as a small grassroots initiative in a single community. What started with a group of friends distributing food on weekends has grown into a global organization touching thousands of lives.
                </p>
                <p>
                  Our philosophy remains unchanged: we believe that sustainable change comes from within the community. We don't just provide aid; we provide tools, education, and infrastructure that allow communities to thrive independently.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="text-3xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-500">Communities Served</div>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <div className="text-3xl font-bold text-slate-900">120k+</div>
                  <div className="text-sm text-slate-500">Lives Impacted</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-slate-100 -z-10 transform rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000" 
                alt="Our history" 
                className="rounded-2xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Journey</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Key milestones that have shaped our organization and mission.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              The passionate individuals working behind the scenes to make our mission a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.id} className="group bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
