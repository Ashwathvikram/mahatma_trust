import { CauseCard } from '../components/causes/CauseCard';
import { Cause } from '../types';

const allCauses: Cause[] = [
  {
    id: '1',
    title: 'Clean Water for All',
    description: 'Help us provide sustainable clean water solutions to remote villages in need. Your donation funds wells and filtration systems.',
    goalAmount: 50000,
    raisedAmount: 32500,
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&q=80&w=800',
    category: 'Environment'
  },
  {
    id: '2',
    title: 'Education for Children',
    description: 'Providing books, uniforms, and tuition for underprivileged children. Education is the key to breaking the cycle of poverty.',
    goalAmount: 25000,
    raisedAmount: 15000,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    category: 'Education'
  },
  {
    id: '3',
    title: 'Emergency Medical Aid',
    description: 'Delivering critical medical supplies and care to conflict zones. Immediate support saves lives in crisis situations.',
    goalAmount: 100000,
    raisedAmount: 85000,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
    category: 'Healthcare'
  },
  {
    id: '4',
    title: 'Reforestation Project',
    description: 'Planting trees to combat climate change and restore local ecosystems. Join us in greening the planet.',
    goalAmount: 15000,
    raisedAmount: 4500,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    category: 'Environment'
  },
  {
    id: '5',
    title: 'Food Security Initiative',
    description: 'Establishing community gardens and food banks to ensure no one goes to bed hungry.',
    goalAmount: 40000,
    raisedAmount: 28000,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    category: 'Community'
  },
  {
    id: '6',
    title: 'Animal Shelter Support',
    description: 'Providing shelter, food, and medical care for abandoned and abused animals.',
    goalAmount: 20000,
    raisedAmount: 18500,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=800',
    category: 'Animals'
  }
];

export function FeaturedCauses() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Featured Causes</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Browse our active campaigns. Every contribution, no matter the size, helps us reach our goals and make a tangible difference.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allCauses.map(cause => (
          <CauseCard key={cause.id} cause={cause} />
        ))}
      </div>
    </div>
  );
}
