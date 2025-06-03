
import React from 'react';
import { FileText, Scissors, Box, Home, Car, Wrench } from 'lucide-react';

const categories = [
  { 
    name: 'CNC Files', 
    icon: Wrench, 
    color: 'bg-blue-500',
    description: 'DXF, SVG for CNC routers',
    count: '150+ designs'
  },
  { 
    name: 'Laser Cut', 
    icon: Scissors, 
    color: 'bg-red-500',
    description: 'Precision laser cutting files',
    count: '200+ designs'
  },
  { 
    name: '3D Print', 
    icon: Box, 
    color: 'bg-green-500',
    description: 'STL files for 3D printing',
    count: '100+ models'
  },
  { 
    name: 'Home Decor', 
    icon: Home, 
    color: 'bg-purple-500',
    description: 'Wall art, furniture plans',
    count: '80+ designs'
  },
  { 
    name: 'Automotive', 
    icon: Car, 
    color: 'bg-yellow-500',
    description: 'Car parts, accessories',
    count: '50+ files'
  },
  { 
    name: 'Templates', 
    icon: FileText, 
    color: 'bg-indigo-500',
    description: 'Printable templates',
    count: '120+ files'
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect digital files for your CNC machine, laser cutter, or 3D printer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start space-x-4">
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {category.description}
                  </p>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
