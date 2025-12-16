'use client';

import { useFetch } from '@/Hooks/useFetch';

// Define the intro type
interface Intro {
  id: string;
  text: string;
}

const Intro = () => {
  const { data: intro, loading, error } = useFetch<Intro>('/api/intro');

  if (loading) {
    return (
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-sans">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-sans text-red-600">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="intro" className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hardcoded Title with Black Square Bullet */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-sans font-regular text-black uppercase tracking-wide flex items-start gap-3">
            <span className="inline-block w-4 h-4 bg-black flex-shrink-0 mt-2"></span>
            <span>INTRODUCTION OF THIS EVENT</span>
          </h2>
        </div>

        {/* Dynamic Content from API */}
        <div className="max-w-5xl">
          <p className="text-xl md:text-2xl lg:text-3xl font-sans leading-relaxed text-black">
            {intro?.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;