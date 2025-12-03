import { Check, Minus } from 'lucide-react';

export function ComparisonTable() {
  return (
    <section className="py-12 overflow-x-auto">
      <div className="min-w-[600px]">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Impact Comparison</h3>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b-2 border-slate-100 w-1/3"></th>
              <th className="p-4 border-b-2 border-slate-100 text-center font-bold text-slate-900">One-Time Donation</th>
              <th className="p-4 border-b-2 border-slate-100 text-center font-bold text-primary-600 bg-primary-50/50 rounded-t-lg">Monthly Sponsor</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-100 font-medium text-slate-700">Immediate Aid Delivery</td>
              <td className="p-4 border-b border-slate-100 text-center"><Check className="mx-auto h-5 w-5 text-secondary" /></td>
              <td className="p-4 border-b border-slate-100 text-center bg-primary-50/30"><Check className="mx-auto h-5 w-5 text-secondary" /></td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-100 font-medium text-slate-700">Tax Deductible Receipt</td>
              <td className="p-4 border-b border-slate-100 text-center"><Check className="mx-auto h-5 w-5 text-secondary" /></td>
              <td className="p-4 border-b border-slate-100 text-center bg-primary-50/30"><Check className="mx-auto h-5 w-5 text-secondary" /></td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-100 font-medium text-slate-700">Long-term Project Sustainability</td>
              <td className="p-4 border-b border-slate-100 text-center"><Minus className="mx-auto h-5 w-5 text-slate-300" /></td>
              <td className="p-4 border-b border-slate-100 text-center bg-primary-50/30"><Check className="mx-auto h-5 w-5 text-secondary" /></td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-100 font-medium text-slate-700">Quarterly Impact Reports</td>
              <td className="p-4 border-b border-slate-100 text-center"><Minus className="mx-auto h-5 w-5 text-slate-300" /></td>
              <td className="p-4 border-b border-slate-100 text-center bg-primary-50/30"><Check className="mx-auto h-5 w-5 text-secondary" /></td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4 border-b border-slate-100 font-medium text-slate-700">Community Voting Rights</td>
              <td className="p-4 border-b border-slate-100 text-center"><Minus className="mx-auto h-5 w-5 text-slate-300" /></td>
              <td className="p-4 border-b border-slate-100 text-center bg-primary-50/30"><Check className="mx-auto h-5 w-5 text-secondary" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
