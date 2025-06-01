import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  
  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        
        // Reset form data after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error details:", error);
        toast.error('Error sending message. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
        });
      });
  };
  
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-10 px-2 sm:py-16 md:py-20 md:px-0"
    >
      <ToastContainer
        theme="dark"
        style={{ zIndex: 9999 }}
      />
      <RevealOnScroll>
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[50rem] px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in touch
          </h2>
          <form className="space-y-4 sm:space-y-6" onSubmit={handelSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name || ""}
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 sm:px-4 sm:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-sm sm:text-base"
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email || ""}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 sm:px-4 sm:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-sm sm:text-base"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                value={formData.message || ""}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 sm:px-4 sm:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 text-sm sm:text-base"
                placeholder="Write your message here..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
