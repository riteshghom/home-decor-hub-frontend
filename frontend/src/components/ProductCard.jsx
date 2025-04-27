import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.vendorName}</p>
      <p className="text-green-600 font-semibold">${product.price}</p>
      <Link to={`/product/${product.id}`} className="block mt-2 text-blue-500">View Details</Link>
    </div>
  );
}

export default ProductCard;
