import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${config.PRODUCT_SERVICE_URL}/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover" />
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-2">{product.vendorName}</p>
          <p className="text-green-600 text-xl font-semibold mb-6">${product.price}</p>
          <a href={product.affiliateLink} target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-6 py-2 rounded">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
