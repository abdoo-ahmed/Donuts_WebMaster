import { useContext, useEffect } from 'react';
import { ProductsContext } from '../Context/ContextDonuts';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Menu() {
  const { products, loading } = useContext(ProductsContext);
  const categories = [...new Set(products.map(p => p.category))];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const getProductsByCategory = (category) =>
    products.filter((product) => product.category.toLowerCase() === category.toLowerCase());

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-pink" style={{ width: '4rem', height: '4rem', color: '#d63384' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'linear-gradient(to bottom right, #fff0f5, #ffe4e1)', minHeight: '100vh', fontFamily: "'Georgia', serif", paddingBottom: '4rem' }}>
      <div className="container py-5 animate__animated animate__lightSpeedInLeft">
        <h2 className="text-center mb-5 fw-bold animate__animated animate__fadeInDown" style={{ color : "#d63384" , fontSize: '2.5rem' }}>Our Menu</h2>
        {categories.map((category) => {
          const items = getProductsByCategory(category);
          return (
            <div key={category} className="mb-5">
              <h3 className="border-bottom pb-2 mb-4" style={{ color: '#b23a48' }}>{category}</h3>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-start mb-3 pb-2"
                  style={{ borderBottom: '1px solid #c25a66ff' }}
                  data-aos="fade-up"
                >
                  <div>
                    <h5 className="mb-1 fw-bold" style={{ color: '#333' }}>{item.name}</h5>
                    <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>
                      {item.description || 'Delicious and freshly made'}
                    </p>
                  </div>
                  <div>
                    <span className="fw-bold" style={{ color: '#b23a48' }}>{item.price} LE</span>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
