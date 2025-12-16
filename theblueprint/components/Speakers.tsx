'use client';

import { useFetch } from '@/Hooks/useFetch';
import Image from 'next/image';

// Define the speaker type
interface Speaker {
  id: string;
  name: string;
  title: string;
  image: string;
}

const Speakers = () => {
  const { data: speakers, loading, error } = useFetch<Speaker[]>('/api/speakers');

  if (loading) {
    return (
      <section className="w-full min-h-screen bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-br-sonoma">Loading speakers...</p>
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
    <section id="speakers" className="w-full min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Speakers Header */}
        <div className="flex justify-center mb-16">
          <h1 className='font-br-sonoma font-bold text-black text-[112px]'>Speakers</h1>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {speakers?.map((speaker) => (
            <div key={speaker.id} className="flex flex-col items-center text-center">
              {/* Speaker Image - Circular */}
              <div className="relative w-64 h-64 mb-6">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover rounded-full grayscale"
                />
              </div>

              {/* Speaker Name */}
              <h3 className="text-2xl font-sans font-regular text-black mb-2">
                {speaker.name}
              </h3>

              {/* Speaker Title */}
              <p className="text-lg font-sans text-gray-500 uppercase tracking-wide">
                {speaker.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;