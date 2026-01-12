



// import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // Filter categories for both API and fallback spelling variations
  const filteredProducts = products.filter(item => {
    const cat = item.category?.toLowerCase();
    return cat === "men's clothing" ||
           cat === "women's clothing" ||
           cat === "jewelery" || // API spelling
           cat === "jewellery"; // fallback spelling
  });

  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="container mx-auto">
          {/* Explore button/link at the top */}
          <div className="flex justify-center mb-10">
            <Link
              
              className="text-2xl md:text-3xl font-semibold bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-cyan-600 transition-shadow shadow-lg"
            >
              Explore Our Products
            </Link>
          </div>
          {/* The filtered grid ONLY for home/landing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] mx-auto md:max-w-none md:mx-0">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <Product product={product} key={product.id} />
              ))
            ) : (
              <div className="text-center text-red-600 font-semibold col-span-full">
                No products found for selected categories.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
