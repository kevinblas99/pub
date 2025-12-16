import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/blueprint-logo.png"
                alt="The BluePrint Series"
                width={200}
                height={40}
                priority
                className="h-auto w-auto"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            <Link
              href="#intro"
              className="text-black hover:text-gray-600 transition-colors font-br-sonoma text-base font-regular"
            >
              Intro
            </Link>
            <Link
              href="#agenda"
              className="text-black hover:text-gray-600 transition-colors font-br-sonoma text-base font-regular"
            >
              Agenda
            </Link>
            <Link
              href="#speakers"
              className="text-black hover:text-gray-600 transition-colors font-br-sonoma text-base font-regular"
            >
              Speaker
            </Link>
            <Link
              href="#tickets"
              className="bg-white hover:bg-gray-100 text-black pl-3 pr-10 py-1 transition-colors font-sans text-base border-l border-b border-black"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;