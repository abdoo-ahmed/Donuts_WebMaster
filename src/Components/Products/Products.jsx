import { useContext, useEffect} from 'react';
import { ProductsContext } from '../Context/ContextDonuts';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Products() {
  
  const { products, loading } = useContext(ProductsContext);
  useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
      });
    }, []);
  

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-pink" style={{ width: '4rem', color : "#d63384" , height: '4rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return <>
  
  <div style={{
        background: 'linear-gradient(to bottom right, #fff0f5, #ffe4e1)',
        overflow: 'hidden',
      }}>

      <div className="container py-5 animate__animated animate__fadeIn" >
        <h2 className="mb-5 text-center fw-bold animate__animated animate__fadeInDown" style={{color : "#d63384"}} >Products</h2>
        <div className="row gy-4">
          {products.map(product => (
            <div data-aos="fade-up" className="col-md-4 col-lg-3" key={product.id}>
            <div
                className="card h-100 shadow-sm border-0 rounded-4 animate__animated animate__zoomIn animate__faster"
                style={{
                  transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                  backgroundColor: '#fff'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(233, 30, 99, 0.25)';
                  e.currentTarget.style.backgroundColor = '#fff0f5';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
                  e.currentTarget.style.backgroundColor = '#fff';
                }}
              >
                <img
                  src={product.image}
                  className="card-img-top rounded-top-4"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-1" style={{ color: '#e91e63' }}>
                    {product.name}
                  </h5>
                  <p className="text-muted small mb-1" style={{ fontSize: '0.9rem' }}>
                    {product.category}
                  </p>
                  <p className="fw-bold mb-0" style={{ color: '#f48fb1', fontSize: '1.1rem' }}>
                    {product.price} pound
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>


    </div>
  
  </>;
}