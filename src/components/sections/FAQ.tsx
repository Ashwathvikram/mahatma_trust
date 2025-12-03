import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much of my donation actually goes to the cause?",
    answer: "We are proud to say that 92% of every donation goes directly to our programs. The remaining 8% covers essential administrative costs and fundraising efforts to ensure the organization's sustainability."
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes, HopeTrust is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law. You will receive an email receipt immediately after donating."
  },
  {
    question: "Can I cancel my recurring donation at any time?",
    answer: "Absolutely. You have full control over your giving. You can pause, modify, or cancel your monthly sponsorship at any time through your donor portal or by contacting our support team."
  },
  {
    question: "How do you choose which projects to fund?",
    answer: "We work closely with local community leaders to identify the most pressing needs. Our field experts conduct thorough feasibility studies and impact assessments before any project is approved."
  },
  {
    question: "Can I volunteer with HopeTrust?",
    answer: "Yes! We have both local and international volunteer opportunities. Please visit our 'Get Involved' page or contact us for more information on current openings."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-slate-200 rounded-lg bg-white overflow-hidden transition-all"
          >
            <button
              className="flex w-full items-center justify-between p-4 text-left font-medium text-slate-900 hover:bg-slate-50 focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-slate-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-500" />
              )}
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
