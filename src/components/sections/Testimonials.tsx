import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    content: "HopeTrust gave me the opportunity to see exactly where my money was going. Seeing the well being built in the village I sponsored was a life-changing moment for me.",
    author: "James Wilson",
    role: "Monthly Donor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '2',
    content: "The transparency and dedication of this team are unmatched. They don't just provide aid; they build relationships and sustainable futures.",
    author: "Sarah Thompson",
    role: "Corporate Partner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '3',
    content: "I volunteered with the medical camp last summer. The organisation and impact on the ground were incredible. Truly professional and compassionate.",
    author: "Dr. Emily Chen",
    role: "Volunteer Doctor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Voices of Impact</h2>
          <p className="mt-4 text-lg text-slate-600">Hear from our community of donors, volunteers, and partners.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-100" />
              <p className="mb-6 text-slate-600 italic leading-relaxed">"{item.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{item.author}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
