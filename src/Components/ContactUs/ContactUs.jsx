// ContactUs.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #fff0f5, #ffe4e1)",
        height: "calc(100vh - 62px)",
        paddingTop: "30px",
        paddingBottom: "30px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#d63384" }}>
          Contact Us
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-8" data-aos="fade-up">
            <form className="bg-white p-5 rounded-4 shadow-sm">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Write your message here..."
                  rows="1"
                  style={{ overflow: "hidden", resize: "none" }}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#d63384",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "10px 0",
                  boxShadow: "0 4px 12px rgba(214, 51, 132, 0.3)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
