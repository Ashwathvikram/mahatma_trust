import { Cause } from '../../types';
import { formatCurrency, cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface CauseCardProps {
  cause: Cause;
  className?: string;
}

export function CauseCard({ cause, className }: CauseCardProps) {
  const percentage = Math.min(100, Math.round((cause.raisedAmount / cause.goalAmount) * 100));

  return (
    <div className={cn("group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md border border-slate-100", className)}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={cause.image}
          alt={cause.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
          {cause.category}
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{cause.title}</h3>
        <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1">
          {cause.description}
        </p>

        <div className="space-y-3">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-primary">{formatCurrency(cause.raisedAmount)}</span>
            <span className="text-slate-500">of {formatCurrency(cause.goalAmount)}</span>
          </div>
          
          <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
            <div 
              className="h-full bg-secondary transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          <div className="flex justify-between items-center pt-2">
            <span className="text-xs font-medium text-slate-500">{percentage}% Funded</span>
            <Link to="/donate">
              <Button size="sm" variant="outline">Donate</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
