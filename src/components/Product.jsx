

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, id);
  };

  return (
    <div
      className="
        group 
        relative 
        bg-white
        rounded-lg 
        overflow-hidden 
        transition-all duration-300
        hover:shadow-xl 
        border border-gray-200
        hover:border-gray-300
      "
      data-aos="fade-up"
    >
      {/* Image Container */}
      <Link to={`/product/${id}`} className="block relative h-64 bg-gray-50 overflow-hidden">
        <img
          className="
            w-full h-full
            object-contain
            p-8
            transition-transform 
            duration-500
            group-hover:scale-105
          "
          src={image}
          alt={title}
        />

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex gap-2 z-50">
          <button
            onClick={handleAddToCart}
            className="
              w-10 h-10 
              rounded-full 
              flex items-center justify-center 
              bg-black
              text-white 
              opacity-0
              group-hover:opacity-100
              hover:bg-gray-800
              transition-all duration-200
            "
            title="Add to Cart"
            aria-label="Add to Cart"
            type="button"
          >
            <BsPlus className="text-2xl" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              w-10 h-10 
              rounded-full 
              flex items-center justify-center
              bg-white
              text-gray-800
              border border-gray-200
              opacity-0
              group-hover:opacity-100
              hover:bg-gray-50
              transition-all duration-200
            "
            title="View Details"
            aria-label="View Product Details"
          >
            <BsEyeFill className="text-lg" />
          </div>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="absolute top-3 left-3 z-40">
            <span className="px-3 py-1  bg-white rounded-md  text-xs 
font-medium  text-gray-700 capitalize border border-gray-200
            ">
              {category}
            </span>
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <Link to={`/product/${id}`}>
          <h3 className="
            text-base
            font-medium 
            text-gray-900 
            line-clamp-2
            min-h-[3rem]
            hover:text-gray-700 
            transition-colors duration-200
          ">
            {title}
          </h3>
        </Link>

        {/* Price and Cart Button Row */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-semibold text-gray-900">
            ${price.toFixed(2)}
          </span>

          <button
            onClick={handleAddToCart}
            type="button"
            className="
              px-4 py-2
              bg-black
              text-white 
              text-sm
              font-medium
              rounded-md
              hover:bg-cyan-500
              active:bg-cyan-500
              transition-colors duration-200
            "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;