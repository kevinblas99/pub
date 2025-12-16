import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/Hero.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
        quality={100}
      />
      
      {/* Overlay for better text readability (optional) */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Centered Text Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <p className="text-lg md:text-xl mb-2 font-br-sonoma">
          May 14, 2025
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-br-sonoma mb-2">
          The Blue Print Series:
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-br-sonoma mb-2">
          A Fireside Chat with Rich Tu
        </h2>
        <p className="text-lg md:text-xl font-br-sonoma">
          Soho House, New York
        </p>
      </div>
    </section>
  );
};

export default Hero;