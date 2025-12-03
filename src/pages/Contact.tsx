import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ContactFormData } from '../types';
import { useState } from 'react';
import { FAQ } from '../components/sections/FAQ';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-slate-600">
            Have questions about our work or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto mb-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100 h-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-primary-50 p-3 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Our Headquarters</h3>
                    <p className="mt-1 text-slate-600">
                      123 Charity Lane<br />
                      Westminster, London<br />
                      SW1A 1AA, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-secondary-50 p-3 text-secondary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email Us</h3>
                    <p className="mt-1 text-slate-600">
                      General: info@hopetrust.org<br />
                      Partnerships: partners@hopetrust.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-orange-50 p-3 text-orange-500">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Call Us</h3>
                    <p className="mt-1 text-slate-600">
                      +44 20 1234 5678<br />
                      <span className="text-sm text-slate-400">Mon-Fri, 9am - 6pm GMT</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="h-64 w-full rounded-xl bg-slate-200 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423056448!2d-0.1277582842293152!3d51.50332407963451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c5296309ad%3A0x23465187638622!2s10%20Downing%20St%2C%20London%20SW1A%202AA%2C%20UK!5e0!3m2!1sen!2sus!4v1623344823745!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-100">
            {isSuccess ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="mb-4 rounded-full bg-green-100 p-4 text-green-600">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="mt-2 text-slate-600">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button 
                  className="mt-8" 
                  variant="outline" 
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Your name"
                  />
                  {errors.name && <span className="mt-1 text-xs text-red-500">{errors.name.message}</span>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="you@example.com"
                  />
                  {errors.email && <span className="mt-1 text-xs text-red-500">{errors.email.message}</span>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={5}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none"
                    placeholder="How can we help you?"
                  />
                  {errors.message && <span className="mt-1 text-xs text-red-500">{errors.message.message}</span>}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Send Message</>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <FAQ />
        </div>
      </div>
    </div>
  );
}
