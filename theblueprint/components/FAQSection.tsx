'use client';

import { useFetch } from '@/Hooks/useFetch';
import { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const { data: faqs, loading, error } = useFetch<FAQ[]>('/api/faqs');
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  if (loading) {
    return (
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-br-sonoma font-bold text-black text-[112px] mb-12">FAQ</h1>
          <p className="text-xl font-sans">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-br-sonoma font-bold text-black text-[112px] mb-12">FAQ</h1>
          <p className="text-xl font-sans text-red-600">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* FAQ Heading */}
        <h1 className="font-br-sonoma font-bold text-black text-[112px] mb-12">FAQ</h1>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs?.map((faq) => (
            <div key={faq.id} className="border-t border-gray-300">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center py-6 text-left hover:opacity-70 transition-opacity"
              >
                <span className="font-sans text-base md:text-lg font-normal uppercase tracking-wide text-black pr-4">
                  {faq.question}
                </span>
                <span className="text-3xl font-light flex-shrink-0 transition-transform duration-300" style={{
                  transform: openId === faq.id ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>
                  +
                </span>
              </button>

              {/* Answer - Expandable */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openId === faq.id ? '500px' : '0px',
                  opacity: openId === faq.id ? 1 : 0
                }}
              >
                <div className="pb-6 pr-12">
                  <p className="font-sans text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;