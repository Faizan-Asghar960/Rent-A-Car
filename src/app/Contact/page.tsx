// pages/contact.tsx

import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input type="text" className="border border-gray-300 p-2 rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Contact No</label>
          <input type="email" className="border border-gray-300 p-2 rounded w-full" />
        </div> 
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2"> Date And Time</label>
          <input type="email" className="border border-gray-300 p-2 rounded w-full" />
        </div> 
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Address</label>
          <textarea className="border border-gray-300 p-2 rounded w-full" rows={4} />
          </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea className="border border-gray-300 p-2 rounded w-full" rows={4} />
        </div>
        
       
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
