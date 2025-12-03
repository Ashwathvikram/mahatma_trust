import { 
  Stethoscope, 
  BookOpen, 
  Droplets, 
  Sprout, 
  Home, 
  BriefcaseMedical,
  LucideIcon
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SponsorshipTiers } from '../components/sections/SponsorshipTiers';
import { ComparisonTable } from '../components/sections/ComparisonTable';

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  BookOpen,
  Droplets,
  Sprout,
  Home,
  BriefcaseMedical
};

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Medical Camps',
    description: 'Regular free health check-ups and medicine distribution in remote rural areas lacking basic healthcare infrastructure.',
    iconName: 'Stethoscope'
  },
  {
    id: '2',
    title: 'Education Support',
    description: 'Providing scholarships, school supplies, and after-school tutoring programs for underprivileged children.',
    iconName: 'BookOpen'
  },
  {
    id: '3',
    title: 'Clean Water Projects',
    description: 'Installation of borewells and water purification systems to ensure access to safe drinking water.',
    iconName: 'Droplets'
  },
  {
    id: '4',
    title: 'Sustainable Farming',
    description: 'Training local farmers in sustainable agriculture techniques to improve crop yields and food security.',
    iconName: 'Sprout'
  },
  {
    id: '5',
    title: 'Shelter Rehabilitation',
    description: 'Rebuilding homes and community centers damaged by natural disasters or conflict.',
    iconName: 'Home'
  },
  {
    id: '6',
    title: 'Emergency Response',
    description: 'Rapid deployment of aid, food, and medical supplies during humanitarian crises.',
    iconName: 'BriefcaseMedical'
  }
];

export function Services() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">Our Services</h1>
          <p className="text-lg text-slate-600">
            We operate a diverse range of programs designed to address the root causes of poverty and inequality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Home;
            return (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-6 text-primary">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="border-t border-slate-200 pt-16">
          <SponsorshipTiers />
        </div>

        <div className="mt-16">
          <ComparisonTable />
        </div>
      </div>
    </div>
  );
}
