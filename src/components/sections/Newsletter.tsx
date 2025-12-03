import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Newsletter() {
  return (
    <section className="bg-primary-900 py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary-800 px-6 py-12 shadow-2xl sm:px-12 lg:px-16">
          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Stay Connected with Our Mission
              </h2>
              <p className="mt-4 text-lg text-primary-100">
                Join our newsletter to receive monthly updates on our projects, success stories from the field, and opportunities to get involved.
              </p>
            </div>
            <div className="w-full max-w-md lg:ml-auto">
              <form className="flex flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-grow">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-primary-300" />
                  </div>
                  <input
                    type="email"
                    className="block w-full rounded-lg border-0 bg-white/10 py-3 pl-10 pr-4 text-white placeholder:text-primary-300 focus:ring-2 focus:ring-white/50 sm:text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <Button variant="secondary" className="w-full sm:w-auto">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="mt-3 text-xs text-primary-300">
                We care about your data in our <a href="#" className="underline hover:text-white">privacy policy</a>.
              </p>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/20 p-32 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary-500/20 p-32 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
