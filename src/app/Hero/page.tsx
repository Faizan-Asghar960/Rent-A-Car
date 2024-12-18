
import Link from 'next/link';




const HeroSection = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Backgruond.jpg')" }} // Use Tailwind CSS for styling only
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-white text-5xl font-bold mb-4">Drive Your Dream Car Today</h1>
        <p className="text-white text-lg mb-8">Affordable and luxury car rentals at your convenience</p>

        <div className="flex gap-4">
          <Link href="/explore">
            <button className="bg-white text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Explore Cars
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



  
  