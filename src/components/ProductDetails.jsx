import React from 'react';

const ProductDetails = ({ product }) => {
    console.log(product,"productproductproduct")
  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="font-bold">{product.title}</h2>
      <p>Category: {product.category}</p>
      <img src={product.thumbnail} alt={product.title} className="w-24 h-24 object-cover" />
    </div>
  );
};

export default ProductDetails;