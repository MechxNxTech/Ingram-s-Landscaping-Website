
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { QuoteFormData, QuoteResult } from '../types';
import { generateQuotePDF } from '../services/pdfService';
import { Check, ArrowRight, Download, RefreshCw } from 'lucide-react';

const QuoteCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    yardSize: 5000,
    services: [],
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [result, setResult] = useState<QuoteResult | null>(null);

  const calculateQuote = () => {
    const items: { name: string; cost: number }[] = [];
    let total = 0;

    formData.services.forEach(serviceId => {
      const s = SERVICES.find(x => x.id === serviceId);
      if (s) {
        let cost = s.basePrice;
        if (s.id === 'mowing') {
          cost += Math.max(0, (formData.yardSize - 1000) / 1000) * s.unitPrice;
        } else if (s.id === 'mulching') {
          // Estimate 1 yard per 1000 sq ft for basic refreshing
          cost += (formData.yardSize / 1000) * s.unitPrice;
        } else if (s.id === 'patios' || s.id === 'walls') {
          // Assume minimal involvement for base quote
          cost += s.unitPrice * 50; 
        }
        items.push({ name: s.name, cost: Math.round(cost) });
        total += cost;
      }
    });

    setResult({ total: Math.round(total), items });
    setStep(4);
  };

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter(x => x !== id)
        : [...prev.services, id]
    }));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="bg-black p-6 text-white flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold uppercase tracking-wider">Instant Quote Engine</h2>
          <p className="text-gray-400 text-sm">Cleveland, TN Pricing</p>
        </div>
        <div className="text-3xl font-black text-accent">#{step}/4</div>
      </div>

      <div className="p-8">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-2xl font-bold">What's your approximate yard size?</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="1000"
                max="40000"
                step="500"
                value={formData.yardSize}
                onChange={(e) => setFormData({ ...formData, yardSize: parseInt(e.target.value) })}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
              <div className="flex justify-between text-sm text-gray-500 font-bold">
                <span>1,000 sq ft</span>
                <span className="text-2xl text-black font-black">{formData.yardSize.toLocaleString()} sq ft</span>
                <span>40,000 sq ft</span>
              </div>
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-accent transition-colors flex items-center justify-center gap-2"
            >
              Continue <ArrowRight size={20} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-2xl font-bold">Select Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map(s => (
                <div
                  key={s.id}
                  onClick={() => toggleService(s.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.services.includes(s.id)
                      ? 'border-accent bg-red-50'
                      : 'border-gray-200 hover:border-black'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{s.name}</span>
                    {formData.services.includes(s.id) && <Check className="text-accent" size={20} />}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep(1)} className="flex-1 py-4 border-2 border-black rounded-xl font-bold">Back</button>
              <button
                disabled={formData.services.length === 0}
                onClick={() => setStep(3)}
                className="flex-[2] py-4 bg-black text-white rounded-xl font-bold hover:bg-accent disabled:opacity-50 transition-colors"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="text-2xl font-bold">Your Details</h3>
            <div className="grid grid-cols-1 gap-4">
              <input
                placeholder="Full Name"
                className="p-4 rounded-xl border-2 border-gray-200 focus:border-accent outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                placeholder="Property Address in Cleveland/Bradley Co."
                className="p-4 rounded-xl border-2 border-gray-200 focus:border-accent outline-none"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Email"
                  className="p-4 rounded-xl border-2 border-gray-200 focus:border-accent outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  placeholder="Phone"
                  className="p-4 rounded-xl border-2 border-gray-200 focus:border-accent outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <button
              disabled={!formData.name || !formData.email || !formData.address}
              onClick={calculateQuote}
              className="w-full py-4 bg-accent text-white rounded-xl font-bold hover:bg-red-700 disabled:opacity-50 transition-colors"
            >
              Generate Instant Quote
            </button>
          </div>
        )}

        {step === 4 && result && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="text-center p-6 bg-green-50 border-2 border-green-200 rounded-2xl">
              <h3 className="text-xl font-bold text-green-800">Estimate Generated!</h3>
              <div className="text-5xl font-black my-4">${result.total.toLocaleString()}</div>
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest">Estimated Total</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold border-b pb-2">Breakdown</h4>
              {result.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-gray-700">
                  <span>{item.name}</span>
                  <span className="font-bold">${item.cost.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => generateQuotePDF(formData, result)}
                className="py-4 bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800"
              >
                <Download size={18} /> Download PDF
              </button>
              <button
                onClick={() => {
                  setStep(1);
                  setResult(null);
                  setFormData({ ...formData, services: [] });
                }}
                className="py-4 border-2 border-black rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} /> New Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteCalculator;
