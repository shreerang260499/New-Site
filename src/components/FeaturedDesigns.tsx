
import React from 'react';
import { Star, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, DigitalProduct } from '../context/CartContext';

const featuredDesigns: DigitalProduct[] = [
  {
    id: 1,
    name: "Modern Coffee Table CNC Plan",
    price: 29.99,
    image: "/placeholder.svg",
    category: "Furniture",
    description: "Complete CNC cutting files for a sleek modern coffee table. Includes assembly instructions.",
    rating: 4.9,
    fileFormats: ["DXF", "SVG", "PDF"],
    fileSize: "2.5 MB",
    license: "Commercial",
    previewImages: ["/placeholder.svg"]
  },
  {
    id: 2,
    name: "Laser Cut Wall Art Set",
    price: 19.99,
    image: "/placeholder.svg", 
    category: "Decor",
    description: "Beautiful geometric wall art perfect for laser cutting. 5 different designs included.",
    rating: 4.8,
    fileFormats: ["SVG", "DXF"],
    fileSize: "1.8 MB",
    license: "Personal",
    previewImages: ["/placeholder.svg"]
  },
  {
    id: 3,
    name: "Miniature House 3D Model",
    price: 15.99,
    image: "/placeholder.svg",
    category: "3D Print",
    description: "Detailed miniature house model for 3D printing. Perfect for dioramas and displays.",
    rating: 4.7,
    fileFormats: ["STL", "OBJ"],
    fileSize: "12 MB",
    license: "Personal",
    previewImages: ["/placeholder.svg"]
  },
  {
    id: 4,
    name: "Custom Name Sign Template",
    price: 9.99,
    image: "/placeholder.svg",
    category: "Signs",
    description: "Customizable name sign template. Easy to edit with any text editing software.",
    rating: 5.0,
    fileFormats: ["SVG", "DXF", "AI"],
    fileSize: "800 KB",
    license: "Commercial",
    previewImages: ["/placeholder.svg"]
  },
  {
    id: 5,
    name: "Jewelry Box CNC Pattern",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Storage",
    description: "Elegant jewelry box with multiple compartments. Includes detailed cutting guide.",
    rating: 4.9,
    fileFormats: ["DXF", "SVG"],
    fileSize: "3.2 MB",
    license: "Personal",
    previewImages: ["/placeholder.svg"]
  },
  {
    id: 6,
    name: "Automotive Gauge Holder",
    price: 18.99,
    image: "/placeholder.svg",
    category: "Automotive",
    description: "Custom gauge holder for car dashboards. Fits standard 52mm gauges.",
    rating: 4.6,
    fileFormats: ["STL", "DXF"],
    fileSize: "4.1 MB",
    license: "Personal",
    previewImages: ["/placeholder.svg"]
  }
];

const FeaturedDesigns = () => {
  const { dispatch } = useCart();

  const addToCart = (product: DigitalProduct) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Designs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most popular and highest-rated digital files, ready for immediate download
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDesigns.map((design) => (
            <div
              key={design.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={design.image}
                  alt={design.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                  {design.license}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                  <Button size="sm" variant="outline" className="bg-white/90 text-black border-white/90">
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
                    {design.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {design.description}
                </p>

                {/* File info */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {design.fileFormats.map((format) => (
                    <span
                      key={format}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {format}
                    </span>
                  ))}
                </div>

                {/* Rating and file size */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1">{design.rating}</span>
                  </div>
                  <span>{design.fileSize}</span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${design.price}
                  </span>
                  <Button
                    onClick={() => addToCart(design)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Designs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDesigns;
