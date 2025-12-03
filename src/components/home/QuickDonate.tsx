import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const PRESET_AMOUNTS = [10, 25, 50, 100];

export function QuickDonate() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number | string>(25);
  const [isCustom, setIsCustom] = useState(false);

  const handleDonate = () => {
    // In a real app, you'd pass this state to the donate page via context or query params
    navigate('/donate');
  };

  return (
    <div className="relative z-20 -mt-24 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 sm:p-10">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-slate-900 lg:justify-start">
              <Heart className="h-6 w-6 text-rose-500 fill-current" />
              <span>Help Us Save Lives</span>
            </h2>
            <p className="mt-2 text-slate-600">
              Your contribution provides immediate relief to those in crisis.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 lg:w-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {PRESET_AMOUNTS.map((val) => (
                <button
                  key={val}
                  onClick={() => {
                    setAmount(val);
                    setIsCustom(false);
                  }}
                  className={cn(
                    "h-12 w-16 rounded-lg border font-semibold transition-all",
                    amount === val && !isCustom
                      ? "border-primary bg-primary-50 text-primary ring-1 ring-primary"
                      : "border-slate-200 text-slate-600 hover:border-primary-200 hover:bg-slate-50"
                  )}
                >
                  ${val}
                </button>
              ))}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                <input
                  type="number"
                  placeholder="Custom"
                  className={cn(
                    "h-12 w-24 rounded-lg border bg-transparent pl-6 pr-3 font-semibold focus:outline-none focus:ring-2 focus:ring-primary",
                    isCustom ? "border-primary ring-1 ring-primary" : "border-slate-200"
                  )}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setIsCustom(true);
                  }}
                  value={isCustom ? amount : ''}
                />
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-rose-500 hover:bg-rose-600"
              onClick={handleDonate}
            >
              Donate Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
