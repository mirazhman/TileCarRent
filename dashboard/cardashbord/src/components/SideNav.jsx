import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <aside className="w-52 bg-gray-800 text-white">
      <div className="p-6">
        
        <nav>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:bg-gray-700 block py-2 px-4 rounded">
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/rentals" className="hover:bg-gray-700 block py-2 px-4 rounded">
                Rentals
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/car-section" className="hover:bg-gray-700 block py-2 px-4 rounded">
                Car Section
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/customer-section" className="hover:bg-gray-700 block py-2 px-4 rounded">
                Customer Section
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
