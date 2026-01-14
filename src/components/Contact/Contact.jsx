import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
      );
  };

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <section
        ref={sectionRef}
        id="contact"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] font-sans"
        aria-labelledby="contact-heading"
      >
        <ToastContainer />

        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
            >
              Get In Touch
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 mt-4 rounded-full mx-auto"
            />
            <p className="text-gray-400 mt-6 text-sm sm:text-base max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just
              a friendly chat
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden p-6 sm:p-8"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Email and Name - Two Column on Desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    required
                    onFocus={() => setFocusedField("user_email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-600"
                  />
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    onFocus={() => setFocusedField("user_name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-600"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows="5"
                  required
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-600 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 py-3 sm:py-3.5 text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
