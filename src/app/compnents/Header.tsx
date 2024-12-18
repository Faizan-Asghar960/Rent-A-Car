import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-green-400 p-4">
      <div className="flex items-center justify-between">
        {/* Left Side: Logo and Name */}
        <div className="flex items-center">
          <Image src="/MFK-logo.jpg" alt="Image" width={100} height={100} />
          <div className="ml-4">
            <span className="text-black text-lg font-bold">MFK CARS</span>
            <p className="text-black text-sm italic">Your Dream Car Awaits</p> {/* Tagline */}
          </div>
        </div>

        {/* Center Text */}
        <div className="text-xl font-bold">
        <span>Welcome to MFK Cars&apos; All Cars Available For Self Rent.</span>

        </div>

        {/* Right Side: Empty to balance layout */}
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-5 justify-end mt-4 text-purple-700">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
