'use client';

import { useFetch } from '@/Hooks/useFetch';

// Define the agenda item type
interface AgendaItem {
  id: string;
  timeStart: string;
  timeEnd: string;
  title: string;
  description: string;
  location: string;
}

const Agenda = () => {
  const { data: agendaItems, loading, error } = useFetch<AgendaItem[]>('/api/agenda');

  if (loading) {
    return (
      <section className="w-full min-h-screen bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-br-sonoma">Loading agenda...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full min-h-screen bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-br-sonoma text-red-600">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="agenda" className="w-full min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Agenda Header */}
        <div className="flex justify-center mb-16">
            <h1 className='font-br-sonoma font-bold text-black text-[112px]'>Agenda</h1>
        </div>

        {/* Agenda Items */}
        <div className="space-y-8">
          {agendaItems?.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start border-l-4 border-black pl-6 py-2"
            >
              {/* Time and Title Column */}
              <div className="md:col-span-3">
                <p className="text-sm md:text-base font-sans mb-1 text-black">
                  {item.timeStart} - {item.timeEnd}
                </p>
                <p className="text-base md:text-lg font-sans font-regular uppercase text-black">
                  {item.title}
                </p>
              </div>

              {/* Description Column */}
              <div className="md:col-span-6">
                <p className="text-sm md:text-base font-sans leading-relaxed text-black">
                  {item.description}
                </p>
              </div>

              {/* Location Column */}
              <div className="md:col-span-3 text-left md:text-right text-black">
                <p className="text-sm md:text-base font-sans font-regular uppercase">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;