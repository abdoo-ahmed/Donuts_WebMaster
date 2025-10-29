// Components/About/About.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom right, #fff0f5, #ffe4e1)',
        height: 'h-auto',
        paddingTop: '60px',
        paddingBottom: '60px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#d63384' }}>
          About Us
        </h2>

        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <img
              src="https://img.freepik.com/free-photo/delicious-donuts-with-sprinkles-pink-background_23-2147851993.jpg"
              alt="donuts"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <p style={{ fontSize: '1.1rem', color: '#555' }}>
              Welcome to <strong>Dunkin Donuts </strong> – your ultimate destination for all things sweet and delightful! 🍩<br /><br />
              We're passionate about bringing you the best selection of donuts, crafted with love and flavor in every bite. Whether you're craving classic glazed or something fun and fruity, we’ve got it all!<br /><br />
              Our mission is to make your day sweeter and more colorful – one donut at a time. 💕<br /><br />
              Built with our website is designed for speed, simplicity, and satisfaction. ❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
