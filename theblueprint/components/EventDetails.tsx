'use client';

import { useFetch } from '@/Hooks/useFetch';
import Image from 'next/image';

// Define the types
interface EventDetails {
  id: string;
  description: string;
}

interface PastEvent {
  id: string;
  title: string;
  image: string;
  rotation?: number; // For tilted effect
  z:number;
}

const EventDetails = () => {
  const { data: eventDetails, loading: loadingDetails, error: errorDetails } = 
    useFetch<EventDetails>('/api/event-details');
  
  const { data: pastEvents, loading: loadingPastEvents, error: errorPastEvents } = 
    useFetch<PastEvent[]>('/api/past-events');

  if (loadingDetails || loadingPastEvents) {
    return (
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-sans">Loading...</p>
        </div>
      </section>
    );
  }

  if (errorDetails || errorPastEvents) {
    return (
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl font-sans text-red-600">
            Error: {errorDetails || errorPastEvents}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="event" className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="flex justify-center mb-16">
          <h1 className='font-br-sonoma font-bold text-black text-[112px]'>The Event</h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Event Description */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-sans font-regular text-black uppercase tracking-wide flex items-start gap-3">
                <span className="inline-block w-4 h-4 bg-black flex-shrink-0 mt-2"></span>
                <span>INTRODUCTION OF THIS EVENT</span>
              </h2>
            </div>
            <div>
              <p className="text-base md:text-lg font-sans leading-relaxed text-black">
                {eventDetails?.description}
              </p>
            </div>
          </div>

          {/* Right Column - Main Event Image (event-1) */}
          <div className="flex justify-center items-start">
            {pastEvents && pastEvents.length > 0 && (
              <div className="relative w-full max-w-md aspect-[3/4]">
                <Image
                  src={pastEvents[0].image}
                  alt={pastEvents[0].title}
                  fill
                  className="object-cover rounded-sm shadow-lg"
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>

        {/* Past Events Gallery Section - Shows event-2, event-3, event-4 */}
        {pastEvents && pastEvents.length > 1 && (
          <div className="mt-16">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-sans font-regular text-black uppercase tracking-wide flex items-start gap-3">
                <span className="inline-block w-4 h-4 bg-black flex-shrink-0 mt-2"></span>
                <span>OUR PAST EVENTS</span>
              </h2>
            </div>

            {/* Gallery with Tilted Images */}
            <div className="flex justify-center items-center flex-wrap lg:flex-nowrap">
              {pastEvents.slice(1, 4).map((event) => (
                <div
                  key={event.id}
                  className="relative w-96 h-96 flex-shrink-0 -mx-4"
                  style={{
                    // transform: `rotate(${event.rotation || 0}deg)`,
                    zIndex: event.z || 0, // Apply z-index from data

                  }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-sm"
                            unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventDetails;