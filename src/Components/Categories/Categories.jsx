import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../Context/ContextDonuts";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Categories() {
  const { products, loading } = useContext(ProductsContext);
  const categories = [...new Set(products.map((p) => p.category))];
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div
          className="spinner-border text-pink"
          style={{ width: "4rem", color: "#d63384", height: "4rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          background: "linear-gradient(to bottom right, #fff0f5, #ffe4e1)",
          overflow: "hidden",
        }}
      >
        <div className="container py-5 animate__animated animate__fadeIn">
          <h2
            className="text-center mb-5 fw-bold animate__animated animate__fadeInDown"
            style={{ color: "#d63384" }}
          >
            Categories
          </h2>
          {categories.map((category, index) => (
            <div key={index} data-aos="fade-up" className="mb-5">
              <h4 className="fw-bold mb-4" style={{ color: "#f06292" }}>
                {category}
              </h4>
              <div className="row gy-4">
                {products
                  .filter((p) => p.category === category)
                  .map((product) => (
                    <div
                      className="col-md-4 col-lg-3 animate__animated animate__rollIn animate__faster"
                      key={product.id}
                    >
                      <div className="card h-100 shadow-sm border-0 rounded-4">
                        <img
                          src={product.image}
                          className="card-img-top rounded-top-4"
                          alt={product.name}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body text-center">
                          <h5
                            className="card-title fw-bold mb-1"
                            style={{ color: "#e91e63" }}
                          >
                            {product.name}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
