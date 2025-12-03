import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Check, Heart, Loader2, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import { UserProfile, DonationFrequency } from '../types';

const PREDEFINED_AMOUNTS = [10, 25, 50, 100, 250, 500];

export function Donate() {
  const [frequency, setFrequency] = useState<DonationFrequency>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<UserProfile>();

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(val)) {
      setCustomAmount(val);
      setSelectedAmount(null);
    }
  };

  const onSubmit = async (data: UserProfile) => {
    const finalAmount = selectedAmount || parseFloat(customAmount);
    if (!finalAmount || finalAmount <= 0) {
      alert('Please select or enter a valid donation amount.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Donation processed:', { ...data, amount: finalAmount, frequency });
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 rounded-full bg-green-100 p-6 text-green-600">
          <Check className="h-12 w-12" />
        </div>
        <h2 className="mb-2 text-3xl font-bold text-slate-900">Thank You!</h2>
        <p className="mb-8 text-slate-600">
          Your generous donation has been received. A receipt has been sent to your email.
        </p>
        <Button onClick={() => setIsSuccess(false)}>Make Another Donation</Button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Left Column: Impact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Donate Today</h1>
              <p className="mt-4 text-lg text-slate-600">
                Your contribution directly supports our mission to bring hope and resources to communities in need.
              </p>
            </div>
            
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-secondary" />
                Secure Donation
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                All transactions are encrypted and secure. We value your privacy and transparency.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-primary-600 p-8 text-white">
              <Heart className="absolute -right-4 -top-4 h-32 w-32 opacity-10" />
              <blockquote className="relative">
                <p className="text-lg font-medium italic">
                  "The smallest act of kindness is worth more than the grandest intention."
                </p>
                <footer className="mt-4 text-primary-100">— Oscar Wilde</footer>
              </blockquote>
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
              
              {/* Frequency Toggle */}
              <div className="mb-8 flex rounded-lg bg-slate-100 p-1">
                <button
                  onClick={() => setFrequency('one-time')}
                  className={cn(
                    "flex-1 rounded-md py-2.5 text-sm font-medium transition-all",
                    frequency === 'one-time' 
                      ? "bg-white text-primary shadow-sm" 
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  One-time
                </button>
                <button
                  onClick={() => setFrequency('recurring')}
                  className={cn(
                    "flex-1 rounded-md py-2.5 text-sm font-medium transition-all",
                    frequency === 'recurring' 
                      ? "bg-white text-primary shadow-sm" 
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  Monthly
                </button>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="mb-3 block text-sm font-medium text-slate-700">Select Amount</label>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
                  {PREDEFINED_AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={cn(
                        "flex h-12 items-center justify-center rounded-lg border text-lg font-semibold transition-all",
                        selectedAmount === amount
                          ? "border-primary bg-primary-50 text-primary ring-1 ring-primary"
                          : "border-slate-200 bg-white text-slate-600 hover:border-primary-200 hover:bg-slate-50"
                      )}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                    <input
                      type="text"
                      placeholder="Custom Amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className={cn(
                        "w-full rounded-lg border bg-white py-3 pl-8 pr-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500",
                        customAmount && !selectedAmount ? "border-primary ring-1 ring-primary" : "border-slate-200"
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Donor Information Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h3 className="mb-4 text-lg font-semibold text-slate-900">Your Information</h3>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">First Name</label>
                    <input
                      {...register("firstName", { required: "First name is required" })}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="John"
                    />
                    {errors.firstName && <span className="text-xs text-red-500">{errors.firstName.message}</span>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Last Name</label>
                    <input
                      {...register("lastName", { required: "Last name is required" })}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="Doe"
                    />
                    {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                </div>

                <Button 
                  type="submit" 
                  className="mt-6 w-full text-lg h-12" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>
                  ) : (
                    `Donate ${selectedAmount ? `$${selectedAmount}` : customAmount ? `$${customAmount}` : ''} ${frequency === 'recurring' ? 'Monthly' : ''}`
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
