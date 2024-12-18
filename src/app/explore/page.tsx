import React from "react";
import Navbar from "../compnents/Header";
import Link from 'next/link';
<Navbar/>
const cars = [
  {
    name: 'Tesla Model S',
    price: 'PKR.15,000/day',
    image: '/Tesla.jpg',
  },
  {
    name: 'BMW 3 Series',
    price: 'PKR.15,000/day',
    image: '/bmw.jpg',
  },
  {
    name: 'Audi A4',
    price: 'PKR.15,000/day',
    image: '/AudiA4.jpg',
  },
  {
    name: 'Land Cruiser',
    price: 'PKR.13,000/day',
    image: '/Land-Cruiser.jpg',
  },
  {
    name: 'Fortuner',
    price: 'PKR.13,000/day',
    image: '/fortuner.jpg',
  },
  {
    name: 'Honda Civic',
    price: 'PKR.10,000/day',
    image: '/Honda_Civic.jpg',
  },
  {
    name: 'Corolla GLi',
    price: 'PKR.7000/day',
    image: '/Corolla-GLi.jpg',
  },
  {
    name: 'Corolla XLi',
    price: 'PKR.7000/day',
    image: '/Corolla-XLi.jpg',
  },
  {
    name: 'Suzuki Cultus',
    price: 'PKR.5000/day',
    image: '/Suzuki_Cultus.jpg',
  },
  {
    name: 'Suzuki WagonR',
    price: 'PKR.5000/day',
    image: '/Suzuki_Wagnor.jpg',
  },
  // Add more cars here
];

const Explore = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Explore Our Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
              <p className="text-gray-600">{car.price}</p>
              <Link href="/Contact" passHref >
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default Explore;



    
