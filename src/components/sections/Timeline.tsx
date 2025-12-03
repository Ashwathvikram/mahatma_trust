import { Calendar, CheckCircle2 } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "2010",
    title: "The Beginning",
    description: "HopeTrust was founded by a group of five volunteers in London, initially focusing on local food banks."
  },
  {
    year: "2013",
    title: "First International Project",
    description: "Expanded operations to East Africa, launching our first clean water initiative in rural Kenya."
  },
  {
    year: "2016",
    title: "Education Initiative",
    description: "Partnered with 50 schools to provide scholarships and supplies to over 5,000 children."
  },
  {
    year: "2019",
    title: "Global Response Team",
    description: "Established a rapid response unit for disaster relief, deploying to 3 major crisis zones in the first year."
  },
  {
    year: "2024",
    title: "Sustainable Future",
    description: "Launched the 'Green Communities' program, integrating environmental sustainability into all development projects."
  }
];

export function Timeline() {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {events.map((event, index) => (
        <div key={event.year} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          
          {/* Icon/Dot */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          
          {/* Content Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between space-x-2 mb-2">
              <div className="font-bold text-slate-900 text-lg">{event.title}</div>
              <time className="font-mono text-sm text-primary font-semibold">{event.year}</time>
            </div>
            <p className="text-slate-600">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
