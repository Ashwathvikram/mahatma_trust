import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface Tier {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Friend",
    price: 10,
    description: "Support our daily operations and help us keep the lights on.",
    features: [
      "Monthly newsletter",
      "Digital supporter badge",
      "Annual impact report",
      "Tax deductible receipt"
    ]
  },
  {
    name: "Guardian",
    price: 25,
    description: "Directly support a specific project or community initiative.",
    features: [
      "All Friend benefits",
      "Quarterly project updates",
      "Video messages from the field",
      "Exclusive webinar access"
    ],
    recommended: true
  },
  {
    name: "Hero",
    price: 50,
    description: "Make a significant impact and transform lives every month.",
    features: [
      "All Guardian benefits",
      "Personal impact manager",
      "VIP event invitations",
      "Named recognition on website"
    ]
  }
];

export function SponsorshipTiers() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Monthly Sponsorship</h2>
        <p className="mt-4 text-slate-600">Choose a level of support that works for you.</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div 
            key={tier.name} 
            className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all hover:shadow-lg ${
              tier.recommended 
                ? 'border-primary-500 bg-white ring-1 ring-primary-500 scale-105 z-10' 
                : 'border-slate-200 bg-white'
            }`}
          >
            {tier.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Most Popular
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-4 flex items-baseline text-slate-900">
                <span className="text-4xl font-bold tracking-tight">${tier.price}</span>
                <span className="ml-1 text-sm font-semibold text-slate-500">/month</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">{tier.description}</p>
            </div>

            <ul className="mb-8 space-y-4 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-secondary-500" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/donate" className="w-full">
              <Button 
                variant={tier.recommended ? 'primary' : 'outline'} 
                className="w-full"
              >
                Become a {tier.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
