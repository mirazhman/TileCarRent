import React from 'react'

const Footer = () => {
  return (

        <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:justify-between">
            {/* Logo and Description */}
            <div className="w-60 mb-6 mx-auto lg:mb-0">
                <h2 className="text-2xl font-bold">Tile Car Rental</h2>
                <p className="mt-4 text-gray-400">
                The best car rental service in Hawassa. We offer a wide range of
                 vehicles to suit your needs, whether you're traveling for business
                  or leisure.
                </p>
            </div>

            {/* Navigation Menu */}
            <div className="mb-6 mx-auto lg:mb-0">
                <h3 className="text-lg font-semibold">Navigation</h3>
                <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-[#3c096c]">Home</a></li>
                <li><a href="#" className="hover:text-[#3c096c]">Our Cars</a></li>
                <li><a href="#" className="hover:text-[#3c096c]">wedding Cars</a></li>
                <li><a href="#" className="hover:text-[#3c096c]">About Us</a></li>
                <li><a href="#" className="hover:text-[#3c096c]">Airport pickup</a></li>
                </ul>
            </div>

            {/* Contact Information */}
            <div className='mx-auto'>
                <h3 className="text-lg font-semibold text-center underline underline-offset-4">Contact Us</h3>
                <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#3c096c]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5.25a.75.75 0 011.5 0v2a.75.75 0 01-.75.75H2.25a.75.75 0 010-1.5H3V5.25zM3 8.25a.75.75 0 011.5 0v4a.75.75 0 01-.75.75H2.25a.75.75 0 010-1.5H3V8.25zM21 5.25a.75.75 0 00-1.5 0v2a.75.75 0 00.75.75h1.25a.75.75 0 000-1.5H21V5.25zM21 8.25a.75.75 0 00-1.5 0v4a.75.75 0 00.75.75h1.25a.75.75 0 000-1.5H21V8.25zM8.5 3a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-3 0V4.5A1.5 1.5 0 018.5 3zm6.5 0a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-3 0V4.5A1.5 1.5 0 0115 3zM8.5 9.75a.75.75 0 00-.75.75v3.75a.75.75 0 001.5 0V10.5a.75.75 0 00-.75-.75zm6.5 0a.75.75 0 00-.75.75v3.75a.75.75 0 001.5 0V10.5a.75.75 0 00-.75-.75zM12 15a1.5 1.5 0 00-1.5 1.5v2a1.5 1.5 0 103 0v-2A1.5 1.5 0 0012 15z" />
                    </svg>
                    <span>+2519 15 71 52 75</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#3c096c]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.75 5.75v12.5A3.75 3.75 0 0118 22H6a3.75 3.75 0 01-3.75-3.75V5.75A3.75 3.75 0 016 2h12a3.75 3.75 0 013.75 3.75zM18 3.5H6a2.25 2.25 0 00-2.25 2.25v12.5A2.25 2.25 0 006 20.5h12a2.25 2.25 0 002.25-2.25V5.75A2.25 2.25 0 0018 3.5zm-6 7.75l-7.5-4.5v11.25A2.25 2.25 0 006 20.5h12a2.25 2.25 0 002.25-2.25V6.75l-7.5 4.5z" />
                    </svg>
                    <span>info@tilecarrental.com</span>
                </li>
                <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#3c096c]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.75 5.75v12.5A3.75 3.75 0 0118 22H6a3.75 3.75 0 01-3.75-3.75V5.75A3.75 3.75 0 016 2h12a3.75 3.75 0 013.75 3.75zM18 3.5H6a2.25 2.25 0 00-2.25 2.25v12.5A2.25 2.25 0 006 20.5h12a2.25 2.25 0 002.25-2.25V5.75A2.25 2.25 0 0018 3.5zm-6 7.75l-7.5-4.5v11.25A2.25 2.25 0 006 20.5h12a2.25 2.25 0 002.25-2.25V6.75l-7.5 4.5z" />
                    </svg>
                    <span>123 Main St, Hawassa, Ethiopia</span>
                </li>
                </ul>
            </div>
            </div>

            
        </div>
        <div className="mt-8 text-center text-gray-500">
            &copy; 2024 Tile Car Rental. All rights reserved.
            </div>
        </footer>
  )
}

export default Footer